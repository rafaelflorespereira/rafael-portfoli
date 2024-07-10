import { Job } from "../interfaces";
import sunsetImg from "@/public/sunset-image.jpeg";
import codebyImg from "@/public/codeby-image.jpeg";
import unimontesImg from "@/public/unimontes_logo.jpeg";

export const jobs: Job[] = [
  {
    years: "Nov 2022 - Apr 2024 (1 yr 6 mos)",
    imageUrl: sunsetImg,
    title: "Software Engineer",
    subtitle: "Sunset Tires Corp. LTDA",
    abilitiesLearnt: [
      {
        title: "React",
        score: 4.5,
      },
      {
        title: "NestJS",
        score: 4.5,
      },
      {
        title: "Scrum",
        score: 3,
      },
    ],
  },
  {
    years: "May 2021 - Oct 2022 (1 yr 6 mos)",
    imageUrl: codebyImg,
    title: "Frontend Developer",
    subtitle: "Codeby",
    abilitiesLearnt: [
      {
        title: "React",
        score: 4.5,
      },
      {
        title: "VTEX (Ecommerce)",
        score: 4,
      },
      {
        title: "Front-end Architecture",
        score: 3,
      },
    ],
  },
  {
    years: "Jun 2019 - Apr 2021 (1 yr 11 mos)",
    imageUrl: unimontesImg,
    title: "Fullstack Developer Intern",
    subtitle: "Directorate of Information Technology - Unimontes",
    abilitiesLearnt: [
      {
        title: "Laravel",
        score: 4,
      },
      {
        title: "Vue",
        score: 2.5,
      },
      {
        title: "Docker",
        score: 2,
      },
    ],
  },
];
