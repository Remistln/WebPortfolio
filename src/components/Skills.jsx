import React from 'react';
import { motion } from 'framer-motion';

export default function Skills({ skills, t }) {
    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
                <div className="w-20 h-1 bg-bio-accent md:mx-0 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((category, idx) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-bio-dark border border-white/10 rounded-xl p-6 hover:border-bio-accent/50 transition-colors relative z-20"
                    >
                        <h3 className="text-xl font-semibold mb-6 text-bio-accent">{category.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 bg-white/5 text-sm text-gray-300 rounded-full border border-white/5 text-center flex-grow"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
