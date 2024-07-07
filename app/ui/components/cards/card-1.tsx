import Image, { StaticImageData } from "next/image";
type CardProps = {
  logo?: StaticImageData | string;
  title: string;
  subtitle: string;
};
export default function Card1({ logo, title, subtitle }: CardProps) {
  return (
    <div className="bg-slate-900 w-1/3 rounded-lg py-4 px-3">
      <Image
        src={logo ?? ""}
        alt="logo of the rewards"
        width={50}
        height={50}
        className="rounded-full my-2"
      />
      <h1 className="text-xl">{title}</h1>
      <p className="text-slate-400">{subtitle}</p>
    </div>
  );
}
