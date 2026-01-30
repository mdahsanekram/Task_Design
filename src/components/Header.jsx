import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-setapp-dark/90 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-8 lg:gap-10">
            {/* Logo - Setapp Icon */}
            <div className="w-5 h-5 relative flex-shrink-0" 
                 aria-label="Setapp Logo" 
                 role="img">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="20" height="20" rx="2" fill="url(#gradient)" />
                <rect x="4" y="4" width="5" height="5" fill="white" opacity="0.9" />
                <rect x="11" y="4" width="5" height="5" fill="white" opacity="0.7" />
                <rect x="4" y="11" width="5" height="5" fill="white" opacity="0.7" />
                <rect x="11" y="11" width="5" height="5" fill="white" opacity="0.9" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="20" y2="20">
                    <stop stopColor="#FF6B35" />
                    <stop offset="1" stopColor="#F7931E" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            
          </div>

          {/* Right Side - Language, Sign in, CTA */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 text-[13px]">
              <a href="#apps" 
                 className="text-white hover:text-white/70 transition-colors duration-200">
                How It Works
              </a>
              <a href="#all-apps" 
                 className="text-white/60 hover:text-white transition-colors duration-200">
                All apps
              </a>
              <a href="#pricing" 
                 className="text-white/60 hover:text-white transition-colors duration-200">
                Pricing
              </a>
              <a href="#teams" 
                 className="text-white/60 hover:text-white transition-colors duration-200">
                For Teams
              </a>
              <a href="#blog" 
                 className="text-white/60 hover:text-white transition-colors duration-200">
                Blog
              </a>
              <a href="#resources" 
                 className="text-white/60 hover:text-white transition-colors duration-200">
                Resource
              </a>
            </div>
            {/* Language Selector */}
            <button className="hidden md:flex items-center gap-1 text-[13px] text-white/60 hover:text-white transition-colors duration-200"
                    aria-label="Select language">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span>English</span>
            </button>

            {/* Sign in */}
            <a href="#signin" 
               className="hidden md:block text-[13px] text-white/60 hover:text-white transition-colors duration-200 px-3 py-1.5"
               aria-label="Sign in to your account">
              Sign in
            </a>

            {/* CTA Button */}
            <button className="text-[13px] bg-white text-black hover:bg-white/90 transition-all duration-200 px-5 py-1.5 rounded-full font-medium"
                    aria-label="Start your 7-day free trial">
              Get Free
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
