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

    // --- Sub-components ---

    const FeatureCardSmall = ({ Icon, title, desc, hasGlow }: { Icon: any, title: string, desc: string, hasGlow?: boolean }) => (
        <div className={`md:col-span-1 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white border border-white shadow-lg shadow-blue-900/5 p-6 flex flex-col justify-between hover:shadow-xl transition-all`}>
            <div className={`w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 text-[#1349ec] border border-blue-100`}>
                <Icon size={24} strokeWidth={2.5} />
            </div>
            <div>
                <h3 className="text-lg font-black mb-1 text-slate-900 tracking-tight uppercase text-xs">{title}</h3>
                <p className="text-slate-500 text-sm leading-snug font-medium">{desc}</p>
            </div>
            {hasGlow && (
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-100 rounded-full blur-2xl"></div>
            )}
        </div>
    );

    const StatItem = ({ value, label }: { value: string, label: string }) => (
        <div className="text-center group">
            <p className="text-4xl md:text-5xl font-black text-[#1349ec] mb-2 group-hover:scale-110 transition-transform duration-500">
                {value}
            </p>
            <p className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">{label}</p>
        </div>
    );

    return (
        <div className="bg-[#f6f6f8] text-slate-900 min-h-screen font-['Poppins'] relative overflow-hidden">

            {/* --- Decorative Background Blobs --- */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/20 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/30 blur-[120px] rounded-full -z-10"></div>

            {/* --- Header Section --- */}
            <header className="max-w-7xl mx-auto pt-24 pb-16 px-6 text-center relative">
                <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-blue-600/10 border border-blue-600/10 text-[#1349ec] text-xs font-bold tracking-[0.2em] uppercase">
                    <Sparkles size={14} className="mr-2" />
                    Experience the divine
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900">
                    Powerful <span className="text-[#1349ec]">Features</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium">
                    Everything you need for seamless worship experiences, crafted for the modern worshipper.
                </p>
            </header>

            {/* --- Main Bento Grid --- */}
            <main className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[240px] md:h-[800px]">

                    {/* Big Card: Offline Access */}
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-white border border-white shadow-xl shadow-blue-900/5 p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-16 h-16 bg-[#1349ec] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform duration-500">
                                    <WifiOff size={32} className="text-white" />
                                </div>
                                <h3 className="text-4xl font-black mb-4 text-slate-900 tracking-tight">Offline Access</h3>
                                <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-medium">
                                    Access your favorite worship songs anywhere, anytime - no internet connection required.
                                </p>
                            </div>
                            <div className="mt-8">
                                <button className="bg-[#1349ec] hover:bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center group/btn shadow-lg shadow-blue-600/20 active:scale-95">
                                    Get Started
                                    <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                        {/* Decorative Background Icon */}
                        <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                            <WifiOff size={280} className="text-slate-900" />
                        </div>
                    </div>

                    {/* Wide Card: Multilingual */}
                    <div className="md:col-span-2 md:row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-white border border-white shadow-lg shadow-blue-900/5 p-8 flex items-center justify-between gap-6 hover:shadow-xl transition-all">
                        <div className="flex-1">
                            <h3 className="text-2xl font-black mb-3 text-slate-900 uppercase tracking-tight">Multilingual Search</h3>
                            <p className="text-slate-500 text-base leading-relaxed font-medium">
                                Find songs quickly in English, Sinhala, or Tamil with our powerful search functionality.
                            </p>
                        </div>
                        <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center border border-blue-100 group-hover:rotate-6 transition-transform">
                            <Languages size={48} className="text-[#1349ec]" />
                        </div>
                    </div>

                    {/* Small Feature Cards */}
                    <FeatureCardSmall
                        Icon={Heart}
                        title="Save Favorites"
                        desc="Create your personal collection of beloved songs."
                    />

                    <FeatureCardSmall
                        Icon={BookOpen}
                        title="Clean UI"
                        desc="Distraction-free display for focused worship."
                    />

                    <FeatureCardSmall
                        Icon={Gem}
                        title="Pro Features"
                        desc="Advanced fonts and custom playlists."
                        hasGlow
                    />

                    <FeatureCardSmall
                        Icon={Users}
                        title="Community"
                        desc="Built by worshippers, for worshippers."
                    />

                    {/* Final CTA Card */}
                    <div className="md:col-span-2 md:row-span-1 bg-[#1349ec] rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative shadow-2xl shadow-blue-600/30 group">
                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-3xl font-black mb-2 tracking-tight">Elevate Your Worship</h3>
                            <p className="text-white/80 font-medium">Download 'The Rock of Praise' today.</p>
                        </div>
                        <div className="flex gap-3 mt-6 md:mt-0 relative z-10">
                            <button className="bg-white text-[#1349ec] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg whitespace-nowrap active:scale-95">
                                <Apple size={20} fill="currentColor" />
                                <span>App Store</span>
                            </button>
                            <button className="bg-white text-[#1349ec] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg whitespace-nowrap active:scale-95">
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-slate-200">
                    <StatItem value="50k+" label="Hymns & Songs" />
                    <StatItem value="3" label="Primary Languages" />
                    <StatItem value="100%" label="Offline Ready" />
                    <StatItem value="24/7" label="Support" />
                </div>
            </footer>
        </div>
    );
};

export default Features;