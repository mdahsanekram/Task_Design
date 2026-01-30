import React from 'react';
import FeatureCard from './FeatureCard';
import { HardDrive, Code2, Package } from 'lucide-react';

const FeaturesGrid = () => {
  const cleanupItems = [
    { name: 'System disk', size: Math.floor(Math.random() * 50) + 10 },
    { name: 'Mail downloads', size: Math.floor(Math.random() * 30) + 5 },
    { name: 'iOS cache', size: Math.floor(Math.random() * 40) + 8 },
    { name: 'Trash bins', size: Math.floor(Math.random() * 20) + 3 },
    { name: 'System logs', size: Math.floor(Math.random() * 15) + 2 },
    { name: 'Time Machine', size: Math.floor(Math.random() * 35) + 7 },
    { name: 'Downloads', size: Math.floor(Math.random() * 25) + 5 },
    { name: 'Documents', size: Math.floor(Math.random() * 30) + 6 },
  ];

  const apps = [
    { name: 'CleanUp', desc: 'Remove junk from devices', size: '47.3 MB', installed: true },
    { name: 'CleanMyMac X', desc: 'Your Mac. As good as new', size: '89.2 MB', installed: false },
    { name: 'Taskheat', desc: 'Visual to-do list', size: '23.8 MB', installed: false },
    { name: 'Paste', desc: 'Your clipboard manager', size: '31.5 MB', installed: false },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Keep your Mac clean */}
        <FeatureCard
          icon={<HardDrive className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
          title="Keep your Mac clean"
          description="Maintain it & keep it running at top speed with disk cleaners, uninstallers"
          bgGradient="bg-gradient-to-br from-pink-400 to-pink-500"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="space-y-2 sm:space-y-3">
              {cleanupItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-white/90">{item.name}</span>
                  <span className="text-white font-medium">{item.size} GB</span>
                </div>
              ))}
            </div>
            <button className="mt-4 sm:mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 w-full shadow-lg hover:shadow-xl transform hover:scale-105">
              Clean up
            </button>
          </div>
          {/* Decorative circle */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full"></div>
        </FeatureCard>

        {/* Write code */}
        <FeatureCard
          icon={<Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />}
          title="Write code"
          description="Lorem ipsum dev editors, Xcode debuggers fix errors fast"
          bgGradient="bg-gradient-to-br from-[#2a2a2a] to-setapp-gray"
          className="border border-white/5"
        >
          <div className="bg-setapp-gray rounded-xl sm:rounded-2xl p-4 sm:p-6 font-mono text-[10px] sm:text-xs overflow-hidden">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-purple-400">
                import <span className="text-blue-400">React</span> from <span className="text-green-400">'react'</span>;
              </div>
              <div className="text-purple-400">
                import <span className="text-blue-400">ReactDOM</span> from <span className="text-green-400">'react-dom'</span>;
              </div>
              <div className="mt-3 sm:mt-4 text-purple-400">
                const <span className="text-blue-400">App</span> = () =&gt; {'{'}
              </div>
              <div className="ml-2 sm:ml-4 text-purple-400">return (</div>
              <div className="ml-4 sm:ml-8 text-gray-400">
                &lt;<span className="text-pink-400">div</span> <span className="text-blue-400">className</span>=
                <span className="text-green-400">"app"</span>&gt;
              </div>
              <div className="ml-6 sm:ml-12 text-gray-400">
                &lt;<span className="text-pink-400">h1</span>&gt;Hello World&lt;/<span className="text-pink-400">h1</span>&gt;
              </div>
              <div className="ml-4 sm:ml-8 text-gray-400">
                &lt;/<span className="text-pink-400">div</span>&gt;
              </div>
              <div className="ml-2 sm:ml-4 text-gray-400">);</div>
              <div className="text-gray-400">{'}'};</div>
            </div>
          </div>
        </FeatureCard>

        {/* All apps in one pack - Full Width */}
        <div className="lg:col-span-2">
          <FeatureCard
            icon={<Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
            title="All in one place. In a pack"
            description="Quickly search for apps. Open them from the hub."
            bgGradient="bg-gradient-to-br from-blue-600 to-blue-700"
          >
            <div className="bg-[#1e3a5f] rounded-xl sm:rounded-2xl p-4 sm:p-6">
              {/* Search Bar */}
              <div className="bg-[#2a4a6f] rounded-xl p-3 sm:p-4 mb-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-white placeholder-white/50 outline-none w-full text-xs sm:text-sm"
                  aria-label="Search for apps"
                />
              </div>

              {/* App List */}
              <div className="space-y-2">
                {apps.map((app, i) => (
                  <div key={i} className="flex items-center justify-between py-2 gap-3">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex-shrink-0"></div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-medium text-white truncate">
                          {app.name}
                        </div>
                        <div className="text-[10px] sm:text-xs text-white/60 truncate">
                          {app.desc}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                      <span className="text-[10px] sm:text-xs text-white/60 hidden sm:inline">
                        {app.size}
                      </span>
                      {app.installed ? (
                        <button className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium">
                          Installed
                        </button>
                      ) : (
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-200 transform hover:scale-105">
                          Get
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FeatureCard>
        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
