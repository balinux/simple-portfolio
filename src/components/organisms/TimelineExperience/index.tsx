import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

interface TimelineExperienceProps {
  experiences: ExperienceItem[];
}

const TimelineExperience: FC<TimelineExperienceProps> = ({ experiences }) => {
  // return <div>TimelineExperience</div>;
  // Sample data if no experiences are provided
  const sampleExperiences: ExperienceItem[] = [
    {
      title: "Senior Developer",
      company: "Tech Innovators Inc.",
      period: "2020 - Present",
      description:
        "Led a team of developers in creating cutting-edge web applications using React and Node.js.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2017 - 2020",
      description:
        "Developed and maintained multiple client websites and internal tools.",
      skills: ["JavaScript", "Python", "Django", "PostgreSQL"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2015 - 2017",
      description:
        "Assisted in the development of mobile applications and gained experience in agile methodologies.",
      skills: ["React Native", "iOS", "Android", "Agile"],
    },
  ];

  const timelineItems =
    experiences.length > 0 ? experiences : sampleExperiences;

  return (
    <div
      className="max-w-2xl p-4 relative font-[family-name:var(--font-geist-mono)]
"
    >
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      {timelineItems.map((item, index) => (
        <div key={index} className="mb-8 flex items-center">
          <div className="absolute left-4 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2"></div>
          <Card className="ml-12 w-full">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                {item.company} | {item.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default TimelineExperience;
