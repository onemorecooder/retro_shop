import React from "react";
import { motion } from "framer-motion";

import facebook from "../Images/icons/facebook.png";
import instagram from "../Images/icons/instagram.png";
import tiktok from "../Images/icons/tiktok.png";
import twitter from "../Images/icons/twitter.png";
import youtube from "../Images/icons/youtube.png";

function SocialMedia() {
  return (
    <div className="flex m-auto my-6 w-fit">
      <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href="a">
        <img src={facebook} alt="facebook"></img>
      </motion.a>
      <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href="a">
        <img src={instagram} alt="instagram"></img>
      </motion.a>
      <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href="a">
        <img src={tiktok} alt="tiktok"></img>
      </motion.a>
      <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href="a">
        <img src={twitter} alt="twitter"></img>
      </motion.a>
      <motion.a whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} href="a">
        <img src={youtube} alt="youtube"></img>
      </motion.a>
    </div>
  );
}

export default SocialMedia;
