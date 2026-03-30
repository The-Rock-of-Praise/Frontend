import {
    Eye,
    Sparkles,
    Music,
    Languages,
    Users,
    ScrollText,
    // Play,
    Pause,
    Maximize,
    Volume2,
    VolumeOff,
    Play,
} from 'lucide-react';
import Intro from '../../assets/Intro.mp4';
import { useRef, useState } from 'react';
import VideoIntro from '../../assets/Intro.jpg';

const About = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [progress, setProgress] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    // Timeline update 
    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video && video.duration) {
            const currentProgress = (video.currentTime / video.duration) * 100;
            setProgress(currentProgress);
        }
    };

    // Play or Pause 
    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Full screen 
    const toggleFullScreen = () => {
        if (videoRef.current) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        /* ප්‍රධාන පසුබිම Downloads Section එකට සමාන කළා */
        <section className="min-h-screen relative flex items-center overflow-hidden bg-[#f6f6f8] font-['Poppins']">

            {/* --- Decorative Blobs (Same as Downloads Section for Consistency) --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#1349ec]/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-400/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Text Content */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1349ec]/10 text-[#1349ec] text-sm font-bold tracking-wider uppercase">
                                Our Essence
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight text-slate-900">
                                The Rock of <br />
                                <span className="text-[#1349ec]">Praise</span>
                            </h1>
                            <p className="text-slate-500 text-xl max-w-lg leading-relaxed font-medium">
                                Elevating worship through digital excellence, bridging hearts and technology with grace.
                            </p>
                        </div>

                        {/* Vision & Mission Cards */}
                        <div className="space-y-8">
                            <div className="flex gap-6 items-start group">
                                <div className="mt-1 bg-white p-4 rounded-2xl shadow-lg shadow-blue-900/5 border border-slate-100 group-hover:border-[#1349ec]/30 transition-all text-[#1349ec]">
                                    <Eye size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Vision</h3>
                                    <p className="text-slate-500 leading-relaxed max-w-md">
                                        To revolutionize the worship experience by providing a seamless digital bridge between traditional reverence and modern accessibility.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="mt-1 bg-white p-4 rounded-2xl shadow-lg shadow-blue-900/5 border border-slate-100 group-hover:border-[#1349ec]/30 transition-all text-[#1349ec]">
                                    <Sparkles size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Mission</h3>
                                    <p className="text-slate-500 leading-relaxed max-w-md">
                                        Simplifying worship management through intuitive software that handles lyrics, chords, and multilingual support with effortless elegance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Language Chips */}
                        <div className="pt-8 space-y-4">
                            <h4 className="text-xs uppercase tracking-[0.2em] font-black text-slate-400">Multilingual Core</h4>
                            <div className="flex flex-wrap gap-3">
                                <button className="bg-[#1349ec] text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 hover:scale-105 transition-transform">
                                    English
                                </button>
                                <button className="bg-[#1349ec] text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 hover:scale-105 transition-transform">
                                    සිංහල
                                </button>
                                <button className="bg-[#1349ec] text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 hover:scale-105 transition-transform">
                                    தமிழ்
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visuals & Feature Grid */}
                    <div className="relative py-12">
                        {/* Video Mockup with White Border for Premium Look */}
                        <div className="relative z-20 lg:-ml-12 transform hover:scale-[1.02] transition-transform duration-700">
                            <div className="aspect-video w-full rounded-[2rem] overflow-hidden bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] relative border-[12px] border-white">
                                <video
                                    ref={videoRef}
                                    onTimeUpdate={handleTimeUpdate}
                                    className="w-full h-full object-cover opacity-90"
                                    autoPlay
                                    loop
                                    muted={isMuted} // Mute state එකට link කළා
                                    playsInline
                                    poster={VideoIntro}
                                    style={{ objectFit: 'cover' }}
                                >
                                    <source src={Intro} type="video/mp4" />
                                </video>

                                {/* Play/Pause Overlay (වීඩියෝ එක මැද තියෙන බටන් එක) */}
                                {!isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20">
                                        <button onClick={togglePlay} className="w-20 h-20 bg-white text-[#1349ec] rounded-full flex items-center justify-center shadow-2xl">
                                            <Play size={32} fill="currentColor" className="ml-1" />
                                        </button>
                                    </div>
                                )}

                                {/* Custom Control Bar */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 flex items-center justify-between shadow-xl">
                                    <div className="flex items-center gap-4 text-slate-900">
                                        <button onClick={togglePlay} className="text-[#1349ec]">
                                            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                                        </button>
                                        <div className="w-32 h-1.5 bg-slate-200 rounded-full relative overflow-hidden">
                                            <div
                                                className="absolute top-0 left-0 h-full bg-[#1349ec] rounded-full transition-all duration-100"
                                                style={{ width: `${progress}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-slate-500">
                                        {/* Volume Button */}
                                        <button onClick={() => setIsMuted(!isMuted)} className="text-[#1349ec] hover:scale-110 transition-transform">
                                            {isMuted ? <VolumeOff size={18} /> : <Volume2 size={18} />}
                                        </button>
                                        <button onClick={toggleFullScreen} className="hover:text-[#1349ec]">
                                            <Maximize size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature Cards Grid (Updated to match other components) */}
                        <div className="mt-12 grid sm:grid-cols-2 gap-6 relative z-10">
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
    <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-white hover:border-[#1349ec]/20 hover:-translate-y-1 transition-all duration-300 group">
        <div className="w-12 h-12 rounded-2xl bg-[#1349ec]/10 flex items-center justify-center mb-4 text-[#1349ec] group-hover:bg-[#1349ec] group-hover:text-white transition-all duration-500">
            <Icon size={24} strokeWidth={2} />
        </div>
        <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
);

export default About;