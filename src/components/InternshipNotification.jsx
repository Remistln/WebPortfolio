import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function InternshipNotification({ profile }) {
    const [isVisible, setIsVisible] = useState(true);

    if (!profile.objective || !isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 1 }} // Slight delay to not overwhelm immediately
                className="fixed bottom-4 right-4 z-50 max-w-sm w-full md:w-auto"
            >
                <div className="bg-bio-dark/95 backdrop-blur-md border border-bio-accent/30 rounded-xl shadow-2xl p-4 overflow-hidden relative group">
                    {/* Glowing effect */}
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-bio-accent/20 rounded-full blur-xl animate-pulse" />
                    
                    <button 
                        onClick={() => setIsVisible(false)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                        aria-label="Close notification"
                    >
                        <X size={16} />
                    </button>

                    <div className="pr-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bio-accent opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-bio-accent"></span>
                            </span>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                                {profile.objective.title}
                            </h3>
                        </div>
                        
                        <p className="text-white font-medium mb-1 text-sm">
                            {profile.objective.role}
                        </p>
                        
                        <div className="text-xs text-gray-400 mt-2 space-y-1">
                             <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-data-accent rounded-full"/>
                                {profile.objective.duration}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-data-accent rounded-full"/>
                                 {profile.objective.availability}
                            </div>
                        </div>

                         {profile.objective.note && (
                            <p className="text-[10px] text-gray-500 mt-2 italic border-t border-white/5 pt-2">
                                {profile.objective.note}
                            </p>
                        )}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
