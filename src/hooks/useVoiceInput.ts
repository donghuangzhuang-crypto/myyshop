'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

export type VoiceStatus =
  | 'idle'
  | 'recording'
  | 'error';

interface UseVoiceInputReturn {
  status: VoiceStatus;
  recordingSeconds: number;
  toggleRecording: () => void;
  transcribedText: string | null;
  error: string | null;
  supported: boolean;
}

// Browser SpeechRecognition with vendor prefix
const SpeechRecognition =
  typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

export function useVoiceInput(): UseVoiceInputReturn {
  const [status, setStatus] = useState<VoiceStatus>('idle');
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [transcribedText, setTranscribedText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<InstanceType<NonNullable<typeof SpeechRecognition>> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const supported = !!SpeechRecognition;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      recognitionRef.current?.abort();
    };
  }, []);

  const stopRecording = useCallback(() => {
    recognitionRef.current?.stop();
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setStatus('idle');
  }, []);

  const startRecording = useCallback(() => {
    if (!SpeechRecognition) {
      setError('您的浏览器不支持语音输入，请使用 Chrome 或 Safari');
      setStatus('error');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'zh-CN';
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: { results: SpeechRecognitionResultList }) => {
      const transcript = event.results[0][0].transcript;
      setTranscribedText(transcript);
      setStatus('idle');
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    recognition.onerror = (event: { error: string }) => {
      if (event.error === 'aborted' || event.error === 'no-speech') {
        setStatus('idle');
        return;
      }
      setError(
        event.error === 'not-allowed'
          ? '请允许麦克风权限后重试'
          : '语音识别出错，请重试',
      );
      setStatus('error');
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    recognition.onend = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setStatus((s) => (s === 'recording' ? 'idle' : s));
    };

    recognitionRef.current = recognition;
    recognition.start();

    setStatus('recording');
    setRecordingSeconds(0);
    timerRef.current = setInterval(() => {
      setRecordingSeconds((s) => s + 1);
    }, 1000);
  }, []);

  const toggleRecording = useCallback(() => {
    setError(null);
    setTranscribedText(null);

    if (status === 'recording') {
      stopRecording();
      return;
    }

    if (status !== 'idle' && status !== 'error') return;
    startRecording();
  }, [status, startRecording, stopRecording]);

  return {
    status,
    recordingSeconds,
    toggleRecording,
    transcribedText,
    error,
    supported,
  };
}
