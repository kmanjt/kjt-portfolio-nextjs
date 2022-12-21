import Image from "next/image";
import React from "react";
import { skills_list } from "./SkillsData";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.25,
          type: "spring",
          stiffness: 120,
          duration: 5,
          bounce: 0.5,
        }}
        id="skills"
        className="block md:h-screen w-full "
      >
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className="text-xl tracking-widest text-[#5651e5] uppercase">
            Skills
          </p>
          <h2 className="py-4">What I Can Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills_list.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
                >
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                      <Image
                        src={`/assets/skills/${skill.name}.png`}
                        width="64"
                        height="64"
                        alt="/"
                      />
                    </div>
                    <div className="flex flex-col items-center jusify-center">
                      <h3 className="uppercase tracking-widest">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Skills;
