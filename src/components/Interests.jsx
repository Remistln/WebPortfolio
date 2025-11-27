import React from 'react';
import { motion } from 'framer-motion';
import { Music, Activity, BookOpen, Palette } from 'lucide-react';

const getIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('batterie') || lowerName.includes('piano') || lowerName.includes('musique')) return <Music className="w-6 h-6" />;
    if (lowerName.includes('sport') || lowerName.includes('callisthénie')) return <Activity className="w-6 h-6" />;
    if (lowerName.includes('culture') || lowerName.includes('musée')) return <Palette className="w-6 h-6" />;
    return <BookOpen className="w-6 h-6" />;
};

export default function Interests({ interests }) {
    if (!interests || interests.length === 0) return null;

    return (
        <section id="interests" className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Loisirs & Intérêts</h2>
                    <div className="w-20 h-1 bg-white/20 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {interests.map((interest, idx) => (
                        <motion.div
                            key={interest.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-bio-accent to-data-accent rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                                {getIcon(interest.name)}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{interest.name}</h3>
                            <p className="text-sm text-gray-400">{interest.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
