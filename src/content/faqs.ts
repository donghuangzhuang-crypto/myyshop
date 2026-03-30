export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  icon: string;
  title: string;
  items: FAQ[];
}

export const homepageFaqs: FAQ[] = [
  { question: 'What is MyyShop?', answer: 'MyyShop is an AI-driven global creator marketing platform that connects social media creators with brand collaborations. Part of DHgate Group, we provide tools for product discovery, campaign management, and earnings tracking.' },
  { question: 'How do I earn on MyyShop?', answer: 'There are two ways: Content Creation (apply for brand campaigns, create content, get paid) and Showcase & Earn (curate products on your storefront and earn from audience engagement). You can do both simultaneously.' },
  { question: 'Is MyyShop free?', answer: 'Yes! MyyShop is completely free for creators. There are no subscription fees, no hidden charges, and no platform withdrawal fees.' },
  { question: 'What are the payout terms?', answer: 'Payments are processed every Friday via PayPal. The minimum withdrawal threshold is $50. MyyFinds earnings are $0.0025 per view, with a cap of $5 per product.' },
];

export const faqCategories: FAQCategory[] = [
  {
    id: 'about', icon: '💡', title: 'About MyyShop',
    items: [
      { question: 'What is MyyShop?', answer: 'MyyShop is an AI-driven global creator marketing platform that connects creators with high-quality, diverse, and reliable brand collaborations. Our Mission: Massive Global Collaborations, Maximize Your Value. We offer 100,000+ annual campaigns, AI-powered matching, and end-to-end solutions from content creation to rights protection.' },
      { question: 'How is MyyShop different from traditional marketing agencies?', answer: 'MyyShop uses AI-driven matching (80% faster), accepts all creators (0 followers to top-tier), charges 0% platform fees (vs 5-30% traditional), and provides standardized processes with platform arbitration for dispute resolution.' },
      { question: 'Why should creators join MyyShop?', answer: 'Campaign Opportunities: Massive global campaigns yearly; zero-followers can apply. Growth Support: AI tools + expert guidance. Transparent Earnings: Real-time analytics dashboard; no platform withdrawal fees. Rights Protection: Pre-approval copyright safeguards + professional arbitration.' },
      { question: 'What is the relationship between MyyShop and DHgate?', answer: 'MyyShop and DHgate are both part of DHgate Group. MyyShop focuses on creator marketing and brand collaborations, while DHgate specializes in B2B cross-border e-commerce. Creators benefit from the Group\'s strong supply chain and logistics support.' },
    ],
  },
  {
    id: 'registration', icon: '👤', title: 'Registration & Access',
    items: [
      { question: 'Can I register on MyyShop without followers?', answer: 'Yes! MyyShop supports 0-follower creators on TikTok, Instagram, YouTube, Reddit, Facebook, and X (Twitter). You can start earning through content creation immediately. Once your followers meet brand requirements, you unlock high-earning "promotion link" campaigns.' },
      { question: 'What documents are required for registration?', answer: 'Just basic email registration (no complex verification). You can authorize your TikTok account or input other social media profiles, then start browsing and applying for matched campaigns immediately.' },
    ],
  },
  {
    id: 'myyfinds', icon: '💸', title: 'MyyFinds Passive Income',
    items: [
      { question: 'What is MyyFinds?', answer: 'MyyFinds is a feature that allows you to earn from every product view without requiring clicks or sales. Share your MyyFinds link, people browse your curated products, and you earn from every view.' },
      { question: 'How do I earn with MyyFinds?', answer: 'Step 1: Share your MyyFinds link and invite everyone to browse products. Step 2: Earn $0.0025 per product view. You can have up to 50 products in your list with a maximum potential of $5 per product. Example: If your MyyFinds contains 50 products and 40 users view all of them, you can earn up to $5.' },
    ],
  },
  {
    id: 'campaigns', icon: '🏆', title: 'Campaign Opportunities',
    items: [
      { question: 'What types of campaigns are available?', answer: 'Industries include e-commerce, gaming, software, local services, and global brands. Campaign types: content creation, promotion posts, product reviews, seasonal campaigns. Over 100,000 campaigns annually with creators able to apply for 10 campaigns daily.' },
      { question: 'What content formats are supported?', answer: 'Content Types: Text posts, images/videos, unboxing reviews, surveys, and more. Templates are optimized for TikTok, Instagram, YouTube, Reddit, Facebook, and X.' },
    ],
  },
  {
    id: 'earnings', icon: '💰', title: 'Earnings & Payouts',
    items: [
      { question: 'How do I earn on MyyShop?', answer: 'Passive Income: Share MyyFinds link, earn per product view — best for all creators. Active Income: Apply for content/promotion campaigns — best for content creators. Beginner Recommendation: Start with content creation tasks, then scale up to multiple revenue channels.' },
      { question: 'What is the payment cycle?', answer: 'MyyFinds: Daily update → Pending (3 days) → Available. Content Campaigns: Approval + 24 hours → Available. Once your Available Balance reaches $50, you can initiate a withdrawal. Payouts occur every Friday. Requests submitted before Tuesday 0:00 ET are paid the same Friday.' },
      { question: 'How much can I earn from MyyFinds?', answer: 'Each product view earns approximately $0.0025. You can list up to 50 products, and the maximum earnings are capped at $5 per product. The key is sharing your link widely to maximize views.' },
    ],
  },
  {
    id: 'process', icon: '⚙️', title: 'Collaboration Process',
    items: [
      { question: 'How long do I have to complete a campaign?', answer: 'For campaigns with samples: 59 days from the offer confirmation email. For campaigns without samples: 14 days. If content is rejected, you have 14 days for each revision (up to 2 revisions allowed).' },
      { question: 'How do I get free samples?', answer: 'Campaigns marked with [Sample] include free product shipping paid by brands. After campaign approval, products are shipped within 10 days and arrive within 15-45 days. All sample products are yours to keep.' },
      { question: 'What happens after I submit my content?', answer: 'Brands review your content within 3-5 business days. If approved, payment is credited within 24 hours to your Available Balance. If rejected, you receive specific feedback and have 14 days to revise.' },
      { question: 'Can I work with multiple brands simultaneously?', answer: 'Yes! You can apply to and manage multiple campaigns at the same time. MyyShop\'s dashboard helps you track all active collaborations, deadlines, and payments in one place.' },
    ],
  },
  {
    id: 'review', icon: '⚖️', title: 'Review & Appeals',
    items: [
      { question: 'What happens if a brand rejects my content?', answer: 'Brands can reject content up to 2 times with specific feedback on quantitative criteria. After the second rejection, the platform intervenes to arbitrate based on standards. You have 14 days for each revision round.' },
      { question: 'Am I responsible if a product has quality issues?', answer: 'No, creators are not responsible for product quality issues. You must immediately remove related content and submit a brand complaint email. The platform will investigate and handle the non-compliant brand while helping you complete the campaign.' },
      { question: 'How does the appeal process work?', answer: 'If you disagree with a brand\'s decision, you can submit an appeal through the platform. MyyShop\'s arbitration team reviews the case based on campaign requirements and platform standards, providing a fair resolution within 5 business days.' },
      { question: 'What are MyyShop\'s content guidelines?', answer: 'Content must be original, authentic, and comply with platform community guidelines. No misleading claims, false endorsements, or copyrighted material. MyyShop provides content templates and guidelines for each campaign.' },
    ],
  },
  {
    id: 'referral', icon: '🎁', title: 'Referral Program',
    items: [
      { question: 'How does the referral program work?', answer: 'Share your unique referral link with other creators. When they sign up and complete their first campaign, both you and the referred creator earn bonus rewards.' },
      { question: 'What are the referral rewards?', answer: 'Referral rewards vary by program and are credited to your Available Balance. Check the Referral section in your MyyShop dashboard for current reward details and your referral performance.' },
    ],
  },
];
