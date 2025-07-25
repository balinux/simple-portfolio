"use client";

import Image from "next/image";

import * as React from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TimelineExperience from "@/components/organisms/TimelineExperience";
import Skill from "@/components/organisms/Skill";
import ModeToggle from "@/components/atoms/ToggleDarkMode";
import NavHeader from "@/components/header";
import Footer from "@/components/organisms/Footer";
import { DiDocker, DiLaravel } from "react-icons/di";
import { FaDocker, FaDownload, FaGolang } from "react-icons/fa6";
import { SiN8N, SiNextdotjs } from "react-icons/si";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import Project from "@/components/organisms/Project";
import { ProjectType } from "@/lib/types";

export default function Home() {
  const { setTheme } = useTheme();

  type ExperienceItem = {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
  };


  const projects: ProjectType[] = [
    {
      type: "Mobile App",
      app_name: "Udayana Mobile App",
      link: "https://apps.apple.com/us/app/udayana-mobile/id1496936074",
      image: "/udayana-mobile.png",
      description: "Udayana Mobile is an application for academic activities for Udayana University students.",
      github_link: "#"
    },
    {
      type: "Web App",
      app_name: "USDI Web App",
      link: "https://usdi.unud.ac.id",
      image: "/usdi-web.png",
      description: "USDI is a website that provides information about Udayana University's Information and Communication Technology resources.",
      github_link: "#"
    },
    {
      type: "Web App",
      app_name: "Cendekia LMS",
      link: "https://github.com/balinux/cendekia-lms/",
      image: "/cendekia-lms.png",
      description: "Cendekia LMS is a Learning Management System (LMS) for online education.",
      github_link: "https://github.com/balinux/cendekia-lms/"
    },
    {
      type: "Bot",
      app_name: "USDI Telegram Bot",
      link: "https://www.instagram.com/p/BoEwoHZlMpd/?img_index=1",
      image: "/usdi-bot.png",
      description: "Built a Telegram bot using Node.js and KubeMQ to automate 500+ daily alerts for letters and complaints, reducing admin workload by 70%.",
      github_link: "#"
    },
    {
      type: "Web App",
      app_name: "IMISSU2",
      link: "https://imissu2.unud.ac.id/",
      image: "/imissu2.png",
      description: "Developed a Single Sign-On system using Keycloak, integrated with 10+ campus services. Designed and implemented the authentication UI with Tailwind CSS.",
      github_link: "#"
    },
    {
      type: "Web App",
      app_name: "Techinfaq",
      link: "https://github.com/balinux/TechInfaQ/",
      image: "/techinfaq.jpeg",
      description: "Developed an IoT-based fundraising system with Laravel and React.js, integrating ESP32 sensors and real-time MQTT communication for transparent donation tracking.",
      github_link: "#"
    },
  ]

  const myExperiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer | Mobile App Developer",
      company: "Udayana University.",
      period: "2018 - 2025",
      description:
        "As a Full Stack Developer at Universitas Udayana since 2018, I’ve built a cross-platform campus app (Flutter) used by 3,000+ staff, a Keycloak-based SSO system for 10+ services, and the USDI website with Laravel/MySQL. I also developed a Telegram bot (Node.js, KubeMQ) automating 500+ daily alerts, and streamlined deployments using Podman and GitLab CI/CD.",
      skills: ["Laravel", "Node.js", "TypeScript", "Flutter", "Dart", "Next.js", "Tailwindcss", "Docker"],
    },
    {
      title: "Field Engineer",
      company: "PT. Mitra Jaringan Global",
      period: "2016 - 2017",
      description:
        "I have experience in field engineering, where I was responsible for installing and maintaining network infrastructure, including routers, switches, and other network devices. I also have experience in troubleshooting and resolving network issues, as well as in providing technical support to clients.",
      skills: ["Mikrotik", "Cisco", "Network Infrastructure"],
    },
  ];

  return (
    <div className="container mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full flex">
          <NavHeader />
        </div>

        <div className="flex flex-col sm:grid grid-cols-2 justify-between w-full gap-4 min-h-[74vh]">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-semibold mt-5 mb-0">
              Rio Juniyantara Putra
            </div>
            <div className="text-md font-semibold mt-6">Full Stack Developer</div>

            {/* about me */}
            <div id="aboutme" className="text-3xl font-semibold hidden">About me</div>

            <p className="text-sm mt-2 sm:mr-20 font-[family-name:var(--font-geist-mono)]">
            Full Stack Developer with over 6 years of experience (2018–present) in end-to-end development of web and mobile applications. Proficient in frontend technologies (React, Next.js, Flutter, Tailwind CSS) and backend development (Node.js, JavaScript, PHP, Go, Laravel), with strong expertise in IoT, blockchain, and CI/CD pipeline optimization. Experienced in building scalable solutions for the education sector (Udayana University’s USDI Website, Mobile Attendance App) and innovative IoT/blockchain projects. Skilled in using Docker and Podman for containerization and service orchestration, MySQL database management, and Agile collaboration with cross-functional teams.
            </p>
            {/* download cv pdf */}
            <Button asChild className="w-40 mt-2">
              <Link href="/RioJuniyantaraPutra-CV.pdf" target="_blank"><BiDownload className="w-6 h-6" />Download CV</Link>
            </Button>

            {/* currently stack */}
            <div className="flex flex-col justify-center md:items-start mb-5 mt-10 lg:mx-0 opacity-100">
              <div className="flex flex-col justify-start items-start md:items-start">
                <p className="text-base text-center lg:text-start mb-2.5">
                  Currently favorite stack
                </p>
                <ul className="flex justify-center items-center flex-wrap gap-3.5 text-[#444]">
                  <li className="transform-none opacity-100">
                    <div className="transition duration-200 hover:text-[#c73131]">
                      <DiLaravel className="h-10 w-10" />
                    </div>
                  </li>
                  <li className="transform-none opacity-100">
                    <div className="transition duration-200 hover:text-[#3178C7]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="img"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <title>TypeScript</title>
                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
                      </svg>
                    </div>
                  </li>
                  <li className="transform-none opacity-100">
                    <div className="transition duration-200 hover:text-[#3178C7]">
                      <FaDocker className="h-8 w-8" />
                    </div>
                  </li>
                  <li className="transform-none opacity-100">
                    {" "}
                    <div className="transition duration-200 hover:text-[#FFFFFF]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="img"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <title>Next.js</title>
                        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
                      </svg>
                    </div>
                  </li>
                  <li className="transform-none opacity-100">
                    {" "}
                    <div className="transition duration-200 hover:text-[#3178C7]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="img"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <title>React</title>
                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                      </svg>
                    </div>
                  </li>
                  <li className="transform-none opacity-100">
                    {" "}
                    <div className="transition duration-200 hover:text-[#06B6D4]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        role="img"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <title>Tailwind CSS</title>
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                      </svg>
                    </div>
                  </li>
                  <li className="transform-none opacity-100">
                    {" "}
                    <div className="transition duration-200 hover:text-[#8cc84b]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid"
                        fill="currentColor"
                        role="img"
                        className="h-6 w-6"
                      >
                        <title>Node.js</title>
                        <path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"></path>
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* currently learning */}
            <div className="flex flex-col justify-center md:items-start mb-10 lg:mx-0 opacity-100">
              <div className="flex flex-col justify-start items-start md:items-start">
                <p className="text-base text-center lg:text-start mb-2.5">
                  Currently learning
                </p>
                <ul className="flex justify-center items-center flex-wrap gap-3.5 text-[#444]">
                  <li>
                    <div className="transition duration-200 hover:text-[#066da5]">
                      <FaGolang className="w-10 h-10" />
                    </div>
                  </li>
                  <li>
                    <div className="transition duration-200 hover:text-[#a50606]">
                      <SiN8N className="w-8 h-8" />
                    </div>
                  </li>
                  <li>
                    <div className="transition duration-200 dark:hover:text-[#ffffff]">
                      <SiNextdotjs className="w-7 h-7" />
                    </div>
                  </li>
                  <li>
                    <div className="transition duration-200 hover:text-[#066da5]">
                      <svg
                        viewBox="0 0 24 18"
                        width="32px"
                        height="32px"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                        fill="currentColor"
                      >
                        <title>Docker</title>
                        <g>
                          <path
                            d="M23.505 6.609c-0.54 -0.375 -1.779 -0.516 -2.747 -0.328 -0.112 -0.938 -0.63 -1.758 -1.531 -2.484l-0.518 -0.375 -0.36 0.539c-0.45 0.703 -0.675 1.688 -0.608 2.625 0.022 0.328 0.135 0.914 0.473 1.43 -0.315 0.188 -0.968 0.422 -1.824 0.422H0.108l-0.045 0.188c-0.158 0.937 -0.158 3.867 1.689 6.117 1.396 1.711 3.468 2.578 6.192 2.578 5.9 0 10.268 -2.836 12.317 -7.968 0.811 0.023 2.545 0 3.423 -1.758 0.022 -0.047 0.068 -0.141 0.225 -0.492l0.09 -0.188 -0.495 -0.305ZM13.124 0h-2.477v2.344h2.477V0Zm0 2.812h-2.477v2.344h2.477v-2.344Zm-2.927 0h-2.477v2.344h2.477v-2.344Zm-2.927 0H4.792v2.344h2.477v-2.344ZM4.342 5.625H1.865v2.344H4.342v-2.344Zm2.927 0H4.792v2.344h2.477v-2.344Zm2.927 0h-2.477v2.344h2.477v-2.344Zm2.927 0h-2.477v2.344h2.477v-2.344Zm2.927 0H13.574v2.344h2.477v-2.344Z"
                            fillRule="nonzero"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </li>

                </ul>
              </div>
            </div>


          </div>
          <div className="w-full flex justify-center items-start">
            <Image
              className="object-cover w-100 h-100 rounded-md sm:mr-40 filter grayscale hover:grayscale-0 transition duration-500"
              // src="https://nextjs.org/icons/next.svg"
              // src="https://images.unsplash.com/photo-1584339312444-6952d098e152"
              src="/rio.jpeg"
              alt="Next.js logo"
              width={600}
              height={600}
              priority
            />
          </div>

        </div>



        {/* Experience */}
        <div id="experience" className="text-3xl font-semibold">Experience</div>

        <TimelineExperience experiences={myExperiences} />

        {/* Projects */}
        <div id="project" className="text-3xl font-semibold mt-10">Projects</div>

        <Project project={projects} />

        {/* skills */}
        <div id="skill" className="text-3xl font-semibold mt-10">Skills</div>

        <Skill />
      </main>

      {/* footer */}
      <Footer />
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
