import { useState } from 'react';
import {
    Quote,
    CheckCircle2,
    Sparkles,
    ArrowRight,
    Download,
    ScrollText,
    Eye,
} from 'lucide-react';
import Profile from '../../assets/Profile.jpeg';

const Vision = () => {
    const [activeTab, setActiveTab] = useState('Behind the Vision');

    const tabs = [
        { id: 'The Vision', icon: <Eye size={16} /> },
        { id: 'Behind the Vision', icon: <ScrollText size={16} /> },
        { id: 'Our Calling', icon: <Sparkles size={16} /> }
    ];

    return (
        <div className="bg-[#f6f6f8] text-slate-900 min-h-screen font-['Poppins'] py-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* --- Main Card Section --- */}
                <section className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/5 border border-white">

                    {/* Left: Image Side */}
                    <div className="lg:col-span-5 relative h-[500px] lg:h-[850px] overflow-hidden group">
                        <img
                            alt="Founder Johnson Shan"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                            src={Profile}
                        />
                        {/* Light Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                        <div className="absolute bottom-12 left-12 right-12 text-white">
                            <div className="mb-6 h-1 w-20 bg-[#1349ec]"></div>
                            <h2 className="font-serif italic text-5xl md:text-6xl mb-2">Johnson Shan</h2>
                            <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-blue-400 mb-6">Founder, The Rock of Praise</p>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-white/20">
                                <CheckCircle2 className="text-blue-400" size={18} />
                                <span className="text-[10px] font-bold tracking-widest uppercase text-white/90">Established since 2004</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content Side */}
                    <div className="lg:col-span-7 flex flex-col h-[600px] lg:h-[850px] bg-white">

                        {/* Tabs Navigation */}
                        <div className="flex border-b border-slate-100 px-6 md:px-10 overflow-x-auto no-scrollbar bg-slate-50/50">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 py-8 px-6 text-[11px] tracking-[0.2em] uppercase transition-all relative whitespace-nowrap ${activeTab === tab.id ? "text-[#1349ec] font-bold" : "text-slate-400 hover:text-slate-600"
                                        }`}
                                >
                                    {tab.icon}
                                    {tab.id}
                                    {activeTab === tab.id && (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1349ec] rounded-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto px-8 md:px-16 py-12 custom-scrollbar">
                            <div className="max-w-2xl mx-auto space-y-8">
                                <header>
                                    <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#1349ec] block mb-2">A Personal Letter</span>
                                    <h3 className="font-serif italic text-4xl text-slate-900">Greetings in the name of the Lord,</h3>
                                </header>

                                <blockquote className="relative border-l-4 border-[#1349ec] pl-8 py-6 bg-blue-50/50 rounded-r-3xl">
                                    <Quote className="absolute top-2 left-2 text-[#1349ec]/10" size={60} />
                                    <p className="font-serif italic text-xl text-slate-700 leading-relaxed relative z-10">
                                        "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"
                                    </p>
                                    <cite className="text-[10px] font-bold tracking-widest uppercase text-[#1349ec] mt-4 block not-italic">— 2 Corinthians 5:17</cite>
                                </blockquote>

                                <div className="text-slate-600 leading-loose space-y-6 text-[16px]">
                                    <p>
                                        It began with a quiet prompting in the heart—a call to return to the essence of worship. For years, I witnessed the world seeking foundations in shifting sands, longing for something eternal.
                                        <span className="text-[#1349ec] font-semibold mx-1">The Rock of Praise</span> was birthed from a desire to see a generation not just attend service, but encounter the Living God.
                                    </p>
                                    <p>
                                        It's about <span className="text-slate-900 font-bold italic">Spirit & Truth</span>. My journey has been one of discovering that praise is not just a prelude, but a powerful weapon of transformation.
                                    </p>

                                    <p className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-slate-700 italic border-l-4 border-l-[#1349ec]">
                                        "This isn't just a ministry; it's a movement of hearts returning to their Creator. Every stone laid in this vision is cemented with prayer."
                                    </p>

                                    <p>
                                        I invite you to be part of this unfolding story. Whether you are seeking answers, looking for a community, or simply need a place to belong, our doors and our hearts are open.
                                    </p>
                                </div>

                                {/* Signature Section */}
                                <div className="pt-12 pb-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                    <div>
                                        <p className="text-slate-400 text-sm mb-4">In His Unfailing Grace,</p>
                                        <span className="font-serif italic text-5xl text-slate-900 block">Johnson Shan</span>
                                    </div>
                                    <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                                        <div className="w-12 h-12 rounded-xl bg-[#1349ec] flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                                            <Sparkles size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">Founder & Lead Pastor</p>
                                            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#1349ec]">The Rock of Praise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Bottom CTA Section --- */}
                <div className="mt-20 text-center">
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full mb-12"></div>
                    <h4 className="text-2xl font-light italic text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
                        Experience the unshakeable peace that comes from a life anchored in Him.
                    </h4>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="group flex items-center gap-4 bg-[#1349ec] text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                            Connect with our Story
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </button>

                        <button className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-[#1349ec] transition-colors border-b border-transparent hover:border-[#1349ec] pb-1">
                            <Download size={16} />
                            Download Vision Document
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision;