import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through and out for more time to play.",
      author: "Jason Mraz",
      role: "Musician",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Your Setapp journey.</h2>
        <p className="text-white/50 text-xs sm:text-sm max-w-md leading-relaxed">
          Tune in and turn on to creative power and get that app downloaded now.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative bg-gradient-to-br from-setapp-purple-500 to-setapp-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 overflow-hidden min-h-[400px] sm:min-h-[450px]">
        <div className="relative z-10 max-w-2xl">
          {/* Quote */}
          <p className="text-xl sm:text-2xl font-medium mb-6 sm:mb-8 leading-relaxed text-white">
            {testimonials[activeIndex].text}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex-shrink-0"></div>
            <div>
              <div className="font-semibold text-white text-sm sm:text-base">
                {testimonials[activeIndex].author}
              </div>
              <div className="text-xs sm:text-sm text-white/80">
                {testimonials[activeIndex].role}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-200 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all duration-200 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Decorative Background */}
        <div className="absolute right-0 bottom-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-setapp-purple-400 to-transparent rounded-tl-full opacity-50"></div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveIndex(dot % testimonials.length)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                dot === activeIndex ? 'bg-white w-6' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
