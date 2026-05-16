import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 glass-surface">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.6)]"></div>
          <span className="font-space-grotesk font-bold text-xl tracking-wider text-text-main">
            LAUNCH<span className="text-electric-cyan cyan-glow">PAD</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-text-variant hover:text-text-main transition-colors text-sm font-medium">Features</a>
          <a href="#about" className="text-text-variant hover:text-text-main transition-colors text-sm font-medium">About</a>
          <a href="#pricing" className="text-text-variant hover:text-text-main transition-colors text-sm font-medium">Pricing</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-text-main hover:text-neon-purple-dim transition-colors">Log In</button>
          <button className="bg-neon-purple hover:bg-neon-purple-dim text-white text-sm font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(188,19,254,0.4)] hover:shadow-[0_0_25px_rgba(188,19,254,0.7)] transform hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
