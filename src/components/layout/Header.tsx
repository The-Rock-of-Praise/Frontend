import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('#');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['about', 'features', 'songs', 'vision', 'reviews', 'contact'];

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
        { name: 'New Release', href: '#newReleases' },
        { name: 'Vision', href: '#vision' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ebf3] dark:border-b-gray-800 px-6 lg:px-20 bg-white dark:bg-gray-900 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md py-3' : 'py-4'
                }`}
        >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full ring-2 ring-[#0048ad] ring-offset-2">
                    <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <h2 className="text-[#0d121b] dark:text-white text-xl font-extrabold leading-tight tracking-tight">
                    The Rock of Praise
                </h2>
            </Link>

            {/* Desktop Nav + Button */}
            <div className="flex flex-1 justify-center gap-8 items-center">
                <nav className="hidden lg:flex items-center gap-8 h-full">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleScrollTo(e, item.href)}
                            className={`text-sm font-bold transition-all duration-300 relative py-2 group ${activeSection === item.href
                                ? 'text-[#0048ad]'
                                : 'text-[#0d121b] dark:text-gray-200 hover:text-[#0048ad]'
                                }`}
                        >
                            {item.name}
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-[#0048ad] transition-all duration-300 ${activeSection === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                            />
                        </a>
                    ))}
                </nav>
            </div>

            <div className="flex gap-3 items-center">
                <button className="hidden md:flex bg-gradient-to-r from-[#0048ad] to-[#0096ff] text-white px-5 py-2 rounded-full font-bold text-sm shadow-md hover:shadow-[#0048ad]/30 hover:opacity-90 transition-all active:scale-95">
                    Download App
                </button>

                {/* Hamburger */}
                <button
                    className="lg:hidden text-[#0d121b] dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen shadow-lg' : 'max-h-0'
                    }`}
            >
                <nav className="flex flex-col p-6 gap-4">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleScrollTo(e, item.href)}
                            className={`text-lg font-bold transition-colors ${activeSection === item.href
                                ? 'text-[#0048ad]'
                                : 'text-[#0d121b] dark:text-white'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button className="mt-2 bg-gradient-to-r from-[#0048ad] to-[#0096ff] text-white px-5 py-2 rounded-full font-bold text-sm w-fit">
                        Download App
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;