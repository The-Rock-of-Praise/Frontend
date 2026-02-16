import {
    // Smartphone,
    Apple,
    Play as PlayIcon,
    LayoutGrid,
    Star,
    ChevronLeft,
    ChevronRight,
    QrCode,
    // CheckCircle2
} from 'lucide-react';

const REVIEWS = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Verified Worshipper",
        text: "The seamless flow of worship music is life-changing! I use it every morning during my commute and it sets the perfect tone for my day.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 2,
        name: "David Miller",
        role: "Pastor",
        text: "Finally an app that understands the heart of worship. The curated playlists are incredible and the interface is so beautiful.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 3,
        name: "Rachel Kim",
        role: "Community Member",
        text: "The devotionals have become a staple in my life. It's more than an app, it's a daily companion for my soul.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
];

const Downloads = () => {
    return (
        <div className="relative bg-[#f6f6f8] text-slate-900 font-['Poppins'] min-h-screen py-20">

            {/* --- Decorative Blobs --- */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1349ec]/10 blur-[100px] rounded-full z-0"></div>
            <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] bg-sky-400/10 blur-[100px] rounded-full z-0"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[300px] h-[300px] bg-[#1349ec]/10 blur-[100px] rounded-full z-0"></div>

            <main className="max-w-7xl mx-auto px-6 relative z-10">

                {/* --- Hero Section: App Download --- */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

                    {/* Floating Phone Mockup */}
                    <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 group">
                        <div className="relative w-72 h-[580px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl transition-transform duration-700 group-hover:-rotate-2 border-[8px] border-slate-800 animate-bounce [animation-duration:6s]">
                            {/* Notch */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

                            <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-white relative">
                                <img
                                    alt="App Interface"
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=400"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1349ec]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                                    <h4 className="text-xl font-bold mb-1">Morning Praise</h4>
                                    <p className="text-[10px] opacity-80 mb-4 tracking-wider uppercase font-medium">Now Playing: Eternal Grace</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                            <PlayIcon size={16} fill="white" />
                                        </div>
                                        <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                                            <div className="w-2/3 h-full bg-white"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Glow Behind Phone */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#1349ec]/5 rounded-full blur-3xl"></div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col space-y-8 order-1 lg:order-2 text-center lg:text-left">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1349ec]/10 text-[#1349ec] font-bold text-sm mb-6 uppercase tracking-[0.2em]">
                                Experience Worship Everywhere
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6">
                                Download <span className="text-[#1349ec]">Now</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Join the global community of believers. Get PraiseFlow on your mobile device today.
                            </p>
                        </div>

                        {/* QR Code Glass Box */}
                        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-[2rem] flex flex-col sm:flex-row items-center gap-8 border border-white/50 shadow-xl max-w-md mx-auto lg:mx-0">
                            <div className="bg-white p-3 rounded-2xl shadow-inner border border-slate-100 group">
                                <div className="w-28 h-28 bg-slate-900 flex items-center justify-center rounded-xl relative overflow-hidden">
                                    <QrCode size={48} className="text-white relative z-10 group-hover:scale-110 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Scan to Download</h3>
                                <p className="text-slate-500 text-sm">Point your camera to the code to install instantly.</p>
                            </div>
                        </div>

                        {/* App Badges */}
                        <div className="flex flex-col space-y-6">
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <button className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-slate-900/20">
                                    <Apple size={24} />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase opacity-70 leading-none">Download on the</p>
                                        <p className="text-sm font-bold">App Store</p>
                                    </div>
                                </button>
                                <button className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-slate-900/20">
                                    <PlayIcon size={24} fill="white" />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase opacity-70 leading-none">Get it on</p>
                                        <p className="text-sm font-bold">Google Play</p>
                                    </div>
                                </button>
                                <button className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-slate-900/20">
                                    <LayoutGrid size={24} />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase opacity-70 leading-none">Explore on</p>
                                        <p className="text-sm font-bold">AppGallery</p>
                                    </div>
                                </button>
                            </div>
                            <p className="text-xs text-slate-400 italic">Available for Android 5.0+ and iOS 12.0+</p>
                        </div>
                    </div>
                </div>

                {/* --- Reviews Section --- */}
                <div className="relative">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Voices of Praise</h2>
                            <p className="text-slate-500 font-medium tracking-wide">Join thousands experiencing spiritual growth.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#1349ec] hover:text-[#1349ec] transition-all bg-white shadow-sm active:scale-90">
                                <ChevronLeft size={24} />
                            </button>
                            <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#1349ec] hover:text-[#1349ec] transition-all bg-white shadow-sm active:scale-90">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {REVIEWS.map((review) => (
                            <div key={review.id} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between hover:border-[#1349ec]/30 transition-all group">
                                <div>
                                    <div className="flex gap-1 mb-8">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={16} fill="#fbbf24" stroke="none" />
                                        ))}
                                    </div>
                                    <p className="text-slate-600 italic mb-10 leading-relaxed text-lg">
                                        "{review.text}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                    <img alt={review.name} className="w-12 h-12 rounded-full object-cover ring-4 ring-[#1349ec]/5" src={review.image} />
                                    <div>
                                        <h5 className="font-bold text-slate-900 leading-none mb-1">{review.name}</h5>
                                        <p className="text-xs text-[#1349ec] font-bold uppercase tracking-widest">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Stats Footer --- */}
                <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-slate-200/60 text-center">
                    <div>
                        <h4 className="text-4xl font-black text-[#1349ec] mb-1">500k+</h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Downloads</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-black text-[#1349ec] mb-1">4.9</h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Rating</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-black text-[#1349ec] mb-1">120+</h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Countries</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-black text-[#1349ec] mb-1">24/7</h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Worship</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Downloads;