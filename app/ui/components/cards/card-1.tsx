import Image, { StaticImageData } from "next/image";

type CardProps = {
  image: StaticImageData | string;
  title: string;
  subtitle: string;
};
export default function Card1({ image, title, subtitle }: CardProps) {
  return (
    <div className="bg-primary-900 w-1/3 rounded-lg py-4 px-3">
      <Image
        src={image}
        alt={title}
        width={50}
        height={50}
        className="rounded-full my-2"
      />
      <h1 className="text-lg">{title}</h1>
      <p className="text-primary-400 text-md">{subtitle}</p>
    </div>
  );
}
