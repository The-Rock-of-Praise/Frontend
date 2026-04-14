import { ArrowLeft, Scale, Clock, CreditCard, Shield, UserCheck, AlertCircle, FileText, HelpCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { useEffect } from 'react';

const TermsOfService = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Section = ({ icon: Icon, title, children, id, className = "" }: { icon: any, title: string, children: React.ReactNode, id?: string, className?: string }) => (
        <div className={`mb-12 relative group ${className}`} id={id}>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1349ec]/10 rounded-2xl flex items-center justify-center text-[#1349ec] transition-colors group-hover:bg-[#1349ec] group-hover:text-white">
                    <Icon size={24} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h2>
            </div>
            <div className="pl-4 md:pl-16 border-l-2 border-slate-100 group-hover:border-blue-200 transition-colors">
                {children}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#f6f6f8] font-['Poppins'] antialiased text-slate-700 pb-20">
            {/* Background Decorations */}
            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#1349ec]/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-400/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

            <div className="relative z-10">
                {/* Header/Navigation */}
                <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white px-6 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#1349ec] ring-offset-2 transition-transform hover:scale-110">
                                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-black text-slate-900 tracking-tight">The Rock of Praise</span>
                        </Link>
                        <Link 
                            to="/" 
                            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-black hover:bg-[#1349ec] transition-all active:scale-95 shadow-xl shadow-blue-900/10"
                        >
                            <ArrowLeft size={16} />
                            Back to Home
                        </Link>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-[#1349ec]/10 px-4 py-2 rounded-full mb-6 relative overflow-hidden group">
                        <Scale size={16} className="text-[#1349ec] relative z-10" />
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1349ec] relative z-10">Legal Framework</span>
                        <div className="absolute inset-0 bg-white opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-[0.9]">Terms & <br className="sm:hidden" />Conditions</h1>
                    <div className="flex items-center justify-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-xs">
                        <Clock size={14} />
                        <span>Effective Date: August 2025</span>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-4xl mx-auto px-6">
                    <div className="bg-white/60 backdrop-blur-md border border-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-blue-900/5">
                        
                        {/* Intro Message */}
                        <div className="bg-[#1349ec]/5 border-l-4 border-[#1349ec] p-8 rounded-2xl mb-12">
                            <p className="text-lg font-medium text-slate-800 leading-relaxed">
                                Welcome to <strong>The Rock of Praise</strong>. By accessing or using this website and app, including the free and Pro versions, you agree to be bound by these Terms & Conditions. Our prayer is that this platform blesses your worship and spiritual journey.
                            </p>
                        </div>

                        <Section icon={UserCheck} title="1. Acceptance of Terms">
                            <p className="leading-relaxed text-slate-600">
                                By downloading, installing, or using this app, you agree to these Terms. If you do not agree, please refrain from using the app.
                            </p>
                        </Section>

                        <Section icon={FileText} title="2. Use of the App">
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 transition-all hover:bg-white hover:shadow-sm">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-[#1349ec] mt-2.5"></div>
                                    <p>The app is intended for personal, educational, and worship purposes.</p>
                                </li>
                                <li className="flex gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 transition-all hover:bg-white hover:shadow-sm">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-[#1349ec] mt-2.5"></div>
                                    <p>Users may access the app freely for worship, spiritual growth, and personal use.</p>
                                </li>
                                <li className="flex gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 transition-all hover:bg-white hover:shadow-sm">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-[#1349ec] mt-2.5"></div>
                                    <p>Content may not be reproduced, distributed, or sold without written permission.</p>
                                </li>
                            </ul>
                        </Section>

                        <Section icon={CreditCard} title="3. Pro Version & Payments">
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex gap-4">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-[#1349ec] mt-2.5"></div>
                                    <p>The Pro Version enables offline access to songs and additional features.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-[#1349ec] mt-2.5"></div>
                                    <p>Payments are processed securely via the <strong>PayHere</strong> payment gateway.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-[#1349ec] mt-2.5"></div>
                                    <p>By purchasing the Pro Version, you agree to the terms of the payment gateway.</p>
                                </li>
                            </ul>
                        </Section>

                        <Section icon={Shield} title="4. Intellectual Property">
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex gap-4">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-[#1349ec] mt-2.5"></div>
                                    <p>All songs remain the property of their rightful owners and songwriters.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-[#1349ec] mt-2.5"></div>
                                    <p>The Rock of Praise owns the app design, software, and content structure.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-[#1349ec] mt-2.5"></div>
                                    <p>Users may not copy, alter, or distribute app content for commercial purposes.</p>
                                </li>
                            </ul>
                        </Section>

                        <Section icon={UserCheck} title="5. User Conduct">
                            <p className="leading-relaxed text-slate-600 mb-4">
                                Users agree to respect the sacred purpose of the app and refrain from misuse.
                            </p>
                            <div className="p-4 bg-red-50 rounded-xl border border-red-100 flex items-center gap-3 text-red-700 text-sm font-bold">
                                <AlertCircle size={18} />
                                No spamming, hacking, or unauthorized access is permitted.
                            </div>
                        </Section>

                        <Section icon={AlertCircle} title="6. Disclaimer & Limitation of Liability">
                            <ul className="space-y-4 text-slate-600 mb-8">
                                <li>The app provides lyrics for reference and worship purposes; accuracy is maintained to the best of our ability.</li>
                                <li>The Rock of Praise is not responsible for indirect, incidental, or consequential damages.</li>
                                <li>We do not guarantee uninterrupted service or full offline functionality at all times.</li>
                            </ul>
                        </Section>

                        <Section icon={Clock} title="7. Changes to Terms">
                            <p className="leading-relaxed text-slate-600">
                                These Terms may be updated at any time to improve your experience. Updated terms take effect upon posting on the website.
                            </p>
                        </Section>

                        <Section icon={Scale} title="8. Governing Law">
                            <p className="leading-relaxed text-slate-600 font-bold">
                                These Terms are governed by the laws of Sri Lanka.
                            </p>
                        </Section>

                        {/* Refund Policy Section */}
                        <div className="mt-20 pt-16 border-t border-slate-100">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-16 h-16 bg-[#1349ec] rounded-[1.5rem] flex items-center justify-center text-white shadow-xl shadow-blue-600/20">
                                    <CreditCard size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">Refund Policy</h2>
                                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-1">Updated August 2025</p>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">1. Eligibility</h3>
                                    <ul className="space-y-3 text-slate-600 pl-2">
                                        <li className="flex gap-3"><span className="text-green-500 font-bold">✓</span> Refunds available for accidental double payments or technical issues.</li>
                                        <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> No refunds for dissatisfaction with content or features.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">2. Request Process</h3>
                                    <p className="text-slate-600 mb-4">Contact our support team at <strong>support@therockofpraise.org</strong> within 7 days of purchase. Please provide proof of payment and a brief description of the issue.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">3. Refund Method</h3>
                                    <p className="text-slate-600">Refunds will be issued through the original payment method via <strong>PayHere, Bank Transfer, or PayPal</strong> (for international users only). Processing may take 5–10 business days.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">4. Limitations</h3>
                                    <p className="text-slate-600">Expired subscriptions or donations are non-refundable. All refunds are subject to app store and payment gateway policies.</p>
                                </div>
                            </div>
                        </div>

                        <Section icon={HelpCircle} title="9. Support" id="support" className="mt-20">
                            <div className="p-8 bg-slate-900 rounded-[2rem] text-white flex flex-col items-center text-center gap-6 shadow-2xl">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <HelpCircle size={32} />
                                </div>
                                <div>
                                    <p className="text-blue-100/70 text-sm mb-2">Need assistance with our terms?</p>
                                    <p className="text-2xl font-black tracking-tight">support@therockofpraise.org</p>
                                </div>
                                <button className="px-8 py-3 bg-[#1349ec] hover:bg-blue-500 transition-colors rounded-xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-900/40">
                                    Contact Support
                                </button>
                            </div>
                        </Section>

                        <div className="text-center mt-24 pt-12 border-t border-slate-100">
                            <Heart size={40} className="mx-auto text-red-500 mb-6 animate-pulse" />
                            <p className="text-3xl font-black text-slate-900 mb-2 leading-[0.9]">Solide Deo Gloria</p>
                            <p className="text-[#1349ec] font-black tracking-[0.3em] uppercase text-sm">To God Alone be the Glory</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TermsOfService;
