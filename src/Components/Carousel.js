import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import slideData from "../data/slidesData";

import s1 from '../Images/slides/1.png';
import s2 from '../Images/slides/2.png';
import s3 from '../Images/slides/3.png';
import s4 from '../Images/slides/4.png';

const Carousel = () => {

    const images = [s1, s2, s3, s4];
    const [activeSlide, setActiveSlide] = useState(0);

    const handlePrevSlide = () => {
        setActiveSlide(activeSlide === 0 ? slideData.length - 1 : activeSlide - 1);
    };

    const handleNextSlide = () => {
        setActiveSlide(activeSlide === slideData.length - 1 ? 0 : activeSlide + 1);
    };

    return (
        <div className="relative h-96 w-1/2 m-auto mt-20">
            {slideData.map((slide, index) => (
                <motion.div
                    key={index}
                    className={`absolute rounded-xl top-0 left-0 h-full w-full bg-cover bg-center flex justify-center items-center text-white ${activeSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    style={{ backgroundImage: `url(${images[index]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeSlide === index ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="max-w-3xl mx-auto px-20">
                        <h1 className="text-3xl font-bold mb-4">{slide.title}</h1>
                        <p className="text-lg mb-8">{slide.text}</p>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className="bg-white text-gray-800 rounded-full py-3 px-6 font-bold hover:bg-gray-300 transition duration-200"
                        >
                            {slide.buttonText}
                        </motion.button>
                    </div>
                </motion.div>
            ))}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-0 flex items-center z-10">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-gray-800 rounded-full py-3 px-6 font-bold hover:bg-gray-300 transition duration-200 ml-6"
                    onClick={handlePrevSlide}
                >
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} size="2x" />
                </motion.button>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-0 flex items-center z-10">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-gray-800 rounded-full py-3 px-6 font-bold hover:bg-gray-300 transition duration-200 mr-4"
                    onClick={handleNextSlide}
                >
                    <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
                </motion.button>
            </div>
        </div>
    );
};

export default Carousel;