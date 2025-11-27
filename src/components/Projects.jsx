import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects({ projects }) {
    if (!projects || projects.length === 0) return null;

    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets Récents</h2>
                    <div className="w-20 h-1 bg-data-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-data-accent/50 transition-all duration-300"
                        >
                            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                                {/* Placeholder for project image if not available */}
                                <div className="absolute inset-0 bg-bio-accent/5 group-hover:bg-bio-accent/10 transition-colors" />
                                <span className="text-4xl font-bold text-white/10 select-none">{project.title[0]}</span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-data-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 bg-bio-accent/10 text-bio-accent rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-white hover:text-data-accent transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>
                                    {/* Add demo link if needed */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
