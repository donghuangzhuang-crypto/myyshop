import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MyyShop Blog',
  description: 'Tips, guides, and updates from the MyyShop creator platform.',
};

const blogPosts = [
  { title: 'How to Maximize Your Creator Earnings in 2026', category: 'Monetization', date: 'Mar 15, 2026', readTime: '5 min', gradient: 'from-primary to-[#5ED4D0]' },
  { title: 'Top 10 TikTok Trends for Brand Collaborations', category: 'Trends', date: 'Mar 10, 2026', readTime: '7 min', gradient: 'from-secondary to-[#6B7FE8]' },
  { title: 'Building Your Personal Brand as a Micro-Influencer', category: 'Growth', date: 'Mar 5, 2026', readTime: '6 min', gradient: 'from-accent to-[#FFB366]' },
  { title: 'Understanding MyyFinds: A Complete Guide', category: 'Platform Tips', date: 'Feb 28, 2026', readTime: '4 min', gradient: 'from-[#7C3AED] to-[#A78BFA]' },
  { title: 'Cross-Border E-Commerce for Creators', category: 'Industry', date: 'Feb 20, 2026', readTime: '8 min', gradient: 'from-[#E84393] to-[#FD79A8]' },
  { title: 'How AI is Changing Influencer Marketing', category: 'AI & Innovation', date: 'Feb 15, 2026', readTime: '6 min', gradient: 'from-primary-darker to-primary' },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-light via-primary-bg to-white py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">MyyShop Blog</h1>
          <p className="text-base text-gray-600">Tips, guides &amp; updates for creators</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.title} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-end p-6`}>
                  <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-6">
                  <h2 className="text-base font-bold mb-3 line-clamp-2">{post.title}</h2>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
