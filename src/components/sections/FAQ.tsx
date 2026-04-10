import { useState, useEffect } from 'react';
import { ArrowLeft, ChevronDown, HelpCircle, MessageCircle, Mail, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.jpg';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div className="mb-4 overflow-hidden rounded-2xl border border-white bg-white/50 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/50"
            >
                <span className="text-lg font-bold text-slate-800">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-blue-600"
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="border-t border-white p-6 pt-0 text-slate-600 leading-relaxed font-medium">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        {
            question: "1. What is The Rock of Praise?",
            answer: "The Rock of Praise is a Christian worship lyrics application designed to provide multilingual worship songs in English, Sinhala, and Tamil, helping believers worship anytime and anywhere."
        },
        {
            question: "2. Is The Rock of Praise free to use?",
            answer: (
                <div className="space-y-2">
                    <p>Yes. The Rock of Praise offers a free version that allows users to access worship lyrics online.</p>
                    <p className="p-3 bg-blue-600/5 rounded-xl border border-blue-600/10 text-blue-800 font-bold">
                        A Pro version ($2.99/month) is available for offline access and premium features.
                    </p>
                </div>
            )
        },
        {
            question: "3. What languages are available in the app?",
            answer: (
                <div>
                    <p className="mb-2">The app currently supports:</p>
                    <ul className="grid grid-cols-3 gap-2">
                        {['English', 'Sinhala', 'Tamil'].map(lang => (
                            <li key={lang} className="bg-white border border-slate-100 p-2 text-center rounded-lg shadow-sm text-sm font-bold text-slate-700">
                                {lang}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-3 italic text-xs text-slate-400">More languages may be added in future updates.</p>
                </div>
            )
        },
        {
            question: "4. Can I use the app offline?",
            answer: (
                <div className="space-y-3">
                    <p><strong>Yes.</strong></p>
                    <p>Pro users can download song data and access lyrics offline without an internet connection.</p>
                    <p>Free users require internet access.</p>
                </div>
            )
        },
        {
            question: "5. Why is there a Pro subscription?",
            answer: (
                <div>
                    <p className="mb-3">The Pro subscription helps support:</p>
                    <ul className="space-y-2">
                        {['App development and maintenance', 'Server and hosting costs', 'Song database expansion', 'Future feature updates', 'Global Christian ministry outreach'].map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 font-bold text-blue-600">Your support helps spread worship across nations.</p>
                </div>
            )
        },
        {
            question: "6. How can I download The Rock of Praise?",
            answer: (
                <div>
                    <p className="mb-3">You can download the app from:</p>
                    <ul className="space-y-2">
                        <li className="font-bold text-slate-800">• Google Play Store</li>
                        <li className="font-bold text-slate-800">• Apple App Store</li>
                        <li className="font-bold text-slate-800">• Official website: <span className="text-blue-600">therockofpraise.org</span></li>
                    </ul>
                </div>
            )
        },
        {
            question: "7. Who can use this app?",
            answer: (
                <div>
                    <p className="mb-3">The Rock of Praise is designed for:</p>
                    <div className="flex flex-wrap gap-2">
                        {['Churches', 'Worship leaders', 'Musicians', 'Youth ministries', 'Christian families', 'Personal worship and devotion'].map(user => (
                            <span key={user} className="bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-600 border border-slate-200">
                                {user}
                            </span>
                        ))}
                    </div>
                    <p className="mt-4 font-black text-slate-800 uppercase tracking-wider text-sm">Anyone who loves worship can use this app.</p>
                </div>
            )
        },
        {
            question: "8. Who created The Rock of Praise?",
            answer: "The Rock of Praise is developed and powered by JS Christian Productions, with a vision to support the global Christian worship community."
        },
        {
            question: "9. How can I contact support?",
            answer: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[{Icon: Globe, text: "Website contact page"}, {Icon: Mail, text: "Email support"}, {Icon: MessageCircle, text: "Social media platforms"}].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
                            <item.Icon size={18} className="text-blue-600" />
                            <span className="text-sm font-bold text-slate-700">{item.text}</span>
                        </div>
                    ))}
                    <p className="md:col-span-2 text-center mt-2 text-sm text-slate-400">Our team is ready to assist you.</p>
                </div>
            )
        },
        {
            question: "10. Can I cancel the Pro subscription anytime?",
            answer: (
                <div className="space-y-3">
                    <p><strong>Yes.</strong></p>
                    <p>You can cancel your Pro subscription anytime through Google Play Store or Apple App Store, and access will continue until the current billing period ends.</p>
                </div>
            )
        },
        {
            question: "11. Is The Rock of Praise a ministry or a business?",
            answer: (
                <div className="space-y-4">
                    <p>The Rock of Praise is a Christian ministry-focused digital platform created to support worship, unity, and spiritual growth across nations.</p>
                    <p className="font-bold text-blue-700 italic border-l-4 border-blue-600 pl-4 bg-blue-50 py-3 rounded-r-xl">
                        The Pro subscription helps sustain and expand this global mission.
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-[#f6f6f8] font-['Poppins'] antialiased text-slate-700 pb-20">
            {/* Background Decorations */}
            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-400/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

            <div className="relative z-10">
                {/* Header/Navigation */}
                <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white px-6 py-4 transition-all duration-300">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-blue-600 ring-offset-2 transition-transform hover:scale-110">
                                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-bold text-slate-900 tracking-tight">The Rock of Praise</span>
                        </Link>
                        <Link 
                            to="/" 
                            className="group flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-900/10"
                        >
                            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                            Return to Website
                        </Link>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-blue-600/10 px-4 py-2 rounded-full mb-8"
                    >
                        <HelpCircle size={18} className="text-blue-600" />
                        <span className="text-xs font-black uppercase tracking-widest text-blue-700">Support Center</span>
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        Frequently Asked <br />
                        <span className="text-blue-600">Questions</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 font-medium"
                    >
                        Everything you need to know about The Rock of Praise.
                    </motion.p>
                </header>

                {/* FAQ Content */}
                <main className="max-w-3xl mx-auto px-6">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </div>

                    {/* Bottom Contact CTA */}
                    <div className="mt-20 p-10 bg-slate-900 rounded-[2.5rem] text-center text-white relative overflow-hidden group shadow-2xl shadow-blue-900/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full transition-all group-hover:scale-150"></div>
                        <h3 className="text-2xl font-black mb-4 relative z-10">Still have questions?</h3>
                        <p className="text-slate-400 mb-8 relative z-10 max-w-md mx-auto">We're here to help you elevate your worship experience. Get in touch with our team.</p>
                        <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-500 transition-all active:scale-95 shadow-xl shadow-blue-600/20 relative z-10">
                            Contact Support
                        </Link>
                    </div>

                    <div className="text-center mt-20 text-slate-400 font-medium pb-10">
                        <p className="flex items-center justify-center gap-2">
                            <Shield size={14} />
                            Your privacy is our priority. Read our <Link to="/privacy-policy" className="text-blue-600 underline">Privacy Policy</Link>.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default FAQ;
