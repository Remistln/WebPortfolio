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

            <div className="columns-1 md:columns-2 gap-6 space-y-6">
                {skills.map((category, idx) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-bio-dark border border-white/10 rounded-xl p-6 hover:border-bio-accent/50 transition-colors relative z-20 break-inside-avoid"
                    >
                        <h3 className="text-xl font-semibold mb-6 text-bio-accent">{category.category}</h3>
                        {category.subgroups ? (
                            <div className="space-y-6">
                                {category.subgroups.map((subgroup) => (
                                    <div key={subgroup.name}>
                                        <h4 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider border-b border-white/5 pb-1">
                                            {subgroup.name}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {subgroup.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-3 py-1 bg-white/5 text-sm text-gray-300 rounded-full border border-white/5 text-center"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
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
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
