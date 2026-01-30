import React from 'react';

const FloatingSticker = ({ text, subtext, bgColor, rotation, className }) => {
  return (
    <div 
      className={`absolute transform hover:scale-105 transition-transform duration-300 ${rotation} ${className}`}
      style={{ animationDelay: `${Math.random() * 2}s` }}
    >
      <div className={`${bgColor} text-black px-5 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300`}>
        <div className="text-xs sm:text-sm font-bold tracking-tight">{text}</div>
        {subtext && (
          <div className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 font-medium opacity-80">{subtext}</div>
        )}
      </div>
    </div>
  );
};

// Special sticker variant with border
export const BorderSticker = ({ text, rotation, className }) => {
  return (
    <div 
      className={`absolute transform hover:scale-105 transition-transform duration-300 ${rotation} ${className}`}
      style={{ animationDelay: `${Math.random() * 2}s` }}
    >
      <div className="bg-white text-black px-4 sm:px-5 py-2 sm:py-3 rounded-full shadow-2xl border-4 border-black hover:shadow-3xl transition-shadow duration-300">
        <div className="text-xs sm:text-sm font-bold tracking-tight">{text}</div>
      </div>
    </div>
  );
};

export default FloatingSticker;
