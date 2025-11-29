import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience({ experience }) {
    if (!experience || experience.length === 0) return null;

    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Expérience Professionnelle</h2>
                <div className="w-20 h-1 bg-data-accent md:mx-0 mx-auto rounded-full" />
            </motion.div>

            <div className="space-y-12">
                {experience.map((job, idx) => (
                    <motion.div
                        key={`${job.company}-${job.startDate}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-8 border-l-2 border-slate-700 bg-bio-dark p-4 rounded-r-xl z-20"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-data-accent" />

                        <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-xl font-bold text-white">{job.position}</h3>
                            <span className="text-sm text-data-accent font-medium bg-data-accent/10 px-3 py-1 rounded-full w-full sm:w-fit text-center whitespace-nowrap">
                                {job.startDate} – {job.endDate}
                            </span>
                        </div>

                        <div className="text-lg text-bio-accent mb-4 font-medium flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            {job.company}
                        </div>

                        <ul className="space-y-2">
                            {job.highlights.map((highlight, i) => (
                                <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
