"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

export default function AnimatedCounter({
    end,
    duration = 2.5,
    suffix = "",
    prefix = "",
}: AnimatedCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <span ref={ref} className="tabular-nums">
            {isInView ? (
                <CountUp
                    start={0}
                    end={end}
                    duration={duration}
                    separator=","
                    prefix={prefix}
                    suffix={suffix}
                    useEasing={true}
                />
            ) : (
                "0" + suffix
            )}
        </span>
    );
}
