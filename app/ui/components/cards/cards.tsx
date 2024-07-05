import Image, { StaticImageData } from "next/image";
import { Job } from "@/app/interfaces";
export default function Card({
  years,
  imageUrl,
  title,
  subtitle,
  description,
}: Job) {
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
