import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact({ profile }) {
    return (
        <section id="contact" className="py-24 bg-bio-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Me Contacter</h2>
                    <div className="w-20 h-1 bg-bio-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Informations</h3>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-bio-accent">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Email</p>
                                <a href={`mailto:${profile.basics.email}`} className="text-lg hover:text-bio-accent transition-colors">
                                    {profile.basics.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-data-accent">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Téléphone</p>
                                <p className="text-lg">{profile.basics.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-bio-accent">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Localisation</p>
                                <p className="text-lg">{profile.basics.location.city}, {profile.basics.location.country}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nom</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-bio-accent focus:ring-1 focus:ring-bio-accent transition-colors"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-bio-accent focus:ring-1 focus:ring-bio-accent transition-colors"
                                placeholder="votre@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-bio-accent focus:ring-1 focus:ring-bio-accent transition-colors"
                                placeholder="Votre message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-bio-accent hover:bg-bio-accent/90 text-bio-dark font-semibold rounded-lg transition-all"
                        >
                            Envoyer
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
