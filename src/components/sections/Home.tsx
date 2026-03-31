import { Play, Apple, ShoppingBag, Languages, WifiOff, Music, ArrowRight, Sparkles } from 'lucide-react';

const Home = () => {

    // --- Premium Glass AppBadge ---
    interface AppBadgeProps {
        Icon: any;
        brand: string;
        subText: string;
        accentColor: string;
    }

    const AppBadge = ({ Icon, brand, subText, accentColor }: AppBadgeProps) => (
        <a href="#" className="group relative">
            <div className="absolute -inset-0.5 bg-[#1349ec]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white/70 backdrop-blur-xl border border-white p-3 px-6 rounded-2xl flex items-center gap-4 w-[200px] transition-all duration-300 group-hover:bg-white group-hover:-translate-y-1 shadow-lg shadow-blue-900/5">
                <div className={`transition-all duration-300 ${accentColor} text-slate-600`}>
                    <Icon size={26} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col leading-tight text-left">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">{subText}</span>
                    <span className="text-base font-black text-slate-900">{brand}</span>
                </div>
            </div>
        </a>
    );

    // --- Premium Glass Feature Card ---
    const FeatureCard = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
        <div className="group relative overflow-hidden rounded-[2.5rem] bg-white/60 backdrop-blur-md border border-white p-10 shadow-xl shadow-blue-900/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#1349ec]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#1349ec] group-hover:text-white transition-all duration-500 text-[#1349ec]">
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-[13px] font-black mb-4 text-slate-900 tracking-[0.15em] uppercase">{title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{desc}</p>
            {/* Decorative inner glow */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#1349ec]/5 rounded-full blur-2xl transition-all group-hover:bg-[#1349ec]/10"></div>
        </div>
    );

    return (
        <div className="font-['Poppins'] antialiased overflow-x-hidden bg-[#f6f6f8] text-slate-900">

            {/* --- Decorative Background Blobs (Keeping consistency) --- */}
            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1349ec]/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-400/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

            {/* --- Hero Section --- */}
            <main className="relative h-screen min-h-[850px] flex flex-col justify-center items-center overflow-hidden">

                {/* Background Image with Improved Visibility Mask */}
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Worship"
                        className="w-full h-full object-cover opacity-60 scale-105"
                        src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=2000"
                    />
                    {/* Gradient overlay that fades into the light background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#f6f6f8]/40 to-[#f6f6f8]"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className="max-w-5xl mx-auto">

                        {/* Floating Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/80 border border-white px-4 py-2 rounded-full mb-10 shadow-sm backdrop-blur-sm">
                            <Sparkles size={16} className="text-[#1349ec]" />
                            <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-600">Unity in Worship</span>
                        </div>

                        {/* Mega Headline */}
                        <h1 className="text-7xl md:text-[100px] font-black tracking-tighter leading-[0.9] mb-12 text-slate-900">
                            Elevate Your <br />
                            <span className="text-[#1349ec]">
                                Praise Experience
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto mb-16">
                            Join thousands using the ultimate lyrics companion for <span className="text-slate-900 font-bold border-b-4 border-[#1349ec]/20">Sinhala, Tamil and English</span> worship.
                        </p>

                        {/* CTA Row */}
                        <div className="flex flex-col items-center gap-14">
                            <div className="flex flex-wrap justify-center items-center gap-4">
                                <AppBadge Icon={Play} brand="Google Play" subText="Get it on" accentColor="group-hover:text-green-600" />
                                <AppBadge Icon={Apple} brand="App Store" subText="Download on" accentColor="group-hover:text-blue-600" />
                                <AppBadge Icon={ShoppingBag} brand="AppGallery" subText="Explore on" accentColor="group-hover:text-red-600" />
                            </div>

                            <button className="group relative flex items-center gap-4 bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-[#1349ec] transition-all duration-300 shadow-2xl shadow-blue-900/20 active:scale-95">
                                WATCH FOR MORE
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* --- Features Summary Section --- */}
            <section className="relative z-10 py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-slate-900">Everything you need.</h2>
                        <div className="w-24 h-2 bg-[#1349ec] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            Icon={Languages}
                            title="Multi-Language"
                            desc="Seamlessly switch between English, Sinhala, and Tamil with accurate transcriptions."
                        />
                        <FeatureCard
                            Icon={WifiOff}
                            title="Always Offline"
                            desc="Carry your entire song library in your pocket. No data connection required for worship."
                        />
                        <FeatureCard
                            Icon={Music}
                            title="Setlists"
                            desc="Plan your services effortlessly. Group songs into custom lists and share with your team."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;