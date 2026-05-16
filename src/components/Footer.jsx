import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-surface-container-lowest pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.6)]"></div>
              <span className="font-space-grotesk font-bold text-xl tracking-wider text-text-main">
                LAUNCH<span className="text-electric-cyan cyan-glow">PAD</span>
              </span>
            </div>
            <p className="text-text-variant max-w-sm mb-6">
              The mission control dashboard for high-growth SaaS companies. Precision engineering meets stellar performance.
            </p>
          </div>
          
          <div>
            <h4 className="font-space-grotesk font-bold text-white mb-6 uppercase text-sm tracking-wider">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-variant hover:text-electric-cyan transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-text-variant hover:text-electric-cyan transition-colors text-sm">Integrations</a></li>
              <li><a href="#" className="text-text-variant hover:text-electric-cyan transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-text-variant hover:text-electric-cyan transition-colors text-sm">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-space-grotesk font-bold text-white mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-variant hover:text-neon-purple transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-text-variant hover:text-neon-purple transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-text-variant hover:text-neon-purple transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-text-variant hover:text-neon-purple transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-text-variant text-sm mb-4 md:mb-0">
            © 2026 LaunchPad SaaS. All systems nominal.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-text-variant hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-text-variant hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
