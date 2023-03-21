import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="">
      <div className="grid grid-cols-2 items-center my-20 flex items-stretch">
        <motion.div className="bg-contact-1 h-auto border-4 border-border-b">
          <div className="bg-contact-2 w-96 border-4 border-border-a m-auto rounded-md mt-4">
            <div className="m-6">
              <input
                placeholder="Name"
                className="w-full h-10 mb-4 rounded"
                type="text"
              ></input>
              <br></br>
              <input
                placeholder="Email"
                className="w-full h-10 mb-4 rounded"
                type="email"
              ></input>
              <br></br>
              <textarea
                placeholder="Mensaje"
                className="w-full mb-4 rounded h-34"
                type="text"
              ></textarea>
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
            </div>
          </div>
          <div className="grid grid-cols-2 items-center w-80 m-auto">
            <div>
              <div className="speaker"></div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                class="cross"
              >
                <div class="horizontal"></div>
                <div class="vertical"></div>
              </motion.div>

              <div className="console-father-two">
                <div className="speaker-two"></div>
                <div className="speaker-two"></div>
              </div>
            </div>

            <motion.div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="button-top"
              ></motion.div>
              <div className="buttons-flex">
                <motion.div className="button-left">
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    className="triangle"
                  ></motion.div>
                </motion.div>

                <motion.div
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  className="button-right"
                ></motion.div>
              </div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="button-bottom"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="bg-gray-100 h-auto p-8">
          <h1 className="text-4xl">Contacta ahora</h1>
          <h2 className="text-2xl mb-4">
            Ponte en contacto con nosotros para obtener más información
          </h2>
          <p className="mb-2">
            <b>Teléfono:</b> (<b>+34</b>) 687 123 037
          </p>
          <p className="mb-4">
            <b>E-mail:</b> retroshop@gmail.com
          </p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172139.4175448731!2d-122.48249113349291!3d47.612942764418506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20Washington%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1679420199232!5m2!1ses!2ses"
            width="100%"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;