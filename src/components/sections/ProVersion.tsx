import React from 'react';
import { motion } from 'framer-motion';
import { 
    Zap, 
    Music, 
    Globe, 
    Shield, 
    Star, 
    PlayCircle, 
    Download, 
    CheckCircle2, 
    Gem,
    TrendingUp
} from 'lucide-react';

const ProVersion: React.FC = () => {
    
    // Feature cards with premium styling
    const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
        <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-white/60 backdrop-blur-md border border-white p-8 shadow-xl shadow-blue-900/5 transition-all duration-500 hover:shadow-2xl"
        >
            <div className="w-14 h-14 bg-[#1349ec]/10 rounded-2xl flex items-center justify-center mb-6 text-[#1349ec] group-hover:bg-[#1349ec] group-hover:text-white transition-all duration-500">
                <Icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-[13px] font-black mb-3 text-slate-900 tracking-[0.15em] uppercase">{title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium text-sm">{description}</p>
            
            {/* Ambient indicator */}
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#1349ec]/5 rounded-full blur-xl group-hover:bg-[#1349ec]/20 transition-all duration-500"></div>
        </motion.div>
    );

    // Pricing card sub-component
    const PricingCard = ({ 
        title, 
        price, 
        duration, 
        features, 
        highlighted = false, 
        savings = "" 
    }: { 
        title: string, 
        price: string, 
        duration: string, 
        features: string[], 
        highlighted?: boolean,
        savings?: string
    }) => (
        <motion.div 
            whileHover={{ y: -10 }}
            className={`relative p-10 rounded-[3rem] transition-all duration-500 ${
                highlighted 
                ? 'bg-[#1349ec] text-white shadow-2xl shadow-blue-600/30 ring-4 ring-blue-100 dark:ring-blue-900/20' 
                : 'bg-white border border-slate-100 text-slate-900 shadow-xl shadow-blue-900/5 hover:border-[#1349ec]/20'
            }`}
        >
            {highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                </div>
            )}
            
            <div className="mb-10 text-center">
                <p className={`text-[12px] font-black uppercase tracking-[0.25em] mb-4 ${highlighted ? 'text-blue-200' : 'text-slate-400'}`}>
                    {title}
                </p>
                <div className="flex items-center justify-center gap-1">
                    <span className="text-5xl font-black tracking-tight">{price}</span>
                    <span className={`text-lg font-bold ${highlighted ? 'text-blue-200' : 'text-slate-400'}`}>/{duration}</span>
                </div>
                {savings && (
                    <div className="mt-3 inline-block bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                        {savings}
                    </div>
                )}
            </div>

            <ul className="space-y-5 mb-12">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-current opacity-10 ${highlighted ? 'text-white' : 'text-[#1349ec]'}`}>
                            <CheckCircle2 size={14} className="opacity-100" />
                        </div>
                        <span className={`text-sm font-bold ${highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <button className={`w-full py-5 rounded-2xl font-black tracking-tight text-lg transition-all duration-300 active:scale-95 ${
                highlighted 
                ? 'bg-white text-[#1349ec] hover:shadow-xl' 
                : 'bg-slate-900 text-white hover:bg-[#1349ec]'
            }`}>
                Start 7-Day Free Trial
            </button>
        </motion.div>
    );

    return (
        <section id="proVersion" className="relative py-32 overflow-hidden bg-[#f6f6f8] font-['Poppins']">
            
            {/* --- Decorative Elements (Consistent with Home/Features) --- */}
            <div className="absolute top-[-5%] left-[-10%] w-[400px] h-[400px] bg-[#1349ec]/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-5%] right-[-10%] w-[400px] h-[400px] bg-blue-400/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 bg-white/80 border border-white px-5 py-2 rounded-full mb-8 shadow-sm backdrop-blur-sm"
                    >
                        <Gem size={18} className="text-[#1349ec]" />
                        <span className="text-[11px] font-black tracking-[0.25em] uppercase text-slate-600">The Rock of Praise Pro</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8"
                    >
                        Unlock the <span className="text-[#1349ec]">Ultimate</span> <br />
                        Worship Journey.
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Elevate your praise experience with zero limits. Designed for worship leaders, teams, and those who seek the deepest connection.
                    </motion.p>
                </div>

                {/* --- Grid Phase 1: Features --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    <FeatureCard icon={Zap} title="Ad-Free" description="Zero interruptions. Stay focused on the divine atmosphere without any advertisements." />
                    <FeatureCard icon={Download} title="Offline Library" description="Save your entire spiritual catalog for worship anywhere, even without internet." />
                    <FeatureCard icon={Music} title="Ultra Quality" description="Crystal clear high-fidelity audio that captures every nuances of the praise." />
                    <FeatureCard icon={Globe} title="Multi-Lingual" description="Full premium access to English, Yoruba, and Igbo translations for every song." />
                    <FeatureCard icon={Star} title="Priority Content" description="Be the first to access new releases and exclusive live worship recordings." />
                    <FeatureCard icon={TrendingUp} title="Advanced Tools" description="Professional-grade setlist management and customized AI suggestions." />
                    <FeatureCard icon={PlayCircle} title="HD Performances" description="Breathtaking high-definition video performances and live sanctuary recordings." />
                    <FeatureCard icon={Shield} title="Premium Support" description="Dedicated 24/7 concierge support for your entire worship team needs." />
                </div>

                {/* --- Grid Phase 2: Pricing --- */}
                <div className="relative">
                    {/* Background blob for the pricing section */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[#1349ec]/5 blur-[120px] -z-10 rounded-full"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
                        
                        {/* Monthly Card */}
                        <PricingCard 
                            title="Monthly Praise"
                            price="$4.99"
                            duration="month"
                            features={[
                                "All Premium Features",
                                "Ad-Free Worship",
                                "HD Video Access",
                                "Cancel Anytime"
                            ]}
                        />

                        {/* Yearly Card (Highlighted) */}
                        <PricingCard 
                            title="Annual Devotion"
                            price="$49.99"
                            duration="year"
                            highlighted={true}
                            savings="Save 17% Yearly"
                            features={[
                                "Everything in Monthly",
                                "Advanced Team Sync",
                                "Early Access Content",
                                "2 Months Free Included"
                            ]}
                        />
                    </div>
                </div>

                {/* Footer Section */}
                <div className="mt-24 text-center">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3"
                    >
                        <Shield size={14} className="text-green-500" />
                        Secure Payment via PayHere • No Hidden Fees • Cancel Anytime
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default ProVersion;
