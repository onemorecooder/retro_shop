import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="">
      <div className="grid grid-cols-2 items-center my-20">
        <motion.div className="bg-contact-1 h-96 border-4 border-border-b">
          <div className="bg-contact-2 w-96 h-56 border-4 border-border-a m-auto rounded-md mt-4"></div>
          <div className="grid grid-cols-2 gap-6 items-center m-20">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="cursor-pointer"
            >
              <div className="">
                <div className="absolute w-8 h-20 bg-button-yellow rounded-lg left-36"></div>
                <div className="absolute w-20 h-8 bg-button-yellow rounded-lg"></div>
              </div>
            </motion.div>
            <motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="w-12 h-12 bg-button-red mx-auto rounded-full cursor-pointer"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="bg-gray-100 h-96 p-8">
          <h1 className="text-4xl">Contacta ahora</h1>
          <h2 className="text-2xl mb-2">
            Ponte en contacto con nosotros para obtener información
          </h2>
          <p className="text-base">Lorem</p>
          <motion.button
            className="text-white rounded-lg p-2 w-56 bg-turquesa font-medium mt-4"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#053726",
              animation: "ease-in",
            }}
          >
            Acceder a la tienda
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
