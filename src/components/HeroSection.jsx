import React from 'react';
import FloatingSticker, { BorderSticker } from './FloatingSticker';
import { Play, Info } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Floating Stickers - Left Side */}
        <FloatingSticker 
          text="NOTION"
          subtext="KEEP IT TIDY"
          bgColor="bg-[#FFB4A2]"
          rotation="rotate-12"
          className="hidden lg:block -left-20 top-10"
        />
        
        <BorderSticker 
          text="STAY SAFE ONLINE"
          rotation="-rotate-6"
          className="hidden md:block left-4 lg:left-8 top-24 lg:top-32"
        />
        
        <FloatingSticker 
          text="FOCUS"
          subtext="BETTER"
          bgColor="bg-[#87CEEB]"
          rotation="rotate-12"
          className="hidden sm:block left-8 lg:left-12 bottom-12 lg:bottom-0"
        />

        {/* Floating Stickers - Right Side */}
        <FloatingSticker 
          text="EDIT VIDEO"
          bgColor="bg-[#FFE4B5]"
          rotation="-rotate-12"
          className="hidden lg:block -right-20 top-20"
        />
        
        <FloatingSticker 
          text="PLAN"
          subtext="BETTER"
          bgColor="bg-[#98D8C8]"
          rotation="rotate-6"
          className="hidden md:block right-4 lg:right-8 top-32 lg:top-40"
        />
        
        <FloatingSticker 
          text="CODE"
          subtext="FASTER"
          bgColor="bg-[#FFB347]"
          rotation="-rotate-6"
          className="hidden sm:block right-8 lg:right-12 bottom-16 lg:bottom-8"
        />

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white">
          Dozens of apps.<br />
          One subscription.<br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">$9.99</span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
          <button 
            className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-200 text-sm shadow-xl hover:shadow-2xl transform hover:scale-105"
            aria-label="Start your free 7-day trial">
            Try free for 7 days
          </button>
          
          <button 
            className="bg-setapp-gray border border-white/20 text-white p-2.5 sm:p-3 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-200 group"
            aria-label="Watch video">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current group-hover:scale-110 transition-transform" />
          </button>
          
          <button 
            className="bg-setapp-gray border border-white/20 text-white p-2.5 sm:p-3 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-200 group"
            aria-label="More information">
            <Info className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Subtext */}
        <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
          $107.89 value. Cancel anytime.<br />
          7-day free trial for new users.
        </p>
      </div>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-20 border-t border-white/10 pt-6 sm:pt-8 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">What you get on Setapp.</h2>
          <p className="text-white/50 text-xs sm:text-sm max-w-md">
            Over 240 Mac apps for any task you can do, use, create, or edit on your Mac.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
