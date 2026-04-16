import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Send } from 'lucide-react';
import logo from '../../assets/logo.jpg';

const Footer = () => {
    const [isForumOpen, setIsForumOpen] = useState(false);

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
                            <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
                            <FooterLink to="/faq">FAQ</FooterLink>
                        </ul>
                    </div>

                    {/* Connect / Community Forum Section */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Connect</h4>
                        <ul className="flex flex-col gap-4">
                            <FooterLink href="https://jscproduction.com/" external>JS Christian Productions</FooterLink>
                            <FooterLink
                                href="#"
                                onClick={(e) => {
                                    e?.preventDefault();
                                    setIsForumOpen(true);
                                }}
                            >
                                Community Forum
                            </FooterLink>
                            <FooterLink href="#">Newsletter</FooterLink>
                        </ul>
                    </div>
                </div>

                {/* Forum Popup Modal */}
                <AnimatePresence>
                    {isForumOpen && (
                        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsForumOpen(false)}
                                className="fixed inset-0 bg-[#0a1128]/80 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-lg bg-gradient-to-br from-[#1a2333]/90 to-[#0a1128]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 shadow-2xl overflow-hidden"
                            >
                                {/* Decorative elements */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-[80px] rounded-full" />
                                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#1349ec]/20 blur-[80px] rounded-full" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-[#1349ec]/20 rounded-2xl flex items-center justify-center border border-[#1349ec]/30 shadow-inner">
                                                <MessageSquare className="w-7 h-7 text-blue-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white tracking-tight">Community Forum</h3>
                                                <p className="text-blue-100/40 text-sm font-medium uppercase tracking-widest">The Rock of Praise</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setIsForumOpen(false)}
                                            className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/40 hover:text-white"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        <p className="text-blue-100/70 text-base leading-relaxed">
                                            Our community forum is a sacred space for worshippers worldwide. Join today to get early access to new lyrics, music, and exclusive events.
                                        </p>

                                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsForumOpen(false); }}>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-blue-100/40 uppercase tracking-[0.2em] ml-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#1349ec]/50 transition-all duration-300"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-blue-100/40 uppercase tracking-[0.2em] ml-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#1349ec]/50 transition-all duration-300"
                                                    required
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-[#1349ec] to-[#0048ad] text-white font-black py-4.5 rounded-2xl transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_15px_30px_rgba(19,73,236,0.3)] active:scale-95 flex items-center justify-center gap-3 group mt-4"
                                            >
                                                <span>Join Community Discussion</span>
                                                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </button>
                                        </form>

                                        <p className="text-center text-[11px] text-blue-100/20 px-8 leading-relaxed">
                                            By joining, you agree to our Terms of Service and Privacy Policy. We respect your spiritual journey and your inbox.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-blue-100/40 text-sm font-light text-center md:text-left order-2 md:order-1">
                        © {new Date().getFullYear()} The Rock of Praise. All rights reserved. Made with <span className="text-red-500">❤️</span> for the global Christian community.
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-3 order-1 md:order-2">
                        <div className="flex items-center gap-6">
                            <SocialIcon
                                href="https://www.facebook.com/share/1F8qumg3oz/?mibextid=wwXIfr"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            />
                            <SocialIcon
                                href="https://www.instagram.com/rockofpraise?igsh=MWZzNzF4NHdoazEwYg%3D%3D&utm_source=qr"
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.406a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"
                            />
                            <SocialIcon
                                href="https://x.com/praise_the37536?s=21&t=qF7E-l9AG55RTMPLuhoT_A"
                                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                            />
                            <SocialIcon
                                href="https://whatsapp.com/channel/0029Vb6iFkCCMY0Lkvm0Ju0Z"
                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                            />
                            <SocialIcon
                                href="https://youtube.com/@therockofpraise?si=YJT-6zRquDCFPkGH"
                                d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                            />
                        </div>
                        <p className="text-[10px] text-blue-100/30 uppercase tracking-widest font-semibold">
                            Powered by JS Christian Productions
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Helper component for Links with underline animation
const FooterLink = ({ href, to, onClick, children, external }: { href?: string; to?: string; onClick?: (e?: React.MouseEvent) => void; children: React.ReactNode; external?: boolean }) => {
    const className = "text-blue-100/60 hover:text-white transition-colors text-sm relative group w-fit cursor-pointer";
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
                <a
                    href={href}
                    onClick={onClick}
                    className={className}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                >
                    {content}
                </a>
            )}
        </li>
    );
};

// Helper component for Social Icons
const SocialIcon = ({ d, href }: { d: string; href: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/60 hover:text-sky-300 transition-all duration-300 hover:scale-110"
    >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d={d}></path>
        </svg>
    </a>
);

export default Footer;