import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function DNABackground() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Create a long strand of DNA nodes
    // We'll use a repeating pattern approach for the visual
    const height = 4000; // Estimated height, or we can make it dynamic
    const nodes = Array.from({ length: 80 }, (_, i) => i);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute inset-0 top-[110vh]">
                {/* Central Axis Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-bio-accent/20 to-transparent -translate-x-1/2" />

                {/* DNA Helix Simulation */}
                <div className="absolute left-1/2 top-0 w-20 -translate-x-1/2 h-full">
                    {nodes.map((_, i) => (
                        <DNAStrandSegment key={i} index={i} scrollYProgress={scrollYProgress} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function DNAStrandSegment({ index, scrollYProgress }) {
    const yOffset = index * 100; // Distance between nodes

    return (
        <motion.div
            className="absolute w-full h-24 flex items-center justify-between"
            style={{ top: yOffset }}
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-100px" }}
        >
            {/* Left Node */}
            <motion.div
                className="w-3 h-3 rounded-full bg-bio-accent shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 10, 0]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                }}
            />

            {/* Connection Line */}
            <motion.div
                className="h-[2px] bg-gradient-to-r from-bio-accent/30 to-data-accent/30 flex-grow mx-2"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scaleX: [0.9, 1.1, 0.9]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                }}
            />

            {/* Right Node */}
            <motion.div
                className="w-3 h-3 rounded-full bg-data-accent shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -10, 0]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
}
