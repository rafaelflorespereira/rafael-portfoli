import Image from "next/image";
import styles from "./cards.module.css";

type Experience = {
  name: string;
  level: number;
};
type CardProps = {
  isOdd: boolean;
  years: (number | string)[];
  imageUrl: string;
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
    <div className="flex">
      <Image src={imageUrl} alt={title} width={200} height={200} />
      <p>{years}</p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <p>{description}</p>
      {/* Links */}
      {/* Experience Sub card */}
    </div>
  );
}
