import {
    ChevronLeft,
    ChevronRight,
    Play,
    Search,
    Music,
    // SkipBack,
    // SkipForward,
    // PlayCircle,
    // Volume2,
    // Shuffle,
    // Repeat,
    FileText
} from 'lucide-react';

const NewSongs = () => {
    return (
        <div className="bg-[#0a0c14] text-white min-h-screen font-['Poppins']">

            {/* --- Dynamic Background Layer --- */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1349ec]/10 via-[#0a0c14] to-[#0a0c14]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 blur-[120px] bg-[#1349ec] rounded-full"></div>
            </div>

            {/* --- Navigation & Logo --- */}
            <nav className="fixed top-8 left-8 right-8 z-50 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1349ec] rounded-xl flex items-center justify-center shadow-lg shadow-[#1349ec]/20">
                        <Music size={20} className="text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden md:block">ROCK OF PRAISE</span>
                </div>
                <button className="bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-full text-white/80 hover:text-white transition-all hover:scale-110">
                    <Search size={20} />
                </button>
            </nav>

            {/* --- Main Content --- */}
            <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">

                {/* Header Section */}
                <header className="mb-12 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#1349ec]/20 border border-[#1349ec]/30 text-[#1349ec] text-sm font-semibold tracking-widest uppercase mb-4">
                        Exclusive Premiere
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">New Song Updates</h1>
                    <p className="text-slate-400 text-lg">Experience the latest sounds from the worship community</p>
                </header>

                {/* --- 3D Slider Section --- */}
                <div className="relative w-full max-w-7xl flex items-center justify-center gap-4 md:gap-12 py-12">

                    {/* Left Slide (Inactive) */}
                    <div className="hidden lg:block relative group opacity-30 scale-75 blur-sm transition-all duration-500">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-white/10">
                            <img alt="Album" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800" />
                        </div>
                    </div>

                    {/* Previous Navigation */}
                    <button className="absolute left-4 md:left-20 z-30 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-full text-white/70 hover:text-white transition-all hover:scale-110 hover:border-[#1349ec]/50">
                        <ChevronLeft size={32} />
                    </button>

                    {/* Center Slide (Active) */}
                    <div className="relative z-20 transition-all duration-500 transform scale-100 lg:scale-110">
                        <div className="relative group">
                            {/* Outer Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#1349ec] to-cyan-400 rounded-[2.2rem] blur opacity-40 group-hover:opacity-70 transition duration-1000"></div>

                            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-[0_0_50px_rgba(19,73,236,0.3)]">
                                <img alt="Current Album" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800" />
                                <div className="absolute top-6 right-6">
                                    <span className="bg-[#1349ec] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">Live Now</span>
                                </div>
                            </div>
                        </div>

                        {/* Song Info */}
                        <div className="mt-12 text-center">
                            <h2 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
                                Eternal Grace
                            </h2>
                            <p className="text-[#1349ec] text-xl font-medium tracking-wide">Praise Collective feat. Sarah Jenkins</p>

                            <div className="mt-8 flex items-center justify-center gap-4">
                                <button className="bg-[#1349ec] hover:bg-[#1349ec]/80 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-[#1349ec]/40 group/btn">
                                    <Play size={20} fill="currentColor" />
                                    Listen Now
                                </button>
                                <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all">
                                    <FileText size={20} />
                                    View Lyrics
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Next Navigation */}
                    <button className="absolute right-4 md:right-20 z-30 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-full text-white/70 hover:text-white transition-all hover:scale-110 hover:border-[#1349ec]/50">
                        <ChevronRight size={32} />
                    </button>

                    {/* Right Slide (Inactive) */}
                    <div className="hidden lg:block relative group opacity-30 scale-75 blur-sm transition-all duration-500">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-white/10">
                            <img alt="Album" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514525253361-bee8718a7439?auto=format&fit=crop&q=80&w=800" />
                        </div>
                    </div>
                </div>

                {/* --- Pagination Dots --- */}
                <footer className="mt-8 mb-10 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-10 h-2.5 rounded-full bg-[#1349ec] shadow-[0_0_15px_rgba(19,73,236,0.6)]"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                </footer>
            </main>

            {/* --- Player Controls Bar --- */}
            {/* <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 bg-white/5 backdrop-blur-2xl border border-white/10 px-10 py-5 rounded-[2.5rem] shadow-2xl z-50">
                <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-8">
                    <Shuffle size={18} className="text-white/40 cursor-pointer hover:text-[#1349ec] transition" />
                    <Repeat size={18} className="text-white/40 cursor-pointer hover:text-[#1349ec] transition" />
                </div>

                <div className="flex items-center gap-8">
                    <button className="text-white/80 hover:text-[#1349ec] transition"><SkipBack size={28} /></button>
                    <button className="bg-white text-[#0a0c14] w-14 h-14 flex items-center justify-center rounded-2xl hover:scale-110 transition shadow-xl">
                        <PlayCircle size={32} />
                    </button>
                    <button className="text-white/80 hover:text-[#1349ec] transition"><SkipForward size={28} /></button>
                </div>

                <div className="hidden lg:flex items-center gap-4 border-l border-white/10 pl-8">
                    <Volume2 size={18} className="text-white/40" />
                    <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#1349ec] w-2/3"></div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default NewSongs;