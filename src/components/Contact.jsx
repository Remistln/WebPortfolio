import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact({ profile }) {
    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Me Contacter</h2>
                <div className="w-20 h-1 bg-bio-accent md:mx-0 mx-auto rounded-full" />
            </motion.div>

            <div className="flex flex-col gap-12">
                {/* Contact Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                    <div className="bg-bio-dark border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/10 transition-colors group relative z-20">
                        <div className="p-3 bg-bio-accent/10 rounded-full text-bio-accent mb-3 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6" />
                        </div>
                        <p className="text-xs text-gray-400 mb-1">Email</p>
                        <a href={`mailto:${profile.basics.email}`} className="text-sm font-medium text-white hover:text-bio-accent break-all">
                            {profile.basics.email}
                        </a>
                    </div>

                    <div className="bg-bio-dark border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/10 transition-colors group relative z-20">
                        <div className="p-3 bg-data-accent/10 rounded-full text-data-accent mb-3 group-hover:scale-110 transition-transform">
                            <Phone className="w-6 h-6" />
                        </div>
                        <p className="text-xs text-gray-400 mb-1">Téléphone</p>
                        <p className="text-sm font-medium text-white">
                            {profile.basics.phone}
                        </p>
                    </div>

                    <div className="bg-bio-dark border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/10 transition-colors group relative z-20">
                        <div className="p-3 bg-bio-accent/10 rounded-full text-bio-accent mb-3 group-hover:scale-110 transition-transform">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <p className="text-xs text-gray-400 mb-1">Localisation</p>
                        <p className="text-sm font-medium text-white">
                            {profile.basics.location.city}, {profile.basics.location.country}
                        </p>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 bg-bio-dark border border-white/10 rounded-2xl p-6 md:p-8 relative z-20"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Nom</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-bio-accent focus:ring-1 focus:ring-bio-accent transition-all placeholder:text-gray-600"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-bio-accent focus:ring-1 focus:ring-bio-accent transition-all placeholder:text-gray-600"
                                placeholder="votre@email.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-bio-accent focus:ring-1 focus:ring-bio-accent transition-all placeholder:text-gray-600 resize-none"
                            placeholder="Votre message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-data-accent hover:bg-data-accent/90 text-white font-bold rounded-xl shadow-lg shadow-data-accent/20 hover:shadow-data-accent/40 transition-all transform hover:-translate-y-0.5"
                    >
                        Envoyer le message
                    </button>
                </motion.form>
            </div>
        </div>
    );
}
