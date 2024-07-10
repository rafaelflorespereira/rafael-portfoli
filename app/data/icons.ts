import {
  faAtlassian,
  faGit,
  faHtml5,
  faJs,
  faLinux,
  faNodeJs,
  faReact,
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
    icon: faGit,
    color: "#F28159",
    name: "Git",
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
];

export const backEndIcons: IHeaderIcon[] = [
  {
    icon: faNodeJs,
    color: "#68a063",
    name: "Node.js",
  },
];
