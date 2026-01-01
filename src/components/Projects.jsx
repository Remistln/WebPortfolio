import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronRight, Layers, Cpu, Database, Image as ImageIcon, Microscope } from 'lucide-react';

export default function Projects({ projects, t }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="w-full relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
                <div className="w-20 h-1 bg-data-accent md:mx-0 mx-auto rounded-full" />
            </motion.div>

            {(!projects || projects.length === 0) ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center py-12 bg-bio-dark border border-white/10 rounded-xl"
                >
                    <p className="text-xl text-gray-300">
                        {t.projects.fallback}{' '}
                        <a
                            href="https://github.com/Remistln/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-bio-accent hover:underline font-bold"
                        >
                            {t.projects.github}
                        </a>
                    </p>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            layoutId={`project-card-${project.title}`}
                            onClick={() => setSelectedProject(project)}
                            className="group bg-bio-dark border border-white/10 rounded-xl overflow-hidden hover:border-data-accent/50 transition-all duration-300 relative z-20 cursor-pointer h-full flex flex-col"
                        >
                            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                                {project.image ? (
                                    <>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-bio-accent/5 group-hover:bg-bio-accent/10 transition-colors" />
                                        <span className="text-4xl font-bold text-white/10 select-none">{project.title[0]}</span>
                                    </>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-data-accent transition-colors">
                                    {project.title}
                                </h3>
                                {project.subtitle && (
                                    <p className="text-sm text-gray-400 mb-2 italic">
                                        {project.subtitle}
                                    </p>
                                )}
                                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 bg-bio-accent/10 text-bio-accent rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 4 && (
                                        <span className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded">
                                            +{project.tags.length - 4}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-sm text-data-accent font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more <ChevronRight className="w-4 h-4" />
                                    </span>
                                    {project.url && (
                                        <div className="flex gap-4">
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-2 text-sm text-white hover:text-data-accent transition-colors z-30"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span className="hidden sm:inline">{t.projects.code}</span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {createPortal(
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="bg-bio-dark border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl pointer-events-auto"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-white/10 rounded-full transition-colors z-50"
                                    style={{ zIndex: 100 }}
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>

                                <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden shrink-0">
                                    <span className="text-8xl font-bold text-white/5 select-none">{selectedProject.title[0]}</span>
                                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-bio-dark to-transparent">
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                                        {selectedProject.subtitle && (
                                            <p className="text-xl text-data-accent">{selectedProject.subtitle}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="p-8 space-y-8">
                                    {/* Description Longue */}
                                    {selectedProject.longDescription && (
                                        <div className="prose prose-invert max-w-none">
                                            <p className="text-lg text-gray-300 leading-relaxed">
                                                {selectedProject.longDescription}
                                            </p>
                                        </div>
                                    )}

                                    {/* Gallery */}
                                    {selectedProject.gallery && (
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                                <ImageIcon className="w-5 h-5 text-data-accent" />
                                                {t.projects.gallery}
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {selectedProject.gallery.map((item, idx) => (
                                                    <div key={idx} className="space-y-2">
                                                        <div className="rounded-xl overflow-hidden border border-white/10 relative group bg-black/20">
                                                            <img
                                                                src={item.src}
                                                                alt={item.caption}
                                                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                                                                onClick={() => setSelectedImage(item.src)}
                                                            />
                                                        </div>
                                                        <p className="text-sm text-gray-400 italic text-center">{item.caption}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Live Embed (PowerBI, etc.) */}
                                    {selectedProject.embedUrl && (
                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                                <ExternalLink className="w-5 h-5 text-data-accent" />
                                                Live Demo
                                            </h3>
                                            <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-black/50">
                                                <iframe
                                                    title={selectedProject.title}
                                                    src={selectedProject.embedUrl}
                                                    className="w-full h-full"
                                                    frameBorder="0"
                                                    allowFullScreen="true"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Steps / Processus */}
                                    {selectedProject.steps && (
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                                <Layers className="w-5 h-5 text-data-accent" />
                                                Processus Technique
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {selectedProject.steps.map((step, idx) => (
                                                    <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/5">
                                                        <h4 className="font-bold text-bio-accent mb-2">{step.title}</h4>
                                                        <p className="text-sm text-gray-400">{step.content}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    {selectedProject.stack && (
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                                <Cpu className="w-5 h-5 text-data-accent" />
                                                Stack Technique
                                            </h3>
                                            <div className="flex flex-wrap gap-3">
                                                {Object.entries(selectedProject.stack).map(([key, value]) => (
                                                    <div key={key} className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 text-sm">
                                                        <span className="text-gray-400 block text-xs mb-1 uppercase tracking-wider">{key}</span>
                                                        <span className="text-white font-medium">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Challenges & Analysis */}
                                    {selectedProject.challenges && (
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                                <Microscope className="w-5 h-5 text-data-accent" />
                                                Challenges & Analyses
                                            </h3>
                                            <div className="grid grid-cols-1 gap-4">
                                                {selectedProject.challenges.map((challenge, idx) => (
                                                    <div key={idx} className="bg-white/5 p-5 rounded-xl border border-white/5 border-l-4 border-l-red-400/50">
                                                        <h4 className="font-bold text-red-300 mb-2">{challenge.title}</h4>
                                                        <p className="text-sm text-gray-300">{challenge.content}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex justify-end pt-4 border-t border-white/10">
                                        {selectedProject.url && (
                                            <a
                                                href={selectedProject.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-white text-bio-dark font-bold rounded-lg hover:bg-data-accent transition-colors flex items-center gap-2"
                                            >
                                                <Github className="w-5 h-5" />
                                                {t.projects.code}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}

            {/* Lightbox / Fullscreen Image */}
            {createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <div
                            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                src={selectedImage}
                                alt="Fullscreen view"
                                className="max-w-full max-h-[95vh] object-contain rounded-lg shadow-2xl cursor-zoom-out"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
}
