import React from "react";
import dollar from '../Images/dollar.png';
import { motion } from "framer-motion";

function Card() {
    return (
        <>
            <motion.div
                className="bg-black text-white w-72 h-auto rounded-lg ml-10"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
            >
                <img src={dollar} alt="img" className="w-10 m-auto mt-6"></img>
                <div className="m-6">
                    <h1 className="text-4xl mb-2">¿Por qué nosotros?</h1>
                    <h2 className="text-2xl mb-2">1. Elige una consola</h2>
                    <h2 className="text-xl mb-2">2. Haz una oferta</h2>
                    <p className="text-base">3. Compra</p>
                </div>

                <div className="flex justify-center items-end p-6 my-auto">
                    <motion.button
                        className="text-black rounded-lg p-2 w-56 bg-white font-medium"
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        Comenzar
                    </motion.button>
                </div>

            </motion.div>
        </>
    );
}

export default Card;