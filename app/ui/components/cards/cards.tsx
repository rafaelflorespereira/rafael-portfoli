import Image, { StaticImageData } from "next/image";
import styles from "./cards.module.css";

type Experience = {
  name: string;
  level: number;
};
type CardProps = {
  isOdd: boolean;
  years: (number | string)[];
  imageUrl: StaticImageData | string;
  title: string;
  subtitle: string;
  description: string;
  links: string[];
  experiences: Experience[];
};
export default function Card({
  isOdd,
  years,
  imageUrl,
  title,
  subtitle,
  description,
  links,
  experiences,
}: CardProps) {
  return (
    <div className="flex p-4 odd:bg-transparent bg-slate-600 rounded-xl">
      <Image
        src={imageUrl}
        alt={title}
        width={200}
        height={200}
        className="rounded-full w-12 h-12 my-4"
      />
      <div className="w-auto p-4">
        <p className="text-xs text-slate-400 ">{years}</p>
        <h2 className="text-xl text-slate-200">{title}</h2>
        <p className="text-slate-300">{subtitle}</p>
        <p className="text-slate-400">{description}</p>
      </div>
      {/* Links */}
      {/* Experience Sub card */}
    </div>
  );
}
