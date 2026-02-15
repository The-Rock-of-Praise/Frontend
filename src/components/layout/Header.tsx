import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'

const Header: React.FC = () => {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Features', href: '#features' },
        { name: 'New Songs', href: '#songs' },
        { name: 'Vision', href: '#vision' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 font-['Inter']">
            <nav className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-[12px] bg-white/70 border border-white/20 px-8 py-3 rounded-[999px] shadow-lg">

                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#0048ad] rounded-full flex items-center justify-center">
                        <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-full ring-2 ring-[#0048ad] ring-offset-2" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-[#0048ad]">The Rock of Praise</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="hover:text-[#0048ad] transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Action Button - Gradient with custom colors */}
                <button className="bg-gradient-to-r from-[#0048ad] to-[#0096ff] text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hover:shadow-[#0048ad]/30 transition-all active:scale-95">
                    Download App
                </button>
            </nav>
        </header>
    );
};

export default Header;