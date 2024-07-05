import Image from "next/image";
type SocialProps = {
  children?: React.ReactNode;
  alt: string;
  name: string;
  link: string;
  svgLogo: any;
};

export default function Social({
  children,
  alt,
  name,
  link,
  svgLogo,
}: SocialProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      title={name}
      className="m-2 flex flex-col items-center gap-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        fill="currentColor"
        className="w-6 h-6"
      >
        {children}
      </svg>
      <p className="text-sm ">{name}</p>
    </a>
  );
}
