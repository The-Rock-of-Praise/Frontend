import { useState, useEffect } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Updated sections to match App.tsx IDs exactly
            const sections = ['about', 'features', 'proVersion', 'vision', 'downloads', 'contact'];

            if (window.scrollY < 100) {
                setActiveSection('#');
                return;
            }

            sections.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Detecting section in view with a better offset for high-end feel
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
        // If not on the homepage, the link should just be a regular anchor link
        // but since we are using LandingPage component, we should check path.
        if (location.pathname !== '/') return;

        e.preventDefault();
        const targetId = href.replace('#', '');

        if (targetId === '' || href === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('#');
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                const headerOffset = 85;
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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
                scrolled 
                ? 'py-3 bg-white/70 backdrop-blur-2xl border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]' 
                : 'py-5 bg-transparent border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full ring-2 ring-[#0048ad] ring-offset-2 transition-transform duration-500 group-hover:scale-110">
                        <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <h2 className="text-[#0d121b] dark:text-white text-xl font-black leading-tight tracking-tighter">
                        The Rock <span className="text-[#0048ad]">of Praise</span>
                    </h2>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex flex-1 justify-center items-center">
                    <nav className="flex items-center gap-8 h-full">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={location.pathname === '/' ? item.href : `/${item.href}`}
                                onClick={(e) => handleScrollTo(e, item.href)}
                                className={`text-[13px] font-black uppercase tracking-widest transition-all duration-300 relative py-2 group ${activeSection === item.href
                                    ? 'text-[#0048ad]'
                                    : 'text-[#0d121b] dark:text-gray-200 hover:text-[#0048ad]'
                                    }`}
                            >
                                {item.name}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-[#0048ad] transition-all duration-500 ${activeSection === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Right side buttons */}
                <div className="flex gap-4 items-center">
                    <button className="hidden md:flex bg-slate-900 text-white px-6 py-2.5 rounded-xl font-black text-[12px] uppercase tracking-wider shadow-lg hover:bg-[#0048ad] hover:shadow-[#0048ad]/20 transition-all active:scale-95">
                        Get App Now
                    </button>

                    {/* Hamburger */}
                    <button
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-2xl border-b border-white/20 transition-all duration-500 overflow-hidden ${
                    isOpen ? 'max-h-[600px] shadow-2xl py-8' : 'max-h-0'
                }`}
            >
                <nav className="flex flex-col px-10 gap-6">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={location.pathname === '/' ? item.href : `/${item.href}`}
                            onClick={(e) => handleScrollTo(e, item.href)}
                            className={`text-xl font-black tracking-tight transition-colors ${activeSection === item.href
                                ? 'text-[#0048ad]'
                                : 'text-[#0d121b] dark:text-white'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button className="mt-4 bg-[#0048ad] text-white px-8 py-4 rounded-2xl font-black text-lg w-full shadow-xl shadow-blue-900/20 active:scale-95">
                        Download App
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;