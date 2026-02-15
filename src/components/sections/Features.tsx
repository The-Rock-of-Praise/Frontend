import React from 'react';
import {
    WifiOff,
    Languages,
    Heart,
    BookOpen,
    Gem,
    Users,
    ArrowRight,
    Sparkles,
    Apple,
    Play
} from 'lucide-react';

const Features = () => {
    return (
        <div className="bg-[#0a0c14] text-slate-100 min-h-screen font-['Poppins']">

            {/* --- Header Section --- */}
            <header className="max-w-7xl mx-auto pt-24 pb-16 px-6 text-center">
                <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-blue-600/10 border border-blue-600/20 text-[#4169E1] text-sm font-semibold tracking-wide uppercase">
                    <Sparkles size={16} className="mr-2" />
                    Experience the divine
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                    <span className="text-[#4169E1] drop-shadow-[0_0_20px_rgba(65,105,225,0.4)]">Powerful Features</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-slate-400">
                    Everything you need for seamless worship experiences, crafted for the modern worshipper.
                </p>
            </header>

            {/* --- Main Bento Grid --- */}
            <main className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[240px] md:h-[800px]">

                    {/* Big Card: Offline Access */}
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition-all duration-500 hover:border-blue-500/50">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 bg-[#4169E1] rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-blue-600/40 group-hover:scale-110 transition-transform">
                                    <WifiOff size={32} strokeWidth={1.5} className="text-white" />
                                </div>
                                <h3 className="text-4xl font-bold mb-4 text-[#4169E1]">Offline Access</h3>
                                <p className="text-slate-400 text-lg leading-relaxed max-w-sm font-light">
                                    Access your favorite worship songs anywhere, anytime - no internet connection required.
                                </p>
                            </div>
                            <div className="mt-8">
                                <button className="bg-[#4169E1] hover:bg-[#4169E1]/90 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center group/btn shadow-xl shadow-blue-600/20">
                                    Get Started
                                    <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                        {/* Decorative Background Icon */}
                        <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                            <WifiOff size={280} className="text-white" />
                        </div>
                    </div>

                    {/* Wide Card: Multilingual */}
                    <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex items-center justify-between gap-6 hover:border-blue-500/50 transition-all">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3 text-[#4169E1]">Multilingual Search</h3>
                            <p className="text-slate-400 text-base leading-relaxed font-light">
                                Find songs quickly in English, Sinhala, or Tamil with our powerful search functionality.
                            </p>
                        </div>
                        <div className="w-24 h-24 bg-blue-600/10 rounded-[1.5rem] flex items-center justify-center border border-blue-600/20 group-hover:rotate-6 transition-transform">
                            <Languages size={48} className="text-[#4169E1]" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Small Feature Cards */}
                    <FeatureCardSmall
                        Icon={Heart}
                        title="Save Favorites"
                        desc="Create your personal collection of beloved worship songs."
                    />

                    <FeatureCardSmall
                        Icon={BookOpen}
                        title="Clean Interface"
                        desc="Distraction-free, lyrics-only display for focused worship."
                    />

                    <FeatureCardSmall
                        Icon={Gem}
                        title="Pro Features"
                        desc="Advanced font customization and custom playlists."
                        hasGlow
                    />

                    <FeatureCardSmall
                        Icon={Users}
                        title="Community"
                        desc="Built by worshippers, with regular community feedback."
                    />

                    {/* Final CTA Card */}
                    <div className="md:col-span-2 md:row-span-1 bg-[#4169E1] rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative shadow-2xl shadow-blue-600/30 group">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-2">Elevate Your Worship</h3>
                            <p className="text-white/80 font-light">Download 'The Rock of Praise' today.</p>
                        </div>
                        <div className="flex gap-3 mt-6 md:mt-0 relative z-10">
                            <button className="bg-white text-[#4169E1] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg whitespace-nowrap">
                                <Apple size={20} fill="currentColor" />
                                <span>App Store</span>
                            </button>
                            <button className="bg-white text-[#4169E1] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg whitespace-nowrap">
                                <Play size={20} fill="currentColor" />
                                <span>Play Store</span>
                            </button>
                        </div>
                        {/* Decorative Circles */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    </div>
                </div>
            </main>

            {/* --- Stats Footer --- */}
            <footer className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-white/10">
                    <StatItem value="50k+" label="Hymns & Songs" />
                    <StatItem value="3" label="Primary Languages" />
                    <StatItem value="100%" label="Offline Ready" />
                    <StatItem value="24/7" label="Community Support" />
                </div>
            </footer>
        </div>
    );
};

// --- Sub-components for Cleanliness ---

const FeatureCardSmall = ({ Icon, title, desc, hasGlow }: { Icon: any, title: string, desc: string, hasGlow?: boolean }) => (
    <div className={`md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all`}>
        <div className={`w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 text-[#4169E1]`}>
            <Icon size={24} strokeWidth={2} />
        </div>
        <div>
            <h3 className="text-lg font-bold mb-2 text-[#4169E1]">{title}</h3>
            <p className="text-slate-400 text-sm leading-snug font-light">{desc}</p>
        </div>
        {hasGlow && (
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600/10 rounded-full blur-2xl"></div>
        )}
    </div>
);

const StatItem = ({ value, label }: { value: string, label: string }) => (
    <div className="text-center group">
        <p className="text-4xl md:text-5xl font-black text-[#4169E1] mb-2 drop-shadow-[0_0_10px_rgba(65,105,225,0.2)] group-hover:scale-110 transition-transform">
            {value}
        </p>
        <p className="text-slate-500 text-sm font-semibold tracking-wider uppercase">{label}</p>
    </div>
);

export default Features;