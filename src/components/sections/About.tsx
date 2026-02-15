import React from 'react';
import {
    Eye,
    Sparkles,
    Music,
    Languages,
    Users,
    ScrollText,
    Play,
    Pause,
    Maximize,
    Volume2
} from 'lucide-react';

const About = () => {
    return (
        <section className="min-h-screen relative flex items-center overflow-hidden bg-white">

            {/* Split Background Effect */}
            <div className="absolute inset-0 z-0 flex">
                <div className="w-full lg:w-1/2 bg-[#0A1128]"></div>
                <div className="hidden lg:block w-1/2 bg-white"></div>
            </div>

            {/* Geometry Pattern & Ambient Glow */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338bdf8' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
            </div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] z-0"></div>

            <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Text Content */}
                    <div className="text-white space-y-12">
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#38BDF8] text-sm font-semibold tracking-wider uppercase">
                                Our Essence
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                                The Rock of <br />
                                <span className="text-[#38BDF8] drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">Praise</span>
                            </h1>
                            <p className="text-slate-300 text-lg max-w-lg leading-relaxed font-light">
                                Elevating worship through digital excellence, bridging hearts and technology.
                            </p>
                        </div>

                        {/* Vision & Mission */}
                        <div className="space-y-10">
                            <div className="flex gap-6 items-start group">
                                <div className="mt-1 bg-[#1C2541] p-4 rounded-2xl border border-white/10 group-hover:border-[#38BDF8]/50 transition-all shadow-xl text-[#38BDF8]">
                                    <Eye size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Vision</h3>
                                    <p className="text-slate-400 leading-relaxed max-w-md font-light">
                                        To revolutionize the worship experience by providing a seamless digital bridge between traditional reverence and modern accessibility.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="mt-1 bg-[#1C2541] p-4 rounded-2xl border border-white/10 group-hover:border-[#38BDF8]/50 transition-all shadow-xl text-[#38BDF8]">
                                    <Sparkles size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Mission</h3>
                                    <p className="text-slate-400 leading-relaxed max-w-md font-light">
                                        Simplifying worship management through intuitive software that handles lyrics, chords, and multilingual support with effortless elegance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Language Chips */}
                        <div className="pt-8 space-y-4">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500">Multilingual Core</h4>
                            <div className="flex flex-wrap gap-3">
                                <button className="bg-gradient-to-br from-[#1349ec] to-[#38BDF8] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                    English
                                </button>
                                <button className="bg-white/5 border border-white/10 hover:border-[#38BDF8]/40 text-slate-300 px-6 py-2.5 rounded-full text-sm font-medium transition-all">
                                    සිංහල
                                </button>
                                <button className="bg-white/5 border border-white/10 hover:border-[#38BDF8]/40 text-slate-300 px-6 py-2.5 rounded-full text-sm font-medium transition-all">
                                    தமிழ்
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visuals & Feature Grid */}
                    <div className="relative py-12">
                        {/* 3D Video Mockup */}
                        <div className="relative z-20 -ml-0 lg:-ml-12 transform perspective-[1000px] rotate-y-[-5deg] rotate-x-[2deg] transition-transform hover:rotate-0 duration-700">
                            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-[40px_40px_80px_-20px_rgba(0,0,0,0.3)] relative border-[8px] border-white">
                                <img
                                    alt="Worship visuals"
                                    className="w-full h-full object-cover opacity-80"
                                    src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=1000"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/40 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                                        <Play size={40} fill="currentColor" />
                                    </button>
                                </div>

                                {/* Custom Video Controls */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-white">
                                        <Pause size={18} />
                                        <div className="w-32 h-1 bg-white/20 rounded-full relative">
                                            <div className="absolute top-0 left-0 h-full w-2/3 bg-[#38BDF8] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-white/80">
                                        <Volume2 size={18} />
                                        <Maximize size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="mt-16 grid sm:grid-cols-2 gap-6 relative z-10">
                            <AboutFeatureCard Icon={ScrollText} title="Lyric Control" desc="Smooth, latency-free transitions for lyrics in any environment." />
                            <AboutFeatureCard Icon={Music} title="Chord Engine" desc="Instantly transpose and share charts with your entire band." />
                            <AboutFeatureCard Icon={Users} title="Leader Focused" desc="Intuitive interface designed to keep you focused on worship." />
                            <AboutFeatureCard Icon={Languages} title="Global Reach" desc="Supporting diverse cultures with native language rendering." />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Sub-component for Feature Cards
const AboutFeatureCard = ({ Icon, title, desc }: { Icon: any, title: string, desc: string }) => (
    <div className="bg-white/80 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
        <div className="w-12 h-12 rounded-xl bg-[#1349ec]/10 flex items-center justify-center mb-4 text-[#1349ec] group-hover:bg-[#1349ec] group-hover:text-white transition-colors">
            <Icon size={24} strokeWidth={1.5} />
        </div>
        <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm text-slate-500 font-light leading-relaxed">{desc}</p>
    </div>
);

export default About;