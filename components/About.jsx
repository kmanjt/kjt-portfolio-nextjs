import Image from "next/image";
import Link from "next/link";
import React from "react";
import AboutImg from "../public/assets/about.png";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 120,
          duration: 3,
          bounce: 0.5,
        }}
        id="about"
        className="w-full h-screen p-2 flex items-center my-32"
      >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase tracking-widest text-xl text-[#5651e5]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600">
              I am a second year Computer Science student studying at Dublin
              City University. I am from Dublin, Ireland with a Romanian
              familial background. I absolutely love programming and finding
              solutions to real world problems and frustrations through my work.
              To me, programming is a creative outlet which allows me to express
              myself.
            </p>
            <Link href="#projects">
              <p className="py-2 text-gray-600 underline cursor-pointer">
                Check out my recent public projects.
              </p>
            </Link>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image className="rounded-xl" src={AboutImg} alt="/" />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
