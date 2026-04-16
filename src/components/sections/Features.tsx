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

    const scrollToPro = () => {
        const element = document.getElementById('pro');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // --- Sub-components ---

    const FeatureCardSmall = ({ Icon, title, desc }: { Icon: any, title: string, desc: string }) => (
        <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-white hover:border-[#1349ec]/20 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-[#1349ec]/10 flex items-center justify-center mb-4 text-[#1349ec] group-hover:bg-[#1349ec] group-hover:text-white transition-all duration-500">
                <Icon size={24} strokeWidth={2} />
            </div>

            {/* Text */}
            <div>
                <h3 className="text-[13px] font-black mb-2 text-slate-900 tracking-[0.1em] uppercase">{title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium group-hover:text-slate-700">{desc}</p>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#1349ec]/5 rounded-full blur-3xl group-hover:bg-[#1349ec]/10 transition-colors"></div>
        </div>
    );

    const StatItem = ({ value, label }: { value: string, label: string }) => (
        <div className="text-center group p-6">
            <p className="text-5xl font-black text-slate-900 mb-2 group-hover:text-[#1349ec] transition-colors duration-500">
                {value}
            </p>
            <div className="h-1 w-8 bg-[#1349ec] mx-auto mb-3 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <p className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">{label}</p>
        </div>
    );

    return (
        <div className="bg-[#f6f6f8] text-slate-900 min-h-screen font-['Poppins'] relative overflow-hidden py-24">

            {/* --- Decorative Background (Keep same as before) --- */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-200/20 blur-[130px] rounded-full -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-200/20 blur-[130px] rounded-full -z-10"></div>

            {/* --- Header Section --- */}
            <header className="max-w-7xl mx-auto pb-20 px-6 text-center">
                <div className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full bg-white shadow-sm border border-slate-100 text-[#1349ec] text-xs font-bold tracking-widest uppercase">
                    <Sparkles size={14} className="mr-2 animate-pulse" />
                    Built for the next-gen worship
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6 md:mb-8 tracking-tighter text-slate-900">
                    Beyond <br className="sm:hidden" /><span className="text-[#1349ec]">Software.</span>
                </h1>
                <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                    A suite of powerful tools designed to keep your focus on the divine, not the display.
                </p>
            </header>

            {/* --- Main Bento Grid --- */}
            <main className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">

                    {/* Feature: Offline Access (Big Hero Card) */}
                    <div className="md:col-span-6 lg:col-span-8 relative group overflow-hidden rounded-3xl md:rounded-[3rem] bg-white border border-white shadow-2xl shadow-blue-900/5 p-6 sm:p-8 md:p-12 transition-all duration-700">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 text-[#1349ec] font-bold text-[10px] md:text-sm uppercase tracking-widest mb-4 md:mb-6">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1349ec]"></div>
                                    Offline Mode
                                </div>
                                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-slate-900 tracking-tighter leading-none">
                                    Worship without <br className="hidden sm:block" /> limits.
                                </h3>
                                <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-md font-medium">
                                    No Wi-Fi? No problem. Access your entire library, chords, and media offline. Perfect for mission trips or remote congregations.
                                </p>
                            </div>
                            <div className="mt-8 md:mt-12">
                                <button
                                    onClick={scrollToPro}
                                    className="bg-slate-900 hover:bg-[#1349ec] text-white px-8 py-4 md:px-10 md:py-5 rounded-full md:rounded-[2rem] font-bold transition-all flex justify-center items-center w-full sm:w-auto group/btn shadow-xl active:scale-95"
                                >
                                    Experience Freedom
                                    <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                        {/* Abstract Shapes for the Big Card */}
                        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-80 h-80 bg-blue-50 rounded-full blur-[100px] group-hover:bg-blue-100 transition-colors"></div>
                        <WifiOff size={400} className="absolute -bottom-20 -right-20 text-slate-100 opacity-20 transform -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                    </div>

                    {/* Feature: Multilingual */}
                    <div className="md:col-span-6 lg:col-span-4 group relative overflow-hidden rounded-3xl md:rounded-[3rem] bg-[#1349ec] p-6 sm:p-8 md:p-12 flex flex-col justify-between text-white shadow-2xl shadow-blue-600/30">
                        <div className="relative z-10">
                            <Languages size={32} className="md:w-[50px] md:h-[50px] mb-4 md:mb-8 text-blue-200" strokeWidth={1.5} />
                            <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 tracking-tight">Speak your heart's language.</h3>
                            <p className="text-blue-100/80 text-sm md:text-lg leading-relaxed font-medium">
                                Full support for English, Sinhala, and Tamil characters with custom rendering.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Small Cards Row */}
                    <div className="md:col-span-3 lg:col-span-3">
                        <FeatureCardSmall Icon={Heart} title="Favorites" desc="One-tap access to your most-played worship anthems." />
                    </div>
                    <div className="md:col-span-3 lg:col-span-3">
                        <FeatureCardSmall Icon={BookOpen} title="Immersive" desc="A clean, distraction-free UI designed for the sanctuary." />
                    </div>
                    <div className="md:col-span-3 lg:col-span-3">
                        <FeatureCardSmall Icon={Gem} title="Premium" desc="Advanced typography and custom playlist management." />
                    </div>
                    <div className="md:col-span-3 lg:col-span-3">
                        <FeatureCardSmall Icon={Users} title="Sync" desc="Keep your entire worship team on the same page, literally." />
                    </div>

                    {/* App Stores CTA */}
                    <div className="md:col-span-6 lg:col-span-12 bg-white rounded-3xl md:rounded-[3rem] p-2 md:p-4 border border-white shadow-xl shadow-blue-900/5 mt-6">
                        <div className="bg-slate-50 rounded-[1.5rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-6 md:gap-8">
                            <div>
                                <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">Ready to transform your service?</h3>
                                <p className="text-slate-500 font-medium text-xs md:text-base">Get the app now on your favorite store.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center w-full md:w-auto gap-3 sm:gap-4">
                                <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#1349ec] hover:text-white hover:border-[#1349ec] transition-all shadow-sm active:scale-95 text-sm md:text-base">
                                    <Apple size={20} className="md:w-[22px] md:h-[22px]" fill="currentColor" />
                                    <span>App Store</span>
                                </button>
                                <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#1349ec] hover:text-white hover:border-[#1349ec] transition-all shadow-sm active:scale-95 text-sm md:text-base">
                                    <Play size={20} className="md:w-[22px] md:h-[22px]" fill="currentColor" />
                                    <span>Play Store</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* --- Stats Footer --- */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/40 backdrop-blur-sm rounded-3xl md:rounded-[3rem] p-4 border border-white/50">
                    <StatItem value="5k+" label="Songs Library" />
                    <StatItem value="3" label="Languages" />
                    <StatItem value="100%" label="Offline Ready" />
                    <StatItem value="24/7" label="Global Support" />
                </div>
            </section>
        </div>
    );
};

export default Features;