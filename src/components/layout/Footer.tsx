import Link from 'next/link';

function LogoSvg() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#3AA39F" />
      <text x="20" y="26" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Poppins">M</text>
    </svg>
  );
}

export default function Footer({ disclaimer }: { disclaimer?: string }) {
  return (
    <footer className="bg-black text-white pt-10 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        {disclaimer && (
          <p className="text-xs text-gray-600 mb-6">{disclaimer}</p>
        )}
        <div className="h-px bg-white/10 mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <LogoSvg />
              <span className="text-xl font-bold text-white">myyshop</span>
            </Link>
          </div>

          {/* MyyShop */}
          <div>
            <h4 className="text-base font-semibold mb-4">MyyShop</h4>
            <Link href="/resources/blog" className="block text-sm text-gray-400 mb-2 hover:text-white transition-colors">Blog</Link>
          </div>

          {/* Follow us */}
          <div>
            <h4 className="text-base font-semibold mb-4">Follow us</h4>
            <div className="flex gap-4 mb-3">
              <a href="https://www.instagram.com/myyshopcreators" className="text-sm text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="https://www.tiktok.com/@myyshopcreators" className="text-sm text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Tiktok
              </a>
            </div>
            <a href="mailto:support@myyshop.com" className="block text-sm text-gray-400 hover:text-white transition-colors">
              &#9993; support@myyshop.com
            </a>
            <p className="text-[13px] text-gray-500 mt-2 leading-relaxed">
              &#9737; 360 E 2nd St, Suite 350, Los Angeles, CA 90012
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-base font-semibold mb-4">Legal</h4>
            <Link href="#" className="block text-sm text-gray-400 mb-2 hover:text-white transition-colors">Terms of Condition</Link>
            <Link href="#" className="block text-sm text-gray-400 mb-2 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-8" />
        <p className="text-center text-xs text-gray-500">&copy; 2020-2026 MyyShop Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
}
