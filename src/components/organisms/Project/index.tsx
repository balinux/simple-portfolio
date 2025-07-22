import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { BiPaperPlane } from "react-icons/bi";



interface ProjectProps {
  project: ProjectType[];
}

export default function Project({
  project,
}: ProjectProps) {

  return (
    <div className="lg:grid grid-cols-3 gap-4 w-full items-stretch">
      {project.map((project, index) => (
        <div key={index} className="flex items-stretch justify-center p-4">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-zinc-700 rounded-[2rem] -rotate-1 translate-x-4 translate-y-4" />

            <Card className="relative w-full h-full rounded-[2rem] border-2 border-zinc-700 bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 from-zinc-100 to-zinc-100 p-8 overflow-hidden flex flex-col">
              <div className="flex-grow">
                <div className="overflow-hidden rounded-lg w-full h-[200px]">
                  <Image
                    className="rounded-lg cursor-pointer overflow-hidden transition transform hover:scale-105 object-cover w-full h-full"
                    src={project.image}
                    alt={project.app_name}
                    width={900}
                    height={200}
                  />
                </div>


                <h1 className="text-xl md:text-2xl dark:text-zinc-100 text-zinc-500 mt-4">
                  {project.type}
                </h1>
                <h2 className="text-2xl md:text-5xl font-bold dark:text-zinc-200 text-zinc-700">
                  {project.app_name}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <Button asChild className="w-fit">
                  <Link href={project.link}> <BiPaperPlane className="w-10 h-10"/> Visit</Link>
                </Button>

                <Link href={project.github_link} aria-label="View project on GitHub">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      ))}
    </div>

  )
}