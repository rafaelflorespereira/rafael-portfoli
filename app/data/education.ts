import { Experience } from "../interfaces";
import unimontesImg from "@/public/unimontesmg_logo.jpeg";
import uCalgaryImg from "@/public/ucalgary_logo.jpeg";

export const education: Experience[] = [
  {
    years: "Jan 2016 - Jan 2021 (5 yrs)",
    imageUrl: unimontesImg,
    title: "University State of Montes Claros",
    subtitle: "Bachelor of Systems Engineering",
    abilitiesLearnt: [
      {
        title: "Software Engineering",
        score: 4.5,
      },
      {
        title: "Data Structures",
        score: 4.5,
      },
      {
        title: "Algorithms",
        score: 4.5,
      },
    ],
  },
  {
    years: "Sep 2013 - Apr 2015 (1 yr 6 mos)",
    imageUrl: uCalgaryImg,
    title: "University of Calgary",
    subtitle: "Exchange Student - Software Engineering",
    abilitiesLearnt: [
      {
        title: "Software Engineering",
        score: 1.5,
      },
      {
        title: "Data Structures",
        score: 2.5,
      },
      {
        title: "Algorithms",
        score: 3.5,
      },
    ],
  },
];
