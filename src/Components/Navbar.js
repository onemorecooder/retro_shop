import React from "react";
import logo from '../Images/icon.png';
import { motion } from "framer-motion";

function Navbar(props) {
    return (
        <nav className="bg-turquesa">
            <div className="flex items-center h-16">
                <motion.img
                    className="w-15 ml-5"
                    src={logo}
                    alt="icon"
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                />
                <ul className="flex ml-10 text-white font-bold">
                    {props.data.map((content) => (
                        <motion.li
                            className="w-36 text-center "
                            key={content.id}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {content.text}
                        </motion.li>
                    ))}
                </ul>
                <input className="mr-5 ml-auto h-10 border-none rounded-full pl-5" type="text" placeholder="Search"></input>
            </div>
        </nav>
    );
}

export default Navbar;