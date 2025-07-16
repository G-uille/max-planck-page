// components/common/SectionFadeIn.tsx
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface SectionFadeInProps {
    children: React.ReactNode;
    className?: string;
}

const SectionFadeIn: React.FC<SectionFadeInProps> = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default SectionFadeIn;
