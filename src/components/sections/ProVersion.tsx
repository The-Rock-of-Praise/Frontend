import React from 'react';
import { motion } from 'framer-motion';
import Pro1 from '../../assets/Pro1.jpeg';
import Pro2 from '../../assets/Pro2.jpeg';

import {
    Star,
    Globe2,
    Cloud,
    Phone,
    Wrench,
    PlusCircle,
    Heart,
    ShieldCheck,
    CloudOff,
    Languages,
    Globe
} from 'lucide-react';

const ProVersion: React.FC = () => {
    return (
        // Adjusted the main container to use standard Tailwind colors mapped from the custom scheme
        <main className="pt-20 bg-slate-50 font-[Inter] text-slate-900 selection:bg-sky-200 selection:text-sky-900">
            {/* Hero Section */}
            <section className="relative px-8 py-12 md:py-20 overflow-hidden" id="pro">
                <div className="absolute inset-0 praise-glow -z-10"></div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">

                    {/* Left text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold tracking-wide shadow-sm border border-sky-200/50">
                            <Star className="w-4 h-4 mr-1.5 fill-sky-500 text-sky-500" />
                            PRO VERSION NOW LIVE
                        </div>

                        <h1 className="font-['Poppins'] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-950 leading-tight">
                            The Rock of Praise – <span className="text-blue-700 drop-shadow-sm">Pro</span>
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                            Worship without limits for <span className="font-bold text-blue-600">$2.99/mo</span>. Support a global ministry and the technology connecting us to the Divine.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full font-bold shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all active:scale-95">
                                Upgrade for $2.99/mo
                            </button>
                            <button className="px-6 py-3 bg-white/70 backdrop-blur-xl border border-slate-200 rounded-full font-bold text-blue-700 hover:bg-white hover:shadow-md transition-all active:scale-95">
                                Learn More
                            </button>
                        </div>
                    </motion.div>

                    {/* Hero Image / Video visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        {/* Adding 'glass-card' equivalent to frame in an ultra-modern way */}
                        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 transition-transform hover:scale-[1.02] duration-500 border border-white/60 bg-white/30 backdrop-blur-sm p-2">
                            <div className="w-full h-full rounded-2xl overflow-hidden">
                                <img
                                    className="w-full h-full object-cover"
                                    alt="Worship leader silhouette"
                                    src={Pro1}
                                />
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute -bottom-4 -left-4 glass-card px-4 py-3 rounded-2xl shadow-xl border border-white/60 flex items-center gap-3"
                        >
                            <div className="p-1.5 bg-sky-100 rounded-xl shadow-inner">
                                <Globe2 className="w-5 h-5 text-sky-700" />
                            </div>
                            <span className="text-sm font-bold text-slate-800">Multilingual Support</span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid Info Center */}
            <section className="px-8 py-12 bg-[#f2f4f6]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Mission Card */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="md:col-span-2 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-8 flex flex-col justify-center shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-xl hover:border-blue-200"
                    >
                        <h2 className="text-2xl font-bold font-['Poppins'] text-blue-700 mb-4">A Ministry-Focused Platform</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Our mission is to empower believers across the globe. Your $2.99 monthly contribution directly supports technology development, server hosting, and the expansion of our spiritual reach through English, Sinhala, and Tamil resources.
                        </p>

                        <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div>
                                <p className="text-3xl font-bold text-blue-600">3</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1">Languages</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-blue-600">∞</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1">Access</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-blue-600">0</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1">Ads</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-blue-600">24/7</p>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1">Offline</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Why $2.99 List Card */}
                    <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-3xl p-8 shadow-xl shadow-blue-900/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mt-10 -mr-10 pointer-events-none"></div>
                        <h3 className="text-xl font-bold font-['Poppins'] mb-6 relative z-10">Why $2.99?</h3>

                        <ul className="space-y-4 text-sm relative z-10 text-blue-100">
                            <li className="flex items-center gap-3 font-medium">
                                <Cloud className="w-4 h-4 text-blue-300" /> High-availability hosting
                            </li>
                            <li className="flex items-center gap-3 font-medium">
                                <Phone className="w-4 h-4 text-blue-300" /> App Store distribution
                            </li>
                            <li className="flex items-center gap-3 font-medium">
                                <Wrench className="w-4 h-4 text-blue-300" /> Technical maintenance
                            </li>
                            <li className="flex items-center gap-3 font-medium">
                                <PlusCircle className="w-4 h-4 text-blue-300" /> Future features & chords
                            </li>
                        </ul>

                        <div className="mt-8 aspect-video rounded-xl overflow-hidden shadow-inner relative z-10 border border-white/10">
                            <img
                                className="w-full h-full object-cover grayscale opacity-60 mix-blend-overlay hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                alt="Studio microphone"
                                src={Pro2}
                            />
                        </div>
                    </motion.div>

                    {/* Comparison Table */}
                    <div className="md:col-span-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40">
                        <div className="px-8 py-5 bg-slate-50/80 border-b border-slate-100 flex justify-between items-center backdrop-blur-sm">
                            <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-slate-500">Compare Experience</h3>
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 pb-1.5 rounded-full border border-blue-100">Elevate Your Journey</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="text-slate-400 border-b border-slate-50">
                                        <th className="px-8 py-4 font-medium uppercase tracking-wider text-[11px]">Feature</th>
                                        <th className="px-8 py-4 font-medium uppercase tracking-wider text-[11px]">Free</th>
                                        <th className="px-8 py-4 font-black uppercase tracking-wider text-[11px] text-blue-600">Pro ($2.99)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    <tr className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-8 py-4 font-medium text-slate-700">Christian Worship Lyrics</td>
                                        <td className="px-8 py-4 text-slate-400">Available</td>
                                        <td className="px-8 py-4 font-bold text-blue-600 group-hover:text-blue-700 transition-colors">Unlimited Access</td>
                                    </tr>
                                    <tr className="bg-slate-50/30 hover:bg-slate-50/80 transition-colors group">
                                        <td className="px-8 py-4 font-medium text-slate-700">Internet Required</td>
                                        <td className="px-8 py-4 text-slate-400">Yes</td>
                                        <td className="px-8 py-4 font-bold text-blue-600 group-hover:text-blue-700 transition-colors">No (Offline Ready)</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 transition-colors group">
                                        <td className="px-8 py-4 font-medium text-slate-700">Advertisements</td>
                                        <td className="px-8 py-4 text-slate-400 relative">
                                            Yes
                                            <div className="absolute top-1/2 left-4 w-12 h-0.5 bg-slate-300 -translate-y-1/2 rounded mix-blend-multiply"></div>
                                        </td>
                                        <td className="px-8 py-4 font-bold text-blue-600 group-hover:text-blue-700 transition-colors">Zero Ads</td>
                                    </tr>
                                    <tr className="bg-slate-50/30 hover:bg-slate-50/80 transition-colors group">
                                        <td className="px-8 py-4 font-medium text-slate-700">Performance & UI</td>
                                        <td className="px-8 py-4 text-slate-400">Standard</td>
                                        <td className="px-8 py-4 font-bold text-blue-600 group-hover:text-blue-700 transition-colors">Premium Glassmorphism</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>

            {/* Features & Mission Summary */}
            <section className="px-8 py-16 bg-white relative">
                {/* Subtle background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-50/50 rounded-[100%] blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-4 gap-6">

                        {/* Heart Quote */}
                        <div className="md:col-span-2 bg-slate-50/80 backdrop-blur-md rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center border border-slate-100 shadow-sm">
                            <Heart className="w-12 h-12 text-blue-500 mb-6 fill-blue-500/20" strokeWidth={1.5} />
                            <blockquote className="text-2xl font-['Plus_Jakarta_Sans'] font-medium italic text-slate-800 leading-tight mb-6">
                                "let us sing to the LORD! Let us shout joyfully to the Rock of our salvation."
                            </blockquote>
                            <cite className="block text-blue-600 text-sm font-bold uppercase tracking-widest not-italic">Psalms 95 : 1</cite>
                            <p className="mt-6 text-sm text-slate-500 max-w-sm font-medium leading-relaxed">
                                Join thousands in a mission where everyone, regardless of language, can encounter the Rock of Salvation.
                            </p>
                        </div>

                        {/* Feature Icons (Small Grid) */}
                        <div className="md:col-span-2 grid grid-cols-2 gap-4">
                            <motion.div whileHover={{ y: -2 }} className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-3xl p-6 flex flex-col justify-center items-start gap-4 hover:shadow-md hover:border-blue-100 transition-all">
                                <div className="p-3 bg-blue-100/50 rounded-2xl text-blue-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-slate-900 mb-1">Ad-Free</p>
                                    <p className="text-slate-500 text-xs font-medium">Zero distractions</p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -2 }} className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-3xl p-6 flex flex-col justify-center items-start gap-4 hover:shadow-md hover:border-blue-100 transition-all">
                                <div className="p-3 bg-blue-100/50 rounded-2xl text-blue-600">
                                    <CloudOff className="w-6 h-6" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-slate-900 mb-1">Offline</p>
                                    <p className="text-slate-500 text-xs font-medium">Worship anywhere</p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -2 }} className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-3xl p-6 flex flex-col justify-center items-start gap-4 hover:shadow-md hover:border-blue-100 transition-all">
                                <div className="p-3 bg-blue-100/50 rounded-2xl text-blue-600">
                                    <Languages className="w-6 h-6" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-slate-900 mb-1">Multilingual</p>
                                    <p className="text-slate-500 text-xs font-medium">3 Translations</p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -2 }} className="bg-slate-50/80 backdrop-blur-sm border border-slate-100 rounded-3xl p-6 flex flex-col justify-center items-start gap-4 hover:shadow-md hover:border-blue-100 transition-all">
                                <div className="p-3 bg-blue-100/50 rounded-2xl text-blue-600">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-slate-900 mb-1">Global Mission</p>
                                    <p className="text-slate-500 text-xs font-medium">Be a partner</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA (Sleeker) */}
            <section className="px-8 pb-16 pt-4 bg-white relative z-10">
                <div className="max-w-7xl mx-auto p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-900/30">
                    {/* Decorative glass orbs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl -ml-20 -mb-20"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-left">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-4 tracking-tight drop-shadow-sm">Ready to Start Your Pro Journey?</h2>
                            <p className="text-blue-100/90 text-lg font-medium leading-relaxed">
                                Join worshipers around the world. Secure, simple, and kingdom-focused.
                            </p>
                        </div>
                        <div className="shrink-0 flex flex-col items-center">
                            <button className="px-10 py-5 bg-white text-blue-700 rounded-full font-black text-lg hover:scale-105 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 active:scale-95 shadow-lg border border-white/50 backdrop-blur-sm">
                                Get Pro – $2.99/mo
                            </button>
                            <p className="mt-4 text-xs font-medium text-blue-200/60 uppercase tracking-widest flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" /> Cancel anytime. Glory to God.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProVersion;
