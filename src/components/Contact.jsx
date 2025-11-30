import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact({ profile, t }) {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
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
                    <div className="bg-bio-dark border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:border-bio-accent/50 transition-colors group relative z-20">
                        <div className="p-3 bg-bio-accent/10 rounded-full text-bio-accent mb-3 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6" />
                        </div>
                        <p className="text-xs text-gray-400 mb-1">{t.contact.email}</p>
                        <a href={`mailto:${profile.basics.email}`} className="text-sm font-medium text-white hover:text-bio-accent whitespace-nowrap">
                            {profile.basics.email}
                        </a>
                    </div>

                    <div className="bg-bio-dark border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:border-bio-accent/50 transition-colors group relative z-20">
                        <div className="p-3 bg-data-accent/10 rounded-full text-data-accent mb-3 group-hover:scale-110 transition-transform">
                            <Phone className="w-6 h-6" />
                        </div>
                        <p className="text-xs text-gray-400 mb-1">{t.contact.phone}</p>
                        <p className="text-sm font-medium text-white">
                            {profile.basics.phone}
                        </p>
                    </div>

                    <div className="bg-bio-dark border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:border-bio-accent/50 transition-colors group relative z-20">
                        <div className="p-3 bg-bio-accent/10 rounded-full text-bio-accent mb-3 group-hover:scale-110 transition-transform">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <p className="text-xs text-gray-400 mb-1">{t.contact.location}</p>
                        <p className="text-sm font-medium text-white">
                            {profile.basics.location.city}, {profile.basics.location.country}
                        </p>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-bio-dark border border-white/10 rounded-2xl p-6 md:p-8 relative z-20"
                >
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-2">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">{t.contact.form.success}</h3>
                            <p className="text-gray-400 max-w-md">
                                {t.contact.form.successDesc}
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
                            >
                                {t.contact.form.another}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">{t.contact.form.name}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        disabled={status === 'submitting'}
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-bio-accent focus:ring-1 focus:ring-bio-accent transition-all placeholder:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder={t.contact.form.placeholderName}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">{t.contact.form.email}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        disabled={status === 'submitting'}
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-bio-accent focus:ring-1 focus:ring-bio-accent transition-all placeholder:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                        placeholder={t.contact.form.placeholderEmail}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">{t.contact.form.message}</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    required
                                    disabled={status === 'submitting'}
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:border-bio-accent focus:ring-1 focus:ring-bio-accent transition-all placeholder:text-gray-600 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder={t.contact.form.placeholderMessage}
                                />
                            </div>

                            {status === 'error' && (
                                <div className="flex flex-col gap-2 text-red-400 text-sm bg-red-400/10 p-4 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4 shrink-0" />
                                        <span className="font-medium">{t.contact.form.error}</span>
                                    </div>
                                    <p className="text-red-300/80 pl-6">
                                        {t.contact.form.errorDesc}
                                        <br />
                                        <a
                                            href={`mailto:${profile.basics.email}`}
                                            className="underline hover:text-red-200 transition-colors"
                                        >
                                            {t.contact.form.emailFallback}
                                        </a>
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full py-4 bg-data-accent hover:bg-data-accent/90 text-white font-bold rounded-xl shadow-lg shadow-data-accent/20 hover:shadow-data-accent/40 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        {t.contact.form.sending}
                                    </>
                                ) : (
                                    t.contact.form.send
                                )}
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                Powered by Formspree
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
