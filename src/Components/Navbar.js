import React from "react";
import logo from "../Images/icon.png";
import { motion } from "framer-motion";

function Navbar(props) {
  return (
    <nav className="bg-turquesa">
      <div className="flex items-center justify-between h-20 px-4 sm:px-4 lg:px-4">
        <motion.img
          className="w-10 sm:w-14 mx-auto my-2 sm:m-auto ml-2 sm:ml-10 cursor-pointer"
          src={logo}
          alt="icon"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
        />
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
