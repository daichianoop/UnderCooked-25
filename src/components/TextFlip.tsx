"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function LayoutTextFlipDemo() {
    return (
        <div className="py-16">
            {/* Animated Title */}
            <motion.div
                className="relative mx-4 text-white flex flex-col items-center justify-center gap-6 text-center sm:mx-0 sm:flex-row"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <LayoutTextFlip
                    text="Powered by"
                    words={["AI/ML", "Development", "Cloud Tech", "Devops"]}
                />
            </motion.div>

            {/* Supporting Paragraph */}


        </div>
    );
}
