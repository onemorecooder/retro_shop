import React from "react";
import { motion } from "framer-motion";
import linksData from "../data/linksData.json";

function Links() {
  return (
    <div className="bg-gray-100 py-6">
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center lg:p-20">
        <div className="flex justify-center items-center">
          <div className="lg:grid lg:grid-cols-2 lg:gap-6 w-full lg:w-1/2 flex flex-wrap">
            <div className="w-1/2 text-center lg:w-full">
              <h1 className="mb-4 text-xl text-turquesa font-bold">Empresa</h1>
              {linksData.links.slice(0, 5).map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="text-gray-500 hover:text-black block mb-4"
                >
                  {link.text}
                </a>
              ))}
            </div>
            <div className="w-1/2 text-center lg:w-full">
              <h1 className="mb-4 text-xl text-turquesa font-bold">Soporte</h1>
              {linksData.links.slice(5, 10).map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="text-gray-500 hover:text-black block mb-4"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-4 lg:mx-20">
          <h1 className="text-2xl lg:text-3xl font-medium my-6">
            ¡Apúntate a nuestro{" "}
            <label className="text-turquesa">Newsteller</label>!
          </h1>

          <form>
            <input
              type="text"
              className="border border-gray-300 rounded w-full py-2 px-3 mb-3"
              placeholder="Ingresa tu correo electrónico"
            />
            <motion.button
              className="text-white rounded-lg p-2 w-full bg-turquesa font-medium"
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#053726",
                animation: "ease-in",
              }}
            >
              Enviar
            </motion.button>
            <h2 className="text-lg lg:text-2xl my-6">
              En nuestro Newsteller podrás encontrar todo tipo de noticias,
              nuevos productos, tutoriales para poner a punto tu consola y mucho
              más.
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Links;
