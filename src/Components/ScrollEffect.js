
import { motion, useScroll, useSpring } from "framer-motion"
import React from "react";

function MainInfo() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress)
    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-50 h-4 bg-amarillo-boton transform origin-left"
            style={{ scaleX }}
        />
    );
}

export default MainInfo;