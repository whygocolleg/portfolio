import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-neon-purple/5 blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-electric-cyan/5 blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1440px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-8 z-10">
          <div className="inline-flex items-center space-x-2 bg-surface-container-low border border-outline/30 rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-electric-cyan shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-text-variant">Mission Control Ready</span>
          </div>
          
          <h1 className="text-5xl md:text-[64px] font-bold leading-[1.1] tracking-[-0.02em]">
            Precision Engineering for <br/>
            <span className="text-glow text-neon-purple">Stellar Growth</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-variant max-w-lg leading-relaxed">
            Elevate your metrics to the stratosphere. LaunchPad gives you the mission control dashboard to navigate through complex data with absolute clarity and precision.
          </p>
          
          <div className="flex items-center space-x-4 pt-4">
            <button className="bg-neon-purple hover:bg-neon-purple-dim text-white text-lg font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(188,19,254,0.4)] hover:shadow-[0_0_30px_rgba(188,19,254,0.7)] transform hover:-translate-y-1">
              Initialize Sequence
            </button>
            <button className="glass-surface hover:bg-surface-container text-text-main text-lg font-medium py-4 px-8 rounded-lg transition-all duration-300 border border-outline/20 hover:border-outline/50">
              View Telemetry
            </button>
          </div>
        </div>

        <div className="relative z-10 hidden lg:block">
          <div className="glass-floating rounded-xl p-6 aspect-video relative animate-[float_6s_ease-in-out_infinite]">
            {/* Dashboard Mockup */}
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-neon-purple-dim"></div>
                <div className="w-3 h-3 rounded-full bg-electric-cyan"></div>
              </div>
              <div className="text-xs font-mono text-text-variant">SYS_TEL_04</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 h-full pb-8">
              <div className="bg-surface-container-low rounded-lg p-4 border border-white/5 flex flex-col justify-between">
                <span className="text-xs font-bold text-text-variant uppercase tracking-wider">Velocity</span>
                <span className="text-3xl font-space-grotesk font-bold text-electric-cyan">24.8k <span className="text-sm font-inter text-text-variant">m/s</span></span>
              </div>
              <div className="bg-surface-container-low rounded-lg p-4 border border-white/5 flex flex-col justify-between">
                <span className="text-xs font-bold text-text-variant uppercase tracking-wider">Altitude</span>
                <span className="text-3xl font-space-grotesk font-bold text-neon-purple-dim">408 <span className="text-sm font-inter text-text-variant">km</span></span>
              </div>
              <div className="col-span-2 bg-surface-container-low rounded-lg p-4 border border-white/5 flex items-end">
                 {/* Chart mockup */}
                 <div className="w-full h-24 flex items-end justify-between space-x-2 opacity-80">
                    {[30, 45, 25, 60, 40, 75, 55, 90, 80, 100].map((h, i) => (
                      <div key={i} className="w-full bg-gradient-to-t from-neon-purple to-electric-cyan rounded-t-sm transition-all duration-1000 ease-in-out" style={{height: `${h}%`}}></div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
          
          {/* Floating UI elements */}
          <div className="absolute -bottom-8 -left-8 glass-floating rounded-xl p-4 flex items-center space-x-4 animate-[float_5s_ease-in-out_infinite_0.5s]">
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
              <span className="w-4 h-4 rounded-full bg-electric-cyan shadow-[0_0_10px_rgba(0,240,255,1)]"></span>
            </div>
            <div>
              <p className="text-sm font-bold text-text-main">Systems Nominal</p>
              <p className="text-xs text-text-variant">All checks passed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
