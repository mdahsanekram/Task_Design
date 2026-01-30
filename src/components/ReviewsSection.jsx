import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      text: "I've been using Setapp for about two years now and the most cost-effective way of having apps on Mac.",
      author: "Anand Panchbhaya",
      platform: "twitter",
      verified: true,
    },
    {
      text: "My favourite tech subscription—no question. MacWorld, Sarah Brambilla and dozens more.",
      author: "MacWorld, by Sarah",
      platform: "instagram",
      verified: true,
    },
    {
      text: "For those of you that wonder if Setapp is awesome apps for my Mac that I use a lot of them an hour.",
      author: "Manuela Suave",
      platform: "twitter",
      verified: true,
    },
  ];

  const socialPlatforms = [
    { name: 'Facebook', color: 'bg-blue-600' },
    { name: 'Twitter', color: 'bg-sky-500' },
    { name: 'YouTube', color: 'bg-red-600' },
    { name: 'Instagram', color: 'bg-pink-600' },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Setapp in your words.</h2>
        
        <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-col sm:flex-row w-full lg:w-auto">
          <p className="text-white/50 text-xs sm:text-sm leading-relaxed">
            We'd greatly appreciate<br className="hidden sm:inline" />
            learning how your<br className="hidden sm:inline" />
            experience was.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-2">
            {socialPlatforms.map((platform, idx) => (
              <button
                key={idx}
                className={`w-8 h-8 sm:w-9 sm:h-9 ${platform.color} hover:opacity-80 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 transform hover:scale-110 shadow-lg`}
                aria-label={`Visit our ${platform.name} page`}
              >
                <div className="w-4 h-4 bg-white/90 rounded-sm"></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="relative">
        {/* Reviews Container */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-80 lg:w-96 bg-gradient-to-br from-setapp-purple-800 to-setapp-purple-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
              >
                {/* Review Text */}
                <p className="text-sm sm:text-base leading-relaxed mb-6 text-white/95 min-h-[80px]">
                  {review.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">
                      {review.author}
                    </div>
                    <div className="text-xs text-white/60 flex items-center gap-1.5 mt-1">
                      <span className="capitalize">{review.platform}</span>
                      {review.verified && (
                        <CheckCircle2 className="w-3 h-3 text-blue-400 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                  {/* Avatar Placeholder */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex-shrink-0 ml-3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          <button
            onClick={handlePrev}
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-200 group"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-200 group"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === activeIndex ? 'bg-white w-6' : 'bg-white/30'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
