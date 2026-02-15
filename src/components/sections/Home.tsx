import React from 'react';
import { Play, Apple, ShoppingBag, Languages, WifiOff, Music, ArrowRight, Sparkles } from 'lucide-react';

const Home: React.FC = () => {

    // --- Premium AppBadge ---
    interface AppBadgeProps {
        Icon: any;
        brand: string;
        subText: string;
        accentColor: string;
    }

    const AppBadge = ({ Icon, brand, subText, accentColor }: AppBadgeProps) => (
        <a href="#" className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-[#1a202c]/60 backdrop-blur-2xl border border-white/10 p-3 px-6 rounded-2xl flex items-center gap-4 w-[200px] transition-all duration-300 group-hover:border-white/30 group-hover:-translate-y-1">
                <div className={`transition-all duration-300 ${accentColor}`}>
                    <Icon size={26} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col leading-tight text-left">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-semibold">{subText}</span>
                    <span className="text-base font-bold text-white">{brand}</span>
                </div>
            </div>
        </a>
    );

    // --- Premium Feature Card ---
    const FeatureCard = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
        <div className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-[#1349ec]/50 transition-all">
            <div className="bg-[#101522]/90 backdrop-blur-xl p-8 rounded-[23px] h-full transition-all group-hover:bg-[#101522]/40">
                <div className="w-16 h-16 bg-[#1349ec]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#1349ec]/20 transition-all text-[#1349ec]">
                    <Icon size={32} strokeWidth={1.2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">{desc}</p>
            </div>
        </div>
    );

    return (
        <div className="font-['Inter'] antialiased overflow-x-hidden bg-[#0a0f1a] text-white">

            {/* Soft Ambient Glows */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1349ec]/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#06b6d4]/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

            {/* --- Hero Section --- */}
            <main className="relative h-screen min-h-[850px] flex flex-col justify-center items-center overflow-hidden pt-20">

                {/* Background Image with Mask */}
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Worship"
                        className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-[10s] hover:scale-100"
                        src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=2000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/60 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className="max-w-5xl mx-auto">

                        {/* Floating Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md animate-bounce-slow">
                            <Sparkles size={14} className="text-[#06b6d4]" />
                            <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">Unity in Worship</span>
                        </div>

                        {/* Mega Headline */}
                        <h1 className="text-7xl md:text-[100px] font-black tracking-[calc(-0.05em)] leading-[0.9] mb-10 italic">
                            Elevate Your <br />
                            <span className="bg-gradient-to-r from-[#1349ec] via-[#06b6d4] to-[#1349ec] bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
                                Praise Experience
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                            Join thousands using the ultimate lyrics companion for <span className="text-white border-b border-[#1349ec]">Sinhala, Tamil and English</span> worship.
                        </p>

                        {/* CTA Row */}
                        <div className="flex flex-col items-center gap-10">
                            <div className="flex flex-wrap justify-center items-center gap-4">
                                <AppBadge Icon={Play} brand="Google Play" subText="Get it on" accentColor="group-hover:text-green-400" />
                                <AppBadge Icon={Apple} brand="App Store" subText="Download on" accentColor="group-hover:text-blue-400" />
                                <AppBadge Icon={ShoppingBag} brand="AppGallery" subText="Explore on" accentColor="group-hover:text-red-500" />
                            </div>

                            <button className="group relative flex items-center gap-3 bg-white text-black px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all duration-300 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                START WORSHIPPING
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* --- Features Section --- */}
            <section className="relative z-10 py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">Everything you need.</h2>
                        <div className="w-20 h-1 bg-[#1349ec] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <FeatureCard Icon={Languages} title="Multi-Language" desc="Seamlessly switch between English, Sinhala, and Tamil with accurate transcriptions." />
                        <FeatureCard Icon={WifiOff} title="Always Offline" desc="Carry your entire song library in your pocket. No data connection required for worship." />
                        <FeatureCard Icon={Music} title="Setlists" desc="Plan your services effortlessly. Group songs into custom lists and share with your team." />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;