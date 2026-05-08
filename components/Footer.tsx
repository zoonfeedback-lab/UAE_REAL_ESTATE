import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M9 21V9a3 3 0 0 0-3-3H4a1 1 0 0 0-1 1v14" />
                  <path d="M15 21V5a3 3 0 0 0-3-3h-2a1 1 0 0 0-1 1v16" />
                  <path d="M21 21v-8a3 3 0 0 0-3-3h-2a1 1 0 0 0-1 1v10" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">EstateHub</span>
            </Link>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Connecting sophisticated buyers with extraordinary properties since 2014.
            </p>
          </div>

          {/* Links: Platform */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-6">Subscribe for exclusive market insights.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary pr-12 transition-all"
              />
              <button className="absolute right-1.5 top-1.5 bg-primary text-white p-2 rounded-md hover:bg-primary-hover transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
          <p>© 2024 EstateHub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
