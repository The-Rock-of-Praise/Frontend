import { ArrowLeft, Shield, Clock, Music4, Users, Info, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const Section = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
        <div className="mb-12 relative group">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            </div>
            <div className="pl-4 md:pl-16 border-l-2 border-slate-100 group-hover:border-blue-200 transition-colors">
                {children}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#f6f6f8] font-['Poppins'] antialiased text-slate-700 pb-20">
            {/* Background Decorations */}
            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-400/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>

            <div className="relative z-10">
                {/* Header/Navigation */}
                <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white px-6 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-blue-600 ring-offset-2">
                                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-bold text-slate-900">The Rock of Praise</span>
                        </Link>
                        <Link 
                            to="/" 
                            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-900/10"
                        >
                            <ArrowLeft size={16} />
                            Back to Home
                        </Link>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="pt-20 pb-16 px-6 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-blue-600/10 px-4 py-2 rounded-full mb-6">
                        <Shield size={16} className="text-blue-600" />
                        <span className="text-xs font-black uppercase tracking-wider text-blue-700">Legal & Privacy</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Privacy Policy</h1>
                    <div className="flex items-center justify-center gap-2 text-slate-500 font-medium">
                        <Clock size={16} />
                        <span>Effective Date: August 2025</span>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-4xl mx-auto px-6">
                    <div className="bg-white/60 backdrop-blur-md border border-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-blue-900/5">
                        
                        {/* Quote Box */}
                        <div className="bg-blue-600/5 border-l-4 border-blue-600 p-8 rounded-2xl mb-12">
                            <p className="text-xl italic font-medium text-slate-800 leading-relaxed">
                                “Sing to the LORD a new song; sing to the LORD, all the earth.” – Psalm 96:1
                            </p>
                        </div>

                        <p className="text-lg leading-relaxed mb-16 text-slate-600">
                            <strong>The Rock of Praise</strong> (“we,” “our,” or “us”) exists to glorify God by helping believers worship through lyrics in English, Sinhala, and Tamil. We respect your privacy, your trust, and the sacred nature of the songs we share. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application and website (therockofpraise.org).
                        </p>

                        <Section icon={Music4} title="1. Song Ownership and Integrity">
                            <ul className="space-y-4 list-disc pl-4 text-slate-600">
                                <li>All songs in The Rock of Praise remain the property of their rightful owners and songwriters.</li>
                                <li>We do not claim ownership of any lyrics and have not changed, distorted, or edited them in any way.</li>
                                <li>Songs are presented exactly as they were originally written, preserving their meaning and worship intent.</li>
                            </ul>
                        </Section>

                        <Section icon={Users} title="2. Who Can Use This App">
                            <p className="leading-relaxed text-slate-600">
                                The Rock of Praise is open to everyone — from young children learning their first worship song to the elderly who have sung His praises for decades. There is no age restriction.
                            </p>
                        </Section>

                        <Section icon={Info} title="3. Information We Collect">
                            <p className="mb-6 text-slate-600 font-medium">We only collect what is necessary to provide and improve our services:</p>
                            <ul className="space-y-4 text-slate-600">
                                <li className="flex gap-3">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-blue-600 mt-2.5"></div>
                                    <p><strong>Account Information:</strong> Name, email address, and payment details when you subscribe to the Pro version.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-blue-600 mt-2.5"></div>
                                    <p><strong>App Usage Data:</strong> Anonymous statistics such as app performance, feature use, and crash reports.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="min-w-[6px] h-[6px] rounded-full bg-blue-600 mt-2.5"></div>
                                    <p><strong>Preferences:</strong> Your language settings, saved “My Set List,” worship notes, and other personal worship planning items.</p>
                                </li>
                            </ul>
                            <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 italic text-amber-800">
                                We do not collect sensitive personal information such as religious beliefs, political opinions, or biometric data.
                            </div>
                        </Section>

                        <Section icon={Shield} title="4. How We Use Your Information">
                            <p className="mb-6 text-slate-600 font-medium">Your data is used only to:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['Provide and maintain app functionality', 'Enable Pro features', 'Improve app performance', 'Respond to support requests', 'Send service updates (opt-in)'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                            <span className="text-[10px] font-bold">✓</span>
                                        </div>
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 font-bold text-slate-900 border-b-2 border-blue-600/20 inline-block pb-1">We will never sell or misuse your information.</p>
                        </Section>

                        <Section icon={Music4} title="5. Pro Version Features">
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {['Offline Access', 'Full App Access', 'My Set List', 'Lyric Preparation', 'Ad-Free', 'Worship Notes'].map((feature, i) => (
                                    <li key={i} className="text-sm bg-white border border-slate-200 p-3 text-center rounded-xl shadow-sm font-semibold">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section icon={HelpCircle} title="6. Availability & Payment Processing">
                            <p className="leading-relaxed text-slate-600 mb-6">
                                The Rock of Praise is available download via Google Play Store, Apple App Store, and Huawei AppGallery.
                            </p>
                            <p className="leading-relaxed text-slate-600">
                                Payments for the Pro version are processed securely through <strong>PayHere</strong> (our official payment gateway). PayHere complies with industry-standard payment security and encryption. We do not store your credit card, debit card, or bank details — all transactions are handled directly through PayHere.
                            </p>
                        </Section>

                        <Section icon={Info} title="7. Third-Party Services">
                            <p className="leading-relaxed text-slate-600">
                                We may use trusted third-party services for analytics, hosting, and crash reporting. Examples include <strong>Google Firebase</strong> (analytics & crash reports) and website hosting providers. These services may collect certain non-personal information to function properly and have their own privacy policies.
                            </p>
                        </Section>

                        <Section icon={Clock} title="8. Data Retention">
                            <p className="leading-relaxed text-slate-600">
                                We retain your data only as long as necessary to provide our services or comply with legal requirements. You may request deletion of your data at any time by contacting us.
                            </p>
                        </Section>

                        <Section icon={Users} title="9. International Users">
                            <p className="leading-relaxed text-slate-600">
                                If you access The Rock of Praise from outside Sri Lanka, please note that your information may be processed in other countries where privacy laws may differ.
                            </p>
                        </Section>

                        <Section icon={Users} title="10. Children’s Privacy">
                            <p className="leading-relaxed text-slate-600">
                                This app is safe for all ages. Children may use the app with guidance from a parent or guardian. We do not knowingly collect personal information from children without parental consent.
                            </p>
                        </Section>

                        <Section icon={Shield} title="11. Security of Your Data">
                            <p className="leading-relaxed text-slate-600">
                                We take reasonable technical and organizational measures to safeguard your information. However, no method of storage or transmission over the Internet is 100% secure.
                            </p>
                        </Section>

                        <Section icon={Clock} title="12. Changes to This Policy">
                            <p className="leading-relaxed text-slate-600">
                                We may update this Privacy Policy from time to time. The updated version will be posted in the app and on our website, with the new effective date.
                            </p>
                        </Section>

                        <Section icon={HelpCircle} title="13. Contact Us">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">📧</div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Email Support</p>
                                        <p className="font-bold text-slate-900">support@therockofpraise.org</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">🌐</div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Website</p>
                                        <p className="font-bold text-slate-900">https://therockofpraise.org</p>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <div className="text-center mt-20 pt-12 border-t border-slate-100">
                            <p className="text-2xl font-black text-slate-900 mb-2">“Let everything that has breath praise the LORD.”</p>
                            <p className="text-blue-600 font-black tracking-widest uppercase text-sm">– Psalm 150:6</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
