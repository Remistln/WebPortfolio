import React from 'react';
import { motion } from 'framer-motion';

export default function Skills({ skills }) {
    return (
        <section id="skills" className="py-24 bg-bio-dark/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences Techniques</h2>
                    <div className="w-20 h-1 bg-bio-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-bio-accent/50 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-bio-accent">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-white/5 text-sm text-gray-300 rounded-full border border-white/5"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
