const EVOLINK_BASE = 'https://api.evolink.ai/v1';
const POLL_INTERVAL = 3000;
const TIMEOUT = 120000;

export async function POST(request: Request) {
  const { report } = await request.json();

  const apiKey = process.env.EVOLINK_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'EVOLINK_API_KEY not configured' }, { status: 500 });
  }

  const profile = report?.['画像信息'];
  const creation = report?.['创作信息'];
  if (!profile) {
    return Response.json({ error: 'Invalid report data' }, { status: 400 });
  }

  const prompt = buildPrompt(profile, creation);

  try {
    // Step 1: Submit task
    const submitRes = await fetch(`${EVOLINK_BASE}/images/generations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gemini-3.1-flash-image-preview',
        prompt,
        size: '9:16',
        quality: '1K',
      }),
    });

    if (!submitRes.ok) {
      const text = await submitRes.text();
      console.error('EvoLink submit error:', submitRes.status, text);
      return Response.json({ error: 'Image generation failed' }, { status: 502 });
    }

    const submitData = await submitRes.json();
    const taskId = submitData.id;
    if (!taskId) {
      return Response.json({ error: 'No task ID returned' }, { status: 502 });
    }

    // Step 2: Poll for completion
    const startTime = Date.now();
    while (Date.now() - startTime < TIMEOUT) {
      await new Promise((r) => setTimeout(r, POLL_INTERVAL));

      const pollRes = await fetch(`${EVOLINK_BASE}/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });
      const taskData = await pollRes.json();

      if (taskData.status === 'completed') {
        const results = taskData.results || [];
        const imgUrl = typeof results[0] === 'string' ? results[0] : results[0]?.url;
        if (!imgUrl) {
          return Response.json({ error: 'No image URL in results' }, { status: 502 });
        }

        // Step 3: Download image and convert to base64
        const imgRes = await fetch(imgUrl, {
          headers: { Authorization: `Bearer ${apiKey}` },
        });
        if (!imgRes.ok) {
          return Response.json({ error: 'Image download failed' }, { status: 502 });
        }

        const buffer = await imgRes.arrayBuffer();
        const contentType = imgRes.headers.get('content-type') || 'image/png';
        const b64 = Buffer.from(buffer).toString('base64');
        return Response.json({ imageDataUrl: `data:${contentType};base64,${b64}` });
      }

      if (taskData.status === 'failed') {
        console.error('EvoLink task failed:', taskData.error);
        return Response.json({ error: 'Image generation failed' }, { status: 502 });
      }
    }

    return Response.json({ error: 'Image generation timed out' }, { status: 504 });
  } catch (err) {
    console.error('generate-avatar error:', err);
    return Response.json({ error: 'Internal error' }, { status: 500 });
  }
}

function buildPrompt(
  profile: Record<string, unknown>,
  creation?: Record<string, unknown>
): string {
  const parts: string[] = [
    'Create a stylized, vibrant illustration of a content creator persona.',
    'Style: modern flat illustration with soft gradients, clean lines, warm palette.',
    'Do NOT include any text or words in the image.',
  ];

  if (profile.persona_summary) {
    parts.push(`The creator is: ${profile.persona_summary}.`);
  }
  if (Array.isArray(profile.personality_tags) && profile.personality_tags.length) {
    parts.push(`Personality traits: ${profile.personality_tags.join(', ')}.`);
  }
  if (Array.isArray(profile.interest_track) && profile.interest_track.length) {
    parts.push(`Content interests: ${profile.interest_track.join(', ')}.`);
  }
  if (creation?.content_style) {
    parts.push(`Content style: ${creation.content_style}.`);
  }
  if (profile.target_audience) {
    parts.push(`Target audience: ${profile.target_audience}.`);
  }

  parts.push('Background should be abstract and colorful, suitable as a hero banner.');
  return parts.join(' ');
}
