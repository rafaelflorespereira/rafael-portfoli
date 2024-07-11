import Image, { StaticImageData } from "next/image";
import { Job } from "@/app/interfaces";
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
}: Job) {
  const getStarIcon = (index: number, score: number) => {
    if (score - index === 0.5) return faStarHalfStroke;
    if (index < score) return fasStar;
    return faStar;
  };

  return (
    <div className="flex p-3 odd:bg-transparent bg-slate-600 rounded-xl group relative overflow-hidden my-4 ">
      <div
        className="absolute w-4/5 h-full top-0 right-0 bg-gradient-to-bl from-slate-700  to-gray-800 translate-x-full group-hover:translate-x-0 invisible group-hover:visible transition-all ease-in-out rounded-r-xl 
grid grid-rows-3 gap-2 
        "
        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        {abilitiesLearnt.map((ability) => (
          <div key={ability.title} className="p-2 flex justify-end gap-2">
            <p className="text-slate-200">{ability.title}</p>
            <p className="text-slate-200">
              {Array.from({ length: MAX_SCORE }).map((_, i) => (
                <FontAwesomeIcon key={i} icon={getStarIcon(i, ability.score)} />
              ))}
            </p>
          </div>
        ))}
      </div>
      <div
        className="rounded-full w-12 h-12 my-4 relative overflow-hidden "
        style={{
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 1)",
        }}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          className="object-cover rounded-full w-full h-full"
        />
      </div>
      <div className="w-auto p-4  group-hover:[&>*]:blur-sm">
        <p className="text-xs text-slate-400 group-hover:blur-sm">{years}</p>
        <h2 className="text-xl text-slate-200">{title}</h2>
        <p className="text-slate-300">{subtitle}</p>
        <p className="text-slate-400">{description}</p>
      </div>
      {/* Links */}
      {/* Experience Sub card */}
    </div>
  );
}
