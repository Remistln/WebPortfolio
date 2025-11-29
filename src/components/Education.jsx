import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education({ education, t }) {
    if (!education || education.length === 0) return null;

    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.education.title}</h2>
                <div className="w-20 h-1 bg-bio-accent md:mx-0 mx-auto rounded-full" />
            </motion.div>

            <div className="grid gap-8">
                {education.map((edu, idx) => (
                    <motion.div
                        key={`${edu.institution}-${edu.startDate}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-bio-dark border border-white/10 rounded-xl p-6 hover:border-bio-accent/50 transition-colors relative z-20"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{edu.area}</h3>
                                <div className="flex items-center gap-2 text-bio-accent font-medium">
                                    <GraduationCap className="w-4 h-4" />
                                    {edu.institution}
                                </div>
                            </div>
                            <div className="text-right md:text-right">
                                <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-sm font-medium text-white">
                                    {edu.studyType}
                                </span>
                                <div className="text-sm text-gray-400 mt-1 whitespace-nowrap">
                                    {edu.startDate} – {edu.endDate}
                                </div>
                            </div>
                        </div>

                        {edu.description && (
                            <p className="text-gray-400 text-sm mb-4 border-l-2 border-white/10 pl-4">
                                {edu.description}
                            </p>
                        )}

                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <MapPin className="w-3 h-3" />
                            {edu.location}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
