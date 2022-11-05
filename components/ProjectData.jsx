import enactus from "../public/assets/projects/enactusdcu.png";
import renu from "../public/assets/projects/renu-ireland.png";
import timelogger from "../public/assets/projects/timelogger.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const projectData = [
  {
    name: "Enactus DCU",
    src: enactus,
    url: "www.enactusdcu.com",
    technologies: "NextJS, Tailwind CSS",
  },
  {
    name: "Renu Ireland",
    src: renu,
    url: "www.renu-ireland.com",
    technologies: "ReactJS, MaterialUI, Django, MySQL DB, Firebase, Bootstrap",
  },
  {
    name: "Enactus DCU Timelogger",
    src: timelogger,
    url: "/",
    technologies: "ReactJS, MaterialUI, Django, MySQL DB, Firebase, Bootstrap",
  },
];

export const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl} passHref={true} target={"_blank"}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};
