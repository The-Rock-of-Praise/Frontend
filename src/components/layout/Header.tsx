import { useState, useEffect } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowRight, Download, Sparkles } from 'lucide-react';
import logo from '../../assets/logo.jpg';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#');
    const location = useLocation();

    // Scroll progress bar logic
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['about', 'features', 'proVersion', 'vision', 'downloads', 'contact'];

            if (window.scrollY < 100) {
                setActiveSection('#');
                return;
            }

            sections.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(`#${id}`);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (location.pathname !== '/') {
            setIsOpen(false);
            return;
        }

        e.preventDefault();
        const targetId = href.replace('#', '');

        if (targetId === '' || href === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('#');
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                setActiveSection(href);
            }
        }
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Features', href: '#features' },
        { name: 'Pro Version', href: '#proVersion' },
        { name: 'Vision', href: '#vision' },
        { name: 'Downloads', href: '#downloads' },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
        >
            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0048ad] to-blue-400 origin-left z-[110]"
                style={{ scaleX }}
            />

            <div className="w-full flex justify-center py-6">
                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                    className={`
                        pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                        w-[98%] max-w-7xl px-8 lg:px-12 py-3 rounded-[2rem]
                        ${scrolled
                            ? 'bg-white/60 dark:bg-slate-900/50 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.4)]'
                            : 'bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
                        }
                    `}
                >
                    {/* Logo Section */}
                    <Link
                        to="/"
                        onClick={(e) => handleScrollTo(e as any, '#')}
                        className="relative z-10"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3.5 group cursor-pointer"
                        >
                            <div className="relative w-11 h-11 lg:w-12 lg:h-12 flex items-center justify-center overflow-hidden rounded-xl shadow-md transition-shadow group-hover:shadow-xl group-hover:shadow-blue-500/10">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-[#0d121b] dark:text-white text-lg lg:text-xl font-black leading-tight tracking-tight flex items-center gap-1.5">
                                    The Rock
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                                </h2>
                                <span className="text-[#0048ad] text-[9px] lg:text-[10px] font-extrabold uppercase tracking-[0.3em] opacity-70">
                                    of Praise
                                </span>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center bg-black/5 dark:bg-white/5 rounded-full p-1 border border-black/[0.03] dark:border-white/[0.03]">
                        {navLinks.map((item) => {
                            const isActive = activeSection === item.href;
                            return (
                                <motion.a
                                    key={item.name}
                                    href={location.pathname === '/' ? item.href : `/${item.href}`}
                                    onClick={(e) => handleScrollTo(e, item.href)}
                                    className={`
                                        relative px-6 py-2.5 text-[12px] font-bold uppercase tracking-widest transition-all z-10 whitespace-nowrap
                                        ${isActive
                                            ? 'text-[#0048ad]'
                                            : 'text-[#0d121b]/60 dark:text-gray-400 hover:text-[#0048ad]'
                                        }
                                    `}
                                    whileHover={{ y: -1 }}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white dark:bg-slate-800 rounded-full z-0 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-black/5 dark:border-white/5"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </motion.a>
                            );
                        })}
                    </nav>

                    {/* Right Action Area */}
                    <div className="flex items-center gap-3 relative z-10">
                        <motion.a
                            href={location.pathname === '/' ? "#contact" : "/#contact"}
                            onClick={(e) => handleScrollTo(e, "#contact")}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[11px] uppercase tracking-widest text-[#0048ad] bg-[#0048ad]/5 hover:bg-[#0048ad]/10 border border-[#0048ad]/10 transition-all"
                        >
                            Contact
                        </motion.a>

                        <motion.button
                            onClick={(e) => handleScrollTo(e as any, '#downloads')}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-2.5 bg-gradient-to-br from-[#0048ad] to-[#0066ff] text-white px-8 py-3.5 rounded-full font-black text-[11px] uppercase tracking-[0.25em] shadow-[0_10px_20px_rgba(0,72,173,0.3)] hover:shadow-[0_15px_30px_rgba(0,72,173,0.4)] transition-all group overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                            <span>Download</span>
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 transition-all hover:scale-105 active:scale-95 border border-black/5 dark:border-white/5 shadow-sm"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <AnimatePresence mode='wait'>
                                {isOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                        <X className="w-5 h-5 text-[#0d121b] dark:text-white" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                        <Menu className="w-5 h-5 text-[#0d121b] dark:text-white" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute top-24 left-0 right-0 mx-4 overflow-hidden pointer-events-auto"
                    >
                        <div className="bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[3rem] p-8 border border-white/40 dark:border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(255,255,255,0.4)]">
                            <nav className="flex flex-col gap-3">
                                {navLinks.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        href={location.pathname === '/' ? item.href : `/${item.href}`}
                                        onClick={(e) => handleScrollTo(e, item.href)}
                                        className={`flex items-center justify-between group px-7 py-4.5 rounded-[1.5rem] transition-all duration-300 ${activeSection === item.href
                                            ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20'
                                            : 'hover:bg-black/5 dark:hover:bg-white/5 text-[#0d121b] dark:text-white border border-transparent hover:border-black/5 dark:hover:border-white/5'
                                            }`}
                                    >
                                        <div className="flex flex-col">
                                            <span className="text-lg font-black tracking-tight">{item.name}</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Explore {item.name}</span>
                                        </div>
                                        <div className={`p-2 rounded-full transition-all duration-300 ${activeSection === item.href ? 'bg-white/20' : 'bg-black/5 dark:bg-white/5'}`}>
                                            <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${activeSection === item.href ? 'opacity-100' : 'opacity-40'}`} />
                                        </div>
                                    </motion.a>
                                ))}
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.35 }}
                                    href={location.pathname === '/' ? "#contact" : "/#contact"}
                                    onClick={(e) => handleScrollTo(e, "#contact")}
                                    className="mt-4 flex items-center justify-center gap-2 text-[#0048ad] font-bold p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30"
                                >
                                    Contact Us
                                </motion.a>

                                <motion.button
                                    onClick={(e) => handleScrollTo(e as any, '#downloads')}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-2 bg-gradient-to-br from-[#0048ad] to-[#0066ff] text-white p-6 rounded-[2rem] font-black text-lg w-full shadow-[0_20px_40px_rgba(0,72,173,0.3)] flex items-center justify-center gap-4 active:scale-[0.98] transition-all group"
                                >
                                    <div className="bg-white/20 p-2 rounded-xl">
                                        <Download className="w-6 h-6 group-hover:bounce" />
                                    </div>
                                    <span>Get The App</span>
                                </motion.button>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;