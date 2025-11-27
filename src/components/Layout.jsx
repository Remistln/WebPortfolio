import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import profile from '@/data/profile.json';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-bio-dark text-slate-50 font-sans selection:bg-bio-accent/30">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer profile={profile} />
        </div>
    );
}
