import Card from "@/app/ui/components/cards/cards";

import sunsetImg from "@/public/sunset-image.jpeg";
import codebyImg from "@/public/codeby-image.jpeg";
import unimontesImg from "@/public/unimontes_logo.jpeg";

import { Job } from "../interfaces";

export default function Experience() {
  const jobs: Job[] = [
    {
      years: "Nov 2022 - Apr 2024 (1 yr 6 mos)",
      imageUrl: sunsetImg,
      title: "Software Engineer",
      subtitle: "Sunset Tires Corp. LTDA",
    },
    {
      years: "May 2021 - Oct 2022 (1 yr 6 mos)",
      imageUrl: codebyImg,
      title: "Frontend Developer",
      subtitle: "Codeby",
    },
    {
      years: "Jun 2019 - Apr 2021 (1 yr 11 mos)",
      imageUrl: unimontesImg,
      title: "Fullstack Developer Intern",
      subtitle: "Directorate of Information Technology - Unimontes",
    },
  ];
  return (
    <section className="py-8 mb-4">
      {jobs.map((job) => (
        <Card key={job.title} {...job} />
      ))}
    </section>
  );
}
