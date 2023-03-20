import React from "react";
import { motion } from "framer-motion";
import console from "../Images/console.png";

function MainInfo() {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-6 items-center m-20">
        <div className="pl-70 pr-10 text-right w-full">
          <h1 className="text-5xl font-medium">
            ¿Estás listo para<br></br>encontrar tu{" "}
            <label className="text-turquesa">consola</label>?
          </h1>
          <h2 className="text-3xl">
            Encuentra aquí todas las consolas<br></br>retro que siempre has
            querido
          </h2>
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
        </div>
        <motion.div>
          <motion.img
            whileHover={{
              scale: 1.05,
              cursor: "pointer",
            }}
            src={console}
            alt="img"
            className="w-3/5 m-auto mt-6 ml-0"
          ></motion.img>
        </motion.div>
      </div>
    </div>
  );
}

export default MainInfo;
