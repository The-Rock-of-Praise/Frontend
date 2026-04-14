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
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
        >
            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-[#0048ad] origin-left z-[110]"
                style={{ scaleX }}
            />

            <div className="w-full flex justify-center py-2 lg:py-4">
                <motion.div
                    layout
                    className={`
                        pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                        ${scrolled
                            ? 'w-[92%] max-w-6xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] px-6 lg:px-10 py-2'
                            : 'w-full max-w-7xl bg-transparent px-8 lg:px-20 py-1'
                        }
                    `}
                >
                    {/* Logo Section */}
                    <Link
                        to="/"
                        onClick={(e) => handleScrollTo(e as any, '#')}
                        className="flex items-center gap-3 group relative z-10 whitespace-nowrap"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                        >
                            <img src={logo} alt="Logo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </motion.div>
                        <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                            <h2 className="text-[#0d121b] dark:text-white text-lg lg:text-xl font-black leading-none tracking-tight">
                                The Rock
                            </h2>
                            <span className="text-[#0048ad] text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em]">of Praise</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((item) => (
                            <motion.a
                                key={item.name}
                                href={location.pathname === '/' ? item.href : `/${item.href}`}
                                onClick={(e) => handleScrollTo(e, item.href)}
                                className={`
                                    relative px-4 py-2 text-[13px] font-bold uppercase tracking-widest transition-colors z-10 whitespace-nowrap
                                    ${activeSection === item.href
                                        ? 'text-[#0048ad]'
                                        : 'text-[#0d121b]/70 dark:text-gray-300 hover:text-[#0048ad]'
                                    }
                                `}
                                whileHover={{ y: -1 }}
                                whileTap={{ y: 0 }}
                            >
                                {item.name}
                                {activeSection === item.href && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-blue-50/80 dark:bg-blue-900/30 rounded-full -z-10 border border-blue-100/50 dark:border-blue-800/30 shadow-sm"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Right Action Area */}
                    <div className="flex items-center gap-4 relative z-10">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:flex items-center gap-2 bg-[#0048ad] text-white px-7 py-3 rounded-full font-bold text-[12px] uppercase tracking-[0.15em] shadow-xl shadow-blue-900/10 hover:shadow-blue-900/30 transition-all group"
                        >
                            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            <span>Download</span>
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 transition-colors hover:bg-black/10 dark:hover:bg-white/10 group"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <AnimatePresence mode='wait'>
                                {isOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                        <X className="w-6 h-6 text-[#0d121b] dark:text-white" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                        <Menu className="w-6 h-6 text-[#0d121b] dark:text-white" />
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
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute top-24 left-0 right-0 mx-4 overflow-hidden pointer-events-auto"
                    >
                        <div className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-3xl rounded-[2.5rem] p-8 border border-white/20 dark:border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]">
                            <nav className="flex flex-col gap-2">
                                {navLinks.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        href={location.pathname === '/' ? item.href : `/${item.href}`}
                                        onClick={(e) => handleScrollTo(e, item.href)}
                                        className={`flex items-center justify-between group px-6 py-4 rounded-2xl transition-all ${activeSection === item.href
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                                : 'hover:bg-black/5 dark:hover:bg-white/5 text-[#0d121b] dark:text-white'
                                            }`}
                                    >
                                        <span className="text-lg font-bold tracking-tight">{item.name}</span>
                                        <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${activeSection === item.href ? 'opacity-100' : 'opacity-30'}`} />
                                    </motion.a>
                                ))}
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-6 bg-[#0048ad] text-white p-5 rounded-2xl font-bold text-lg w-full shadow-2xl shadow-blue-900/30 flex items-center justify-center gap-3 active:scale-95 transition-transform"
                                >
                                    <Download className="w-5 h-5" />
                                    Get App Now
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