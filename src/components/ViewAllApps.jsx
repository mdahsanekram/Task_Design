import React from 'react';
import { ChevronRight } from 'lucide-react';

const ViewAllApps = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
      <button 
        className="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 mx-auto group"
        aria-label="View all Setapp applications"
      >
        <span>View all Setapp apps</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </button>
    </section>
  );
};

export default ViewAllApps;
