import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Dna } from 'lucide-react';

export default function Hero({ profile, t }) {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bio-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-data-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 p-3 bg-bio-dark rounded-full border border-white/10 inline-flex items-center gap-2 relative z-20"
                >
                    <Dna className="w-5 h-5 text-bio-accent" />
                    <span className="text-sm text-gray-300">Bioinformatics & Data Science</span>
                    <Database className="w-5 h-5 text-data-accent" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6"
                >
                    {/* Internal style to bypass Tailwind JIT issues */}
                    <style>{`
                        .custom-initial-img {
                            height: 40px;
                        }
                        @media (min-width: 768px) {
                            .custom-initial-img {
                                height: 82px;
                            }
                        }
                    `}</style>
                    <h1 className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                        <span className="flex items-baseline">
                            <img src="/r_thick.png" alt="R" className="custom-initial-img w-auto object-contain" />
                            <span className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">émi</span>
                        </span>
                        <span className="flex items-baseline">
                            <img src="/s.png" alt="S" className="custom-initial-img w-auto object-contain" />
                            <span className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">taelen</span>
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10"
                >
                    {profile.basics.label}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-gray-500 max-w-3xl mb-12 leading-relaxed"
                >
                    {profile.basics.summary}
                </motion.p>

                {profile.objective && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="mb-10 bg-bio-dark border border-white/10 rounded-xl p-6 max-w-2xl w-full relative z-20"
                    >
                        <h3 className="text-lg font-semibold text-white mb-2">{profile.objective.title}</h3>
                        <p className="text-data-accent font-medium mb-1">{profile.objective.role}</p>
                        <div className="text-sm text-gray-400 flex flex-col sm:flex-row gap-4 justify-center">
                            <span>{profile.objective.duration}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{profile.objective.availability}</span>
                        </div>
                        {profile.objective.note && (
                            <p className="text-xs text-gray-500 mt-2 italic">{profile.objective.note}</p>
                        )}
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#projects"
                        className="w-full sm:w-64 px-8 py-3 bg-bio-accent hover:bg-bio-accent/90 text-bio-dark font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                        {t.hero.projects}
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-3 bg-bio-dark/80 backdrop-blur-md hover:bg-white/10 text-white font-semibold rounded-lg border border-white/10 transition-all text-center"
                    >
                        {t.hero.contact}
                    </a>
                    <a
                        href={`/${t.hero.cvFile}`}
                        download={t.hero.cvFile}
                        className="w-full sm:w-64 px-8 py-3 bg-bio-dark/80 backdrop-blur-md hover:bg-white/10 text-white font-semibold rounded-lg border border-white/10 transition-all flex items-center justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        {t.hero.download}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
