"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
    duration?: number;
}

export default function FadeIn({
    children,
    delay = 0,
    direction = "up",
    fullWidth = false,
    duration = 0.5,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getVariants = () => {
        switch (direction) {
            case "up":
                return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
            case "down":
                return { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } };
            case "left":
                return { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };
            case "right":
                return { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
            case "none":
            default:
                return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={getVariants()}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.25, 0, 1], // Custom smooth ease-out
            }}
            className={fullWidth ? "w-full" : ""}
        >
            {children}
        </motion.div>
    );
}
