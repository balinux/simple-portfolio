import React, { FC } from "react";
import { BiLogoFlutter } from "react-icons/bi";
import { FaGolang, FaLaravel, FaReact } from "react-icons/fa6";
import {
  RiNextjsFill,
  RiNodejsFill,
  RiNodejsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiDart } from "react-icons/si";

interface SkillProps {}

const Skill: FC<SkillProps> = ({}) => {
  return (
    <div>
      <div className="md:grid md:grid-cols-3 gap-6 flex flex-col font-[family-name:var(--font-geist-mono)]">
        <div className="flex">
          <BiLogoFlutter className="text-4xl mr-2 hover:text-blue-400" />
          <div className="flex-col">
            <p className="font-bold text-2xl mb-2">Flutter</p>
            <p>Cross-platform app development</p>
          </div>
        </div>

        <div className="flex">
          <RiNodejsLine className="text-4xl mr-2 hover:text-green-600" />
          <div className="flex-col">
            <p className="font-bold text-2xl mb-2">Node.JS</p>
            <p>Asynchronous JavaScript runtime</p>
          </div>
        </div>

        <div className="flex">
          <SiDart className="text-5xl mr-2 hover:text-blue-400" />
          <div className="flex-col">
            <p className="font-bold text-2xl mb-2">Dart</p>
            <p>Portable, productive, and versatile for high-quality apps</p>
          </div>
        </div>

        <div className="flex">
          <FaLaravel className="text-4xl mr-2 hover:text-red-400" />
          <div className="flex-col">
            <p className="font-bold text-2xl mb-2">Laravel</p>
            <p>The PHP Framework for Web Artisans</p>
          </div>
        </div>
        <div className="flex">
          <FaGolang className="text-6xl mr-2 -mt-3 hover:text-blue-400" />
          <div className="flex-col">
            <p className="font-bold text-2xl mb-2">Golang</p>
            <p>Open-source language for secure, scalable systems</p>
          </div>
        </div>

        <div className="flex">
          <RiNextjsFill className="text-4xl mr-2 " />
          <div className="flex-col">
            <p className="font-bold text-2xl mb-2">Next.JS</p>
            <p>The React Framework for the Web</p>
          </div>
        </div>

        <div className="flex">
          <RiTailwindCssFill className="text-4xl mr-2 hover:text-blue-400" />
          <div className="flex-col">
            <p className="font-bold text-2xl mb-2">Tailwindcss</p>
            <p>Build modern websites quickly with utility-first CSS</p>
          </div>
        </div>

        <div className="flex">
          <FaReact className="text-4xl mr-2 hover:text-blue-400" />
          <div className="flex-col">
            <p className="font-bold text-2xl mb-2">React</p>
            <p>The library for web and native user interfaces</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
