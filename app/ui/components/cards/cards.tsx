import Image from "next/image";
import { Experience } from "@/app/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar as fasStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";

const MAX_SCORE = 5;
export default function Card({
  years,
  imageUrl,
  title,
  subtitle,
  description,
  abilitiesLearnt,
}: Experience) {
  const getStarIcon = (index: number, score: number) => {
    if (score - index === 0.5) return faStarHalfStroke;
    if (index < score) return fasStar;
    return faStar;
  };

  return (
    <div
      className="
      flex p-2 md:p-3 my-4 odd:bg-transparent bg-primary-600 rounded-xl group relative overflow-hidden "
    >
      <div
        className="
          absolute w-4/5 h-full top-0 right-0 bg-gradient-to-bl from-primary-700  to-gray-800 
          translate-x-full group-hover:translate-x-0 invisible group-hover:visible 
          transition-all ease-in-out rounded-r-xl grid grid-rows-3 gap-2 
        "
        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        {abilitiesLearnt.map((ability) => (
          <div
            key={ability.title}
            className="p-1 md:p-2 flex justify-end gap-2"
          >
            <p className="text-sm md:text-md text-primary-200">
              {ability.title}
            </p>
            <p className="text-primary-200">
              {Array.from({ length: MAX_SCORE }).map((_, i) => (
                <FontAwesomeIcon key={i} icon={getStarIcon(i, ability.score)} />
              ))}
            </p>
          </div>
        ))}
      </div>

      <Image
        src={imageUrl}
        alt={title}
        className="object-cover w-12 h-12 rounded-full"
      />

      <div className="w-auto p-2 md:p-4 group-hover:[&>*]:blur-sm">
        <p className="text-xs text-primary-400 group-hover:blur-sm">{years}</p>
        <h2 className="text-lg md:text-xl text-primary-200">{title}</h2>
        <p className="text-sm md:text-md text-primary-300">{subtitle}</p>
        <p className="text-sm md:text-md text-primary-400">{description}</p>
      </div>
      {/* Links */}
      {/* Experience Sub card */}
    </div>
  );
}
