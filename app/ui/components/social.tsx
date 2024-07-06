import Image from "next/image";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
type SocialProps = {
  children?: React.ReactNode;
  alt: string;
  name: string;
  link: string;
  icon: FontAwesomeIconProps["icon"];
};

export default function Social({ alt, name, link, icon }: SocialProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      title={name}
      className="m-2 flex flex-col items-center gap-1"
    >
      <FontAwesomeIcon icon={icon} className="md:w-6" />
      <p className="text-sm ">{name}</p>
    </a>
  );
}
