import React from 'react';

import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoReact,
} from 'react-icons/bi';
import { SiMysql } from "react-icons/si";

const Skill = () => {

  const skills = [
    { label: "Javascript", icon: <BiLogoJavascript /> },
    { label: "Typescript", icon: <BiLogoTypescript /> },
    { label: "HTML", icon: <BiLogoHtml5 /> },
    { label: "CSS", icon: <BiLogoCss3 /> },
    { label: "Tailwindcss", icon: <BiLogoTailwindCss /> },
    { label: "NodeJS", icon: <BiLogoNodejs /> },
    { label: "ReactJS", icon: <BiLogoReact /> },
    { label: "MySQL", icon: <SiMysql /> },
  ];

  return (
    <div className="flex flex-col gap-[1rem] text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-[3rem] font-bold">Skill</h1>
      </div>
      <div className="text-[1.6rem]">
        <ul className="grid grid-cols-2 gap-[1rem]">
          {skills.map((skill, index) => (
            <li key={index} className="flex flex-col items-center">
              <span className="text-[4rem]">{skill.icon}</span>
              <h3 className="text-[1.2rem]">{skill.label}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skill;