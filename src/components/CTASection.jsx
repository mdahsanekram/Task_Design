import React from 'react';

const CTASection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="bg-gradient-to-br from-[#2a2a2a] to-setapp-gray rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center border border-white/10 relative overflow-hidden">
        
        {/* Decorative Logo */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500 rounded-sm rotate-12"></div>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
          Superpowers starting $9.99/month.<br />
          Free for 7 days.
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button className="w-full sm:w-auto bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base">
            Get a 7-day trial
          </button>
          <button className="w-full sm:w-auto border border-white/20 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-200 text-sm sm:text-base">
            Show Special Offers
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
