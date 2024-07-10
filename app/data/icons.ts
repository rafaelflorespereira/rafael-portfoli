import {
  faAtlassian,
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faLaravel,
  faLinux,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { IHeaderIcon } from "../interfaces";

export const techIcons: IHeaderIcon[] = [
  {
    icon: faJs,
    color: "#f0db4f",
    name: "Javascript",
  },
  {
    icon: faLinux,
    color: "#000",
    name: "Linux",
  },
  {
    icon: faAtlassian,
    color: "#0052cc",
    name: "Atlassian",
  },
  {
    icon: faGitAlt,
    color: "#F28159",
    name: "Git",
  },
  {
    icon: faNpm,
    color: "#FF4747",
    name: "npm",
  },
];
export const frontEndIcons: IHeaderIcon[] = [
  {
    icon: faReact,
    color: "#61dafb",
    name: "React",
  },
  {
    icon: faHtml5,
    color: "#e34f26",
    name: "HTML5",
  },
  {
    icon: faSass,
    color: "#CF649A",
    name: "Sass",
  },
  {
    icon: faCss3,
    color: "#264de4",
    name: "CSS3",
  },
];

export const backEndIcons: IHeaderIcon[] = [
  {
    icon: faNodeJs,
    color: "#68a063",
    name: "Node.js",
  },
  {
    icon: faLaravel,
    color: "#FF4843",
    name: "Laravel",
  },
];
