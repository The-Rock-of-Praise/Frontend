import {
    Apple,
    Play as PlayIcon,
    LayoutGrid,
    Star,
    QrCode,
} from 'lucide-react';
import { motion } from 'framer-motion';
import phoneLogo from '../../assets/phoneLogo.png'

const REVIEWS = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Worshipper Testimony",
        text: "This platform helps me focus on worship and connect with God in my daily devotion.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 2,
        name: "David Miller",
        role: "Church Member",
        text: "Having Christian song lyrics in English, Sinhala, and Tamil in one place is a great blessing for the Church.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 3,
        name: "Rachel Kim",
        role: "Christian User",
        text: "The Rock of Praise makes worship simple, accessible, and spiritually uplifting.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 4,
        name: "Rachel Khane",
        role: "Worship Team Member",
        text: "A beautiful initiative that supports worship teams and believers everywhere.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
        id: 5,
        name: "Rachel Kim",
        role: "Believer",
        text: "his will help many people worship God anytime and anywhere in their heart language.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    }
];

const Downloads = () => {
    const StatItem = ({ value, label }: { value: string, label: string }) => (
        <div className="text-center group">
            <p className="text-4xl md:text-5xl font-black text-[#1349ec] mb-2 group-hover:scale-110 transition-transform duration-500">
                {value}
            </p>
            <p className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">{label}</p>
        </div>
    );

    return (
        <div className="relative bg-[#f6f6f8] text-slate-900 font-['Poppins'] min-h-screen py-20">

            {/* --- Decorative Blobs --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1349ec]/10 blur-[100px] rounded-full"></div>
                <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] bg-sky-400/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[300px] h-[300px] bg-[#1349ec]/10 blur-[100px] rounded-full"></div>
            </div>

            <main className="max-w-7xl mx-auto px-6 relative z-10">

                {/* --- Hero Section: App Download --- */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

                    {/* Floating Phone Mockup */}
                    <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 group">
                        <div className="relative w-72 h-[580px] bg-slate-900 rounded-[3rem] p-2.5 shadow-2xl transition-transform duration-700 group-hover:-rotate-2 border-[8px] border-slate-800 animate-bounce [animation-duration:6s]">
                            {/* Notch */}
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

                            <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-white relative">
                                <img
                                    alt="App Interface"
                                    className="w-full h-full object-cover scale-110"
                                    src={phoneLogo}
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1349ec]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
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
                                </div> */}
                            </div>
                        </div>
                        {/* Glow Behind Phone */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#1349ec]/5 rounded-full blur-3xl"></div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
                        <div>
                            <span className="inline-block px-3 py-1.5 md:px-4 md:py-1.5 rounded-full bg-[#1349ec]/10 text-[#1349ec] font-bold text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-[0.2em]">
                                Experience Worship Everywhere
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 mb-4 md:mb-6">
                                Download <span className="text-[#1349ec]">Now</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Join the global community of believers. Get PraiseFlow on your mobile device today.
                            </p>
                        </div>

                        {/* QR Code Glass Box */}
                        <div className="bg-white/70 backdrop-blur-xl p-4 sm:p-6 rounded-3xl sm:rounded-[2rem] flex flex-col sm:flex-row items-center gap-4 sm:gap-8 border border-white/50 shadow-xl max-w-md mx-auto lg:mx-0">
                            <div className="bg-white p-3 rounded-2xl shadow-inner border border-slate-100 group">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-slate-900 flex items-center justify-center rounded-xl relative overflow-hidden">
                                    <QrCode size={40} className="text-white relative z-10 group-hover:scale-110 transition-transform sm:w-12 sm:h-12" />
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                                </div>
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Scan to Download</h3>
                                <p className="text-slate-500 text-sm">Point your camera to the code to install instantly.</p>
                            </div>
                        </div>

                        {/* App Badges */}
                        <div className="flex flex-col space-y-6">
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                {/* App Store */}
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-slate-900/20"
                                >
                                    <Apple size={24} />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase opacity-70 leading-none">Download on the</p>
                                        <p className="text-sm font-bold">App Store</p>
                                    </div>
                                </a>

                                {/* Google Play */}
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.therockofpraise.lyrics&pcampaignid=web_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-slate-900/20"
                                >
                                    <PlayIcon size={24} fill="white" />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase opacity-70 leading-none">Get it on</p>
                                        <p className="text-sm font-bold">Google Play</p>
                                    </div>
                                </a>

                                {/* AppGallery */}
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-2xl hover:scale-105 transition-all shadow-lg hover:shadow-slate-900/20"
                                >
                                    <LayoutGrid size={24} />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase opacity-70 leading-none">Explore on</p>
                                        <p className="text-sm font-bold">AppGallery</p>
                                    </div>
                                </a>
                            </div>
                            <p className="text-xs text-slate-400 italic">Available for Android 5.0+ and iOS 12.0+</p>
                        </div>
                    </div>
                </div>

                {/* --- Reviews Section --- */}
                <div className="relative">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16 gap-4 md:gap-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Voices of Praise</h2>
                            <p className="text-slate-500 font-medium tracking-wide text-sm md:text-base">Join thousands experiencing spiritual growth.</p>
                        </div>
                    </div>

                    <div
                        className="relative overflow-hidden w-full py-4 -my-4"
                        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                    >
                        <motion.div
                            className="flex gap-8 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ ease: "linear", duration: 50, repeat: Infinity }}
                        >
                            {[...REVIEWS, ...REVIEWS].map((review, idx) => (
                                <div key={`${review.id}-${idx}`} className="w-[320px] md:w-[400px] shrink-0 bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between hover:border-[#1349ec]/30 transition-all group">
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
                                    <div className="flex items-center gap-4 pt-6 border-t border-slate-500/20">
                                        {/* <img alt={review.name} className="w-12 h-12 rounded-full object-cover ring-4 ring-[#1349ec]/5" src={review.image} /> */}
                                        <div>
                                            {/* <h5 className="font-bold text-slate-900 leading-none mb-1">{review.name}</h5> */}
                                            <p className="text-xs text-[#1349ec] font-bold uppercase tracking-widest">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* --- Stats Footer --- */}
                <footer className="max-w-7xl mx-auto px-6 pb-5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-slate-200">
                        <StatItem value="-" label="Downloads" />
                        <StatItem value="-" label="Rating" />
                        <StatItem value="-" label="Countries" />
                        <StatItem value="24/7" label="Worship" />
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default Downloads;