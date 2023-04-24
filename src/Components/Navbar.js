import React from "react";
import { motion } from "framer-motion";

import { FaGamepad } from "react-icons/fa";

function Navbar(props) {
  return (
    <nav className="bg-turquesa">
      <div className="flex items-center justify-between h-20 px-4 sm:px-4 lg:px-4">
        <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2 }}>
          <FaGamepad className="w-14 h-14 cursor-pointer text-white" />
        </motion.div>

        <ul className="hidden sm:flex ml-10 text-focus-text font-bold">
          {props.data.map((content) => (
            <motion.li
              className="w-36 text-center cursor-pointer"
              key={content.id}
              whileTap={{ scale: 0.95 }}
              whileHover={{
                scale: 1.1,
                color: "white",
              }}
            >
              {content.text}
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
