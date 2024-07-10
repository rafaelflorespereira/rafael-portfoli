import Image, { StaticImageData } from "next/image";
import { Job } from "@/app/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";

export default function Card({
  years,
  imageUrl,
  title,
  subtitle,
  description,
  abilitiesLearnt,
}: Job) {
  return (
    <div className="flex p-3 odd:bg-transparent bg-slate-600 rounded-xl group relative overflow-hidden my-4">
      <div
        className="absolute w-4/5 h-full top-0 right-0 bg-gradient-to-bl from-slate-700  to-gray-800 translate-x-full group-hover:translate-x-0 invisible group-hover:visible transition-all ease-in-out rounded-r-xl 
grid grid-rows-3 grid-flow-col
        "
        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        {abilitiesLearnt.map((ability) => (
          <div key={ability.title} className="p-2 flex flex-row-reverse gap-2">
            <p className="text-slate-200">{ability.title}</p>
            <p className="text-slate-200">
              {Array.from({ length: 5 }).map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={i < ability.score ? faStar : fasStar}
                />
              ))}
            </p>
            <p className="text-slate-400">{ability.score}</p>
          </div>
        ))}
      </div>
      <Image
        src={imageUrl}
        alt={title}
        width={200}
        height={200}
        className="rounded-full w-12 h-12 my-4 shadow-inner shadow-black"
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
