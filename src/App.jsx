import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import ViewAllApps from './components/ViewAllApps';
import TestimonialSection from './components/TestimonialSection';
import ReviewsSection from './components/ReviewsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-setapp-dark text-white min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <ViewAllApps />
        <TestimonialSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
