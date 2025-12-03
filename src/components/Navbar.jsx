import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Dna, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar({ language, setLanguage, t, profile }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { name: t.nav.home, href: '#hero' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.contact, href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    };

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b",
                scrolled ? "bg-bio-dark/90 backdrop-blur-md border-white/10" : "bg-transparent border-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Dna className="h-8 w-8 text-bio-accent" />
                        <span className="font-bold text-xl tracking-wider text-white">{profile?.basics?.name || "Rémi Staelen"}</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-bio-accent transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center gap-2 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium border border-white/10 hover:bg-white/5 transition-all"
                            >
                                <Globe className="w-4 h-4" />
                                <div className="flex items-center gap-1">
                                    <span className={language === 'fr' ? "text-white font-bold" : "text-gray-500"}>FR</span>
                                    <span className="text-gray-600">|</span>
                                    <span className={language === 'en' ? "text-white font-bold" : "text-gray-500"}>EN</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-gray-300 hover:text-white flex items-center gap-1"
                        >
                            <span className={language === 'fr' ? "text-white font-bold" : "text-gray-500"}>FR</span>
                            <span className="text-gray-600">|</span>
                            <span className={language === 'en' ? "text-white font-bold" : "text-gray-500"}>EN</span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-bio-dark border-b border-white/10"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-bio-accent block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
