import Image from "next/image";
import logo from "@/public/logos/linkedin.svg";
export default function LinkedinLogo() {
  return (
    <Image
      src={logo}
      alt="Rafael's logo picture"
      width={200}
      height={50}
      className="object-cover"
    />
  );
}
