import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-[#101522] to-[#0a1128] text-white pt-20 pb-10 px-6 lg:px-24 font-['Inter']">

            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(19, 73, 236, 0.15) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}
            ></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#0048ad] rounded-full flex items-center justify-center">
                                <img src={logo} alt="Logo" className="w-full h-full object-cover rounded-full ring-2 ring-[#0048ad] ring-offset-2" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">The Rock of Praise</span>
                        </div>
                        <p className="text-blue-100/70 leading-relaxed text-sm md:text-base">
                            Uniting worshippers across languages and cultures through the power of song.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="#about">About</FooterLink>
                            <FooterLink href="#features">Features</FooterLink>
                            <FooterLink href="#download">Download</FooterLink>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Support</h4>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="#contact">Contact Us</FooterLink>
                            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
                            <FooterLink href="#terms">Terms of Service</FooterLink>
                            <FooterLink to="/faq">FAQ</FooterLink>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Connect</h4>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="#">JS Christian Productions</FooterLink>
                            <FooterLink href="#">Community Forum</FooterLink>
                            <FooterLink href="#">Newsletter</FooterLink>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-blue-100/40 text-sm font-light text-center md:text-left">
                        © {new Date().getFullYear()} PraiseFlow. All rights reserved. Made with <span className="text-red-500">❤️</span> for the global Christian community.
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-3">
                        <div className="flex items-center gap-6">
                            <SocialIcon d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            <SocialIcon d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.406a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                            <SocialIcon d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </div>
                        <p className="text-[10px] text-blue-100/30 uppercase tracking-widest font-semibold">
                            Supported by JS Christian Productions
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Helper component for Links with underline animation
const FooterLink = ({ href, to, children }: { href?: string; to?: string; children: React.ReactNode }) => {
    const className = "text-blue-100/60 hover:text-white transition-colors text-sm relative group w-fit";
    const content = (
        <>
            {children}
            <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#1349ec] transition-all duration-300 group-hover:w-full"></span>
        </>
    );

    return (
        <li>
            {to ? (
                <Link to={to} className={className}>
                    {content}
                </Link>
            ) : (
                <a href={href} className={className}>
                    {content}
                </a>
            )}
        </li>
    );
};

// Helper component for Social Icons
const SocialIcon = ({ d }: { d: string }) => (
    <a href="#" className="text-white/60 hover:text-sky-300 transition-all duration-300 hover:scale-110">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d={d}></path>
        </svg>
    </a>
);

export default Footer;