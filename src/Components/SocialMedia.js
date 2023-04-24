import React from "react";
import { motion } from "framer-motion";

import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="flex m-auto my-6 w-fit">
      <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href="a">
        <FaLinkedinIn className="w-10 h-10 m-2 text-turquesa" />
      </motion.a>
      <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href="a">
        <FaGithub className="w-10 h-10 m-2 text-turquesa" />
      </motion.a>
      <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href="a">
        <FaInstagram className="w-10 h-10 m-2 text-turquesa" />
      </motion.a>
      <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href="a">
        <FaTwitter className="w-10 h-10 m-2 text-turquesa" />
      </motion.a>
      <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href="a">
        <FaFacebook className="w-10 h-10 m-2 text-turquesa" />
      </motion.a>
    </div>
  );
}

export default SocialMedia;
