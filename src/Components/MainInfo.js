import React from "react";
import { motion } from "framer-motion";
import console from "../Images/console.png";

function MainInfo() {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mx-4 md:mx-20 py-20">
        <div className="lg:pl-10 md:pr-10 text-center md:text-right w-full">
          <h1 className="text-5xl font-medium">
            ¿Estás listo para<br></br>encontrar tu{" "}
            <label className="text-turquesa">consola</label>?
          </h1>
          <h2 className="text-3xl my-4">
            Encuentra aquí todas las consolas<br></br>retro que siempre has
            querido
          </h2>
          <motion.button
            className="text-white rounded-lg p-2 w-56 bg-turquesa font-medium"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#053726",
              animation: "ease-in",
            }}
          >
            Acceder a la tienda
          </motion.button>
        </div>
        <motion.div>
          <motion.img
            whileHover={{
              scale: 1.05,
              cursor: "pointer",
            }}
            src={console}
            alt="img"
            className="w-96 m-auto mt-6 md:mt-0 md:ml-0"
          ></motion.img>
        </motion.div>
      </div>
    </div>
  );
}

export default MainInfo;
