import React from 'react';

const FeatureCard = ({ title, description, colorClass, shadowClass, bgClass, delay }) => (
  <div 
    className="glass-surface rounded-xl p-8 transition-all duration-500 hover:bg-surface-container hover:-translate-y-2 group"
    style={{ animationDelay: delay }}
  >
    <div className={`w-14 h-14 rounded-full ${bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
      <div className={`w-6 h-6 rounded-full ${colorClass} ${shadowClass}`} />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-text-main group-hover:text-white transition-colors">{title}</h3>
    <p className="text-text-variant leading-relaxed">{description}</p>
  </div>
);


const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-electric-cyan">Performance</span>
          </h2>
          <p className="text-xl text-text-variant max-w-2xl mx-auto">
            Our mission-critical infrastructure provides the exact telemetry you need to scale your operations safely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Real-time Telemetry" 
            description="Monitor your core metrics with zero latency. Our advanced datalink ensures you see changes the millisecond they happen."
            colorClass="bg-electric-cyan"
            shadowClass="shadow-[0_0_15px_rgba(0,240,255,0.8)]"
            bgClass="bg-electric-cyan/10"
            delay="0s"
          />
          <FeatureCard 
            title="Automated Trajectory" 
            description="Set your growth targets and let our machine learning algorithms plot the optimal path to reach your destination."
            colorClass="bg-neon-purple"
            shadowClass="shadow-[0_0_15px_rgba(188,19,254,0.8)]"
            bgClass="bg-neon-purple/10"
            delay="0.2s"
          />
          <FeatureCard 
            title="Secure Payload" 
            description="Enterprise-grade encryption keeps your data locked in the vault. We take security as seriously as a spacewalk."
            colorClass="bg-error"
            shadowClass="shadow-[0_0_15px_rgba(255,180,171,0.8)]"
            bgClass="bg-error/10"
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
