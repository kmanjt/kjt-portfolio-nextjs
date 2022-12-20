import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectItem } from "./ProjectData";
import enactus from "../public/assets/projects/enactusdcu.png";
import renu from "../public/assets/projects/renu-ireland.png";
import timelogger from "../public/assets/projects/timelogger.png";

const Projects = () => {
  return (
    <div id="projects" className="block w-full px-2 p-2 py-32">
      <div className="max-w-[1240px] mx-auto">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Public Things I&apos;ve Made</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Renu Ireland"
            backgroundImg={renu}
            projectUrl="https://www.renu-ireland.com/"
            tech="ReactJS, Django, MySQL DB, Firebase, MaterialUI, Bootstrap"
          />
          <ProjectItem
            title="Enactus DCU"
            backgroundImg={enactus}
            projectUrl="https://www.enactusdcu.com"
            tech="NextJS, TailwindCSS"
          />
          <ProjectItem
            title="Enactus DCU Timelogging App"
            backgroundImg={timelogger}
            projectUrl="https://github.com/kmanjt/Time-Logger"
            tech="ReactJS, Django, Firebase, MaterialUI, Bootstrap"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
