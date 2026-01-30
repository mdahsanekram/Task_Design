import React from 'react';

const Footer = () => {
  const footerLinks = {
    Setapp: ['Pricing', 'For Teams', 'About Setapp', 'Blog'],
    Apps: ['iOS apps', 'macOS apps', 'All apps'],
    Help: ['Support', 'Contact us', 'Get iOS App', 'Student discount', 'Setapp for Teams'],
    Legal: ['Privacy policy', 'Terms of use', 'Acceptable Use Policy', 'All docs'],
  };

  const socialPlatforms = ['facebook', 'twitter', 'youtube', 'instagram'];

  return (
    <footer className="border-t border-white/10 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Newsletter Section */}
        <div className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
            <div className="flex-1">
              <h3 className="text-sm font-semibold mb-2 text-white">
                Get early access to Setapp news.
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Subscribe to our newsletter and be among the first ones to know about promos,<br className="hidden sm:inline" />
                new apps, and updates.
              </p>
            </div>
            
            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Email"
                className="bg-white/5 border border-white/10 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm outline-none focus:border-white/30 transition-colors duration-200 w-full sm:w-64 text-white placeholder:text-white/40"
                aria-label="Enter your email address"
              />
              <button className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-200 text-sm shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm text-white">{category}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-white/60 hover:text-white transition-colors duration-200 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8 text-xs text-white/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-sm flex-shrink-0"></div>
              <span>Made by</span>
            </div>
            
            {/* Copyright */}
            <span className="leading-relaxed">
              © 2002-2025 MacPaw Inc. 23046744, Kyiv, Ukraine,<br className="sm:hidden" />
              Stepana Bandery Avenue, 32, Unit 32.
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4">
            {socialPlatforms.map((platform) => (
              <button
                key={platform}
                className="w-6 h-6 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 group"
                aria-label={`Visit our ${platform} page`}
              >
                <div className="w-3 h-3 bg-white/30 group-hover:bg-white/50 rounded-sm transition-colors duration-200"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
