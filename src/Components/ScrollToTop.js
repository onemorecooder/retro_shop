import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
const scrollVariants = {
  initial: { y: ".5rem", opacity: 0 },
  animate: {
    y: "0rem",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // the scroll event fires when the document view has been scrolled
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <AnimatePresence>
      <div className="m-auto w-10">
        {isVisible && (
          <motion.button
            className="w-10"
            onClick={scrollToTop}
            variants={scrollVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon
              className="w-10 h-10 text-turquesa"
              icon={faArrowAltCircleUp}
            />
          </motion.button>
        )}
      </div>
    </AnimatePresence>
  );
};
export default ScrollToTop;
