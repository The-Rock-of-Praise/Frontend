import { useState } from 'react';
import {
    Quote,
    CheckCircle2,
    Sparkles,
    ArrowRight,
    Download,
    ScrollText,
    Eye,
    Star,
    Heart,
} from 'lucide-react';
import Profile from '../../assets/Profile.jpeg';

const Vision = () => {
    const [activeTab, setActiveTab] = useState('Behind the Vision');

    const tabs = [
        { id: 'Behind the Vision', icon: <Eye size={16} /> },
        { id: 'The Vision', icon: <ScrollText size={16} /> },
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

                        {/* Switchable Content */}
                        <div className="flex-1 overflow-y-auto px-8 md:px-16 py-12 custom-scrollbar">
                            <div className="max-w-2xl mx-auto">
                                
                                {activeTab === 'Behind the Vision' && (
                                    <div className="space-y-8 animate-in fade-in duration-700">
                                        <header>
                                            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#1349ec] block mb-2">My Journey & Testimony</span>
                                            <h3 className="font-serif italic text-4xl text-slate-900">Behind the Vision</h3>
                                        </header>

                                        <div className="text-slate-600 leading-loose space-y-6 text-[16px]">
                                            <p className="font-medium text-slate-800">Greetings in our Lord Jesus Christ!</p>
                                            <p>
                                                To all who have downloaded <span className="text-[#1349ec] font-semibold">The Rock of Praise</span> and subscribed to the Pro Version, or visited our website, I extend my heartfelt welcome and gratitude. It is my prayer that this app brings you closer to God, enriches your worship, and blesses your spiritual journey.
                                            </p>
                                            <p>
                                                In May 2020, I first launched an app called <span className="italic">Christian Songs Book</span> on the Google Play Store. It contained Sinhala worship songs and was downloaded by over 7,500 people, becoming a blessing to many. By God’s grace, that first step opened a path to serve believers through technology in a meaningful way.
                                            </p>
                                            <p>
                                                Today, I am humbled and excited to present <span className="text-slate-900 font-bold">The Rock of Praise</span> — a renewed, multilingual worship lyrics app with 5,000+ songs in English, Sinhala, and Tamil. It has been beautifully designed to be user-friendly, spiritually enriching, and accessible across all devices, including smartphones, tablets, iPhones, and iPads. The app is available on the Google Play Store, Apple App Store, and Huawei AppGallery.
                                            </p>
                                            
                                            <blockquote className="relative border-l-4 border-[#1349ec] pl-8 py-6 bg-blue-50/50 rounded-r-3xl my-8">
                                                <Quote className="absolute top-2 left-2 text-[#1349ec]/10" size={60} />
                                                <p className="font-serif italic text-xl text-slate-700 leading-relaxed relative z-10">
                                                    "Oh come, let us sing to the Lord; let us make a joyful noise to the rock of our salvation!"
                                                </p>
                                                <cite className="text-[10px] font-bold tracking-widest uppercase text-[#1349ec] mt-4 block not-italic">— Psalm 95:1</cite>
                                            </blockquote>

                                            <p>
                                                My prayer is that this app will bless Christians everywhere — churches, worship teams, youth ministries, and individuals — helping them worship God anytime, anywhere. Even in remote areas without internet, believers can now access the Word and songs of praise, keeping the fire of worship alive.
                                            </p>

                                            <p>
                                                Worship is sacred, joyous, and transformative. Whether you are leading a service, participating in a choir, or praising quietly in your home, remember that we are all children of God and heirs to His Kingdom.
                                            </p>

                                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-sm">
                                                <p className="mb-4">The rights to all songs belong to their rightful owners and songwriters. I am deeply grateful to them and to the dedicated team who helped bring this vision to life.</p>
                                                <p>I also wish to sincerely thank my father, <span className="font-semibold text-slate-900">Rev. Dr. Johnson Udayakumar</span>, my mother, <span className="font-semibold text-slate-900">Sis Anbu</span>, and our ministry, <span className="text-[#1349ec]">Beracah Christian Ministry</span> in Sri Lanka, for their prayerful support, encouragement, and guidance throughout this journey.</p>
                                            </div>

                                            <p>
                                                This app is released under <span className="font-bold">JS Christian Productions</span>. My hope is to bring many more projects and creative works forward under JS Christian Productions for God’s glory.
                                            </p>

                                            <p>
                                                I also want to encourage every believer using this app: if we invite God into our hearts, He can transform us from unworthy to worthy. His grace and power can take our ordinary lives and use them for His extraordinary purposes.
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                                <div className="bg-blue-600 p-6 rounded-2xl text-white">
                                                    <p className="font-serif italic text-lg leading-relaxed">
                                                        "Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new."
                                                    </p>
                                                    <p className="text-[10px] font-bold mt-4 uppercase tracking-widest opacity-80">— 2 Corinthians 5:17</p>
                                                </div>
                                                <div className="bg-slate-900 p-6 rounded-2xl text-white">
                                                    <p className="font-serif italic text-lg leading-relaxed">
                                                        "I can do all things through Christ who strengthens me."
                                                    </p>
                                                    <p className="text-[10px] font-bold mt-4 uppercase tracking-widest opacity-80">— Philippians 4:13</p>
                                                </div>
                                            </div>

                                            <p>
                                                Let this app be more than a tool — let it be a source of inspiration, encouragement, and transformation. Praise God with joy, share His love through song, and allow His Word and Spirit to guide your life.
                                            </p>

                                            <div className="flex flex-col gap-4 border-t border-slate-100 pt-8">
                                                <div className="flex items-center gap-3">
                                                    <Star className="text-yellow-500" size={18} />
                                                    <p className="font-serif italic text-slate-700">"Sing to the Lord a new song; sing to the Lord, all the earth!" — Psalm 96:1</p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Heart className="text-red-500" size={18} />
                                                    <p className="font-serif italic text-slate-700">"Let everything that has breath praise the Lord! Praise the Lord!" — Psalm 150:6</p>
                                                </div>
                                            </div>

                                            <div className="pt-8">
                                                <p className="text-slate-400 text-sm mb-2">In His Service,</p>
                                                <span className="font-serif italic text-4xl text-slate-900 block mb-1">Johnson Shan</span>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1349ec]">Founder, The Rock of Praise</p>
                                            </div>

                                            <div className="pt-12 mt-12 border-t border-slate-100 text-center space-y-4">
                                                <p className="text-xs text-slate-400 italic">A Vision by Johnson Shan</p>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Designed & Developed by</p>
                                                    <p className="text-sm font-bold text-[#1349ec]">JS Christian Productions</p>
                                                    <a href="https://www.rockofpraise.org" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 hover:text-[#1349ec] transition-colors">www.rockofpraise.org</a>
                                                </div>
                                                <p className="text-[10px] text-slate-300 pt-4">© 2026 The Rock of Praise. All rights reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'The Vision' && (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                        <header>
                                            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#1349ec] block mb-2">Strategic Partnership</span>
                                            <h3 className="font-serif italic text-4xl text-slate-900">The Vision</h3>
                                        </header>
                                        <div className="bg-blue-50/50 p-10 rounded-[2rem] border border-blue-100 relative overflow-hidden">
                                            <Sparkles className="absolute top-[-20px] right-[-20px] text-blue-200/20" size={120} />
                                            <p className="text-lg text-slate-700 leading-relaxed font-medium relative z-10">
                                                "We're proud to partner with <span className="text-[#1349ec]">JS Christian Productions</span>, sharing a common vision of using technology to advance God's kingdom and bring believers together in worship."
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'Our Calling' && (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                        <header>
                                            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#1349ec] block mb-2">Our Mission</span>
                                            <h3 className="font-serif italic text-4xl text-slate-900">Our Calling</h3>
                                        </header>
                                        <div className="space-y-6">
                                            <p className="text-slate-600 leading-loose text-[16px]">
                                                This app was born from a simple observation: <span className="text-slate-900 font-semibold italic">worship should be accessible to everyone</span>. 
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Unity</p>
                                                    <p className="text-sm text-slate-600">Tamil-speaking believers in Sinhala congregations.</p>
                                                </div>
                                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Diversity</p>
                                                    <p className="text-sm text-slate-600">English speakers visiting local churches abroad.</p>
                                                </div>
                                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Growth</p>
                                                    <p className="text-sm text-slate-600">Spiritual enrichment while learning a new language.</p>
                                                </div>
                                            </div>
                                            <p className="bg-slate-900 text-white p-8 rounded-3xl text-center">
                                                <span className="text-blue-400 font-bold">PraiseFlow</span> ensures you can participate fully in the worship experience, bridging gaps and building the body of Christ.
                                            </p>
                                        </div>
                                    </div>
                                )}

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
