import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectItem } from "./ProjectData";
import enactus from "../public/assets/projects/enactusdcu.png";
import renu from "../public/assets/projects/renu-ireland.png";
import timelogger from "../public/assets/projects/timelogger.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Public Things I&apos;ve Made</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Renu Ireland"
            backgroundImg="renu-ireland"
            projectUrl="https://www.renu-ireland.com/"
            tech="ReactJS, Django, MySQL DB, Firebase, MaterialUI, Bootstrap"
          />
          <ProjectItem
            title="Enactus DCU"
            backgroundImg="enactusdcu"
            projectUrl="https://www.enactusdcu.com"
            tech="React JS"
          />
          <ProjectItem
            title="Enactus DCU Timelogging App"
            backgroundImg="timelogger"
            projectUrl="/"
            tech="ReactJS, Django, Firebase, MaterialUI, Bootstrap"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
