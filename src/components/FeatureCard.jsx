import React from 'react';

const FeatureCard = ({ icon, title, description, children, bgGradient, className = '' }) => {
  return (
    <div className={`${bgGradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden ${className}`}>
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-2 mb-4 sm:mb-6">
          <div className="bg-white/20 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-1 text-white leading-tight">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 sm:mt-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
