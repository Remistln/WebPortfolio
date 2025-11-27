import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer({ profile }) {
    return (
        <footer className="bg-bio-dark border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} {profile.basics.name}. All rights reserved.
                </div>

                <div className="flex items-center space-x-6">
                    {profile.basics.profiles.map((p) => (
                        <a
                            key={p.network}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-bio-accent transition-colors"
                        >
                            {p.network === 'GitHub' && <Github className="h-5 w-5" />}
                            {p.network === 'LinkedIn' && <Linkedin className="h-5 w-5" />}
                        </a>
                    ))}
                    <a
                        href={`mailto:${profile.basics.email}`}
                        className="text-gray-400 hover:text-bio-accent transition-colors flex items-center gap-2"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="hidden md:inline">{profile.basics.email}</span>
                    </a>
                    {profile.basics.phone && (
                        <span className="text-gray-400 flex items-center gap-2">
                            <span className="hidden md:inline">{profile.basics.phone}</span>
                        </span>
                    )}
                </div>
            </div>
        </footer>
    );
}
