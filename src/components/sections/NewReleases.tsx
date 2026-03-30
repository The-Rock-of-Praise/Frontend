import { useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Play,
    FileText
} from 'lucide-react';

const SONGS_DATA = [
    {
        id: 1,
        title: "Eternal Grace",
        artist: "Praise Collective feat. Sarah Jenkins",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop",
        badge: "Live Now"
    },
    {
        id: 2,
        title: "Mighty Fortress",
        artist: "The Rock Worship",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
        badge: "New Release"
    },
    {
        id: 3,
        title: "Higher Ground",
        artist: "Unity Choir",
        image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format&fit=crop",
        badge: "Trending"
    },
    {
        id: 4,
        title: "Ocean of Mercy",
        artist: "David Perera",
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=800",
        badge: "Original"
    },
    {
        id: 5,
        title: "River of Life",
        artist: "Grace Symphony",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
        badge: "Classic"
    }
];

const NewReleases = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === SONGS_DATA.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? SONGS_DATA.length - 1 : prev - 1));
    };

    const leftIndex = (currentIndex - 1 + SONGS_DATA.length) % SONGS_DATA.length;
    const rightIndex = (currentIndex + 1) % SONGS_DATA.length;
    const currentSong = SONGS_DATA[currentIndex];

    return (
        <div className="bg-[#f6f6f8] text-slate-900 min-h-screen font-['Poppins'] relative overflow-hidden">

            {/* --- Ambient Decoration --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1349ec]/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#1349ec]/10 blur-[100px] rounded-full"></div>
            </div>

            <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">

                {/* --- Header Section --- */}
                <header className="mb-12 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#1349ec]/10 border border-[#1349ec]/20 text-[#1349ec] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                        Exclusive Premiere
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
                        New Song <span className="text-[#1349ec]">Updates</span>
                    </h1>
                    <p className="text-slate-500 text-lg max-w-md mx-auto">
                        Experience the latest sounds from the worship community
                    </p>
                </header>

                {/* --- 3D Slider Section --- */}
                <div className="relative w-full max-w-7xl flex items-center justify-center gap-4 md:gap-12 py-8">

                    {/* Left Slide (Background) */}
                    <div className="hidden lg:block relative opacity-30 scale-90 grayscale transition-all duration-700">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img alt="Album" className="w-full h-full object-cover" src={SONGS_DATA[leftIndex].image} />
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:left-10 z-40 bg-white border border-slate-200 p-4 rounded-full text-slate-400 hover:text-[#1349ec] hover:border-[#1349ec] transition-all shadow-lg active:scale-90"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* Center Slide (Active) */}
                    <div key={currentSong.id} className="relative z-20 transition-all duration-500 transform scale-100 lg:scale-105 animate-in fade-in zoom-in duration-700">
                        <div className="relative group">
                            {/* Blue glow effect for center card */}
                            <div className="absolute -inset-4 bg-[#1349ec]/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-blue-200">
                                <img alt={currentSong.title} className="w-full h-full object-cover" src={currentSong.image} />
                                <div className="absolute top-6 right-6">
                                    <span className="bg-[#1349ec] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                                        {currentSong.badge}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Song Info */}
                        <div className="mt-10 text-center">
                            <h2 className="text-3xl md:text-5xl font-black mb-2 text-slate-900 tracking-tight">
                                {currentSong.title}
                            </h2>
                            <p className="text-[#1349ec] text-lg md:text-xl font-bold tracking-wide uppercase">{currentSong.artist}</p>

                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button className="w-full sm:w-auto bg-[#1349ec] hover:bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-200 active:scale-95">
                                    <Play size={20} fill="currentColor" />
                                    Listen Now
                                </button>
                                <button className="w-full sm:w-auto bg-white border border-slate-200 hover:border-[#1349ec] text-slate-600 hover:text-[#1349ec] px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-sm active:scale-95">
                                    <FileText size={20} />
                                    View Lyrics
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:right-10 z-40 bg-white border border-slate-200 p-4 rounded-full text-slate-400 hover:text-[#1349ec] hover:border-[#1349ec] transition-all shadow-lg active:scale-90"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Right Slide (Background) */}
                    <div className="hidden lg:block relative opacity-30 scale-90 grayscale transition-all duration-700">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img alt="Album" className="w-full h-full object-cover" src={SONGS_DATA[rightIndex].image} />
                        </div>
                    </div>
                </div>

                {/* --- Pagination Dots --- */}
                <footer className="mt-12 flex items-center gap-3">
                    {SONGS_DATA.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-500 rounded-full ${currentIndex === index
                                ? "w-12 h-2.5 bg-[#1349ec]"
                                : "w-2.5 h-2.5 bg-slate-300 hover:bg-[#1349ec]/40"
                                }`}
                        />
                    ))}
                </footer>
            </main>
        </div>
    );
};

export default NewReleases;