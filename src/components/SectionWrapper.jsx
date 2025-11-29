import React from 'react';
import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, side = 'left', className = '' }) {
    const isLeft = side === 'left';

    return (
        <section id={id} className={`relative py-20 z-10 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>

                    {/* Content Side */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {children}
                    </motion.div>

                    {/* Connector to Center (Desktop only) */}
                    <div className="hidden md:flex flex-col items-center justify-center w-0 relative">
                        {/* The connector line is handled by the DNABackground, but we can add specific section markers here if needed */}
                        <div className="w-4 h-4 rounded-full bg-white border-4 border-bio-dark z-10 absolute" />
                        <div className={`absolute top-1/2 w-16 h-px ${isLeft ? '-left-16 bg-gradient-to-r' : '-right-16 bg-gradient-to-l'} from-transparent to-white/50`} />
                    </div>

                    {/* Empty Space for Balance */}
                    <div className="hidden md:block flex-1" />
                </div>
            </div>
        </section>
    );
}
