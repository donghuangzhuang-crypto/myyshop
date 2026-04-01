'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { faqCategories } from '@/content/faqs';

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ 'about-0': true });
  const [activeCategory, setActiveCategory] = useState('about');
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    Object.values(categoryRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = faqCategories.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) =>
      item.question.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light via-primary-bg to-white py-20 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
            Everything you need to know about MyyShop creator platform, from registration to getting paid
          </p>
          <div className="relative max-w-md mx-auto">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">&#128269;</span>
            <input
              type="text"
              placeholder="Search for answers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Categories</h3>
                <ul className="flex flex-col gap-1">
                  {faqCategories.map((cat) => (
                    <li key={cat.id}>
                      <a
                        href={`#${cat.id}`}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeCategory === cat.id
                            ? 'bg-primary-bg text-primary font-semibold'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {cat.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main */}
            <div className="flex flex-col gap-12">
              {filteredCategories.map((cat) => (
                <div
                  key={cat.id}
                  id={cat.id}
                  ref={(el) => { categoryRefs.current[cat.id] = el; }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{cat.icon}</span>
                    <h2 className="text-xl font-bold">{cat.title}</h2>
                  </div>
                  <div className="flex flex-col">
                    {cat.items.map((item, i) => {
                      const key = `${cat.id}-${i}`;
                      const isOpen = openItems[key];
                      return (
                        <div key={key} className="border-b border-gray-200">
                          <button
                            onClick={() => toggleItem(key)}
                            className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                          >
                            <span className="text-base font-semibold text-dark pr-4">{item.question}</span>
                            <span className={`text-xl font-light text-gray-500 min-w-[24px] text-center transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
