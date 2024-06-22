import Image from "next/image";
import Button from "../components/button";
import profilePic from "@/public/Designer.jpeg";

export default function Header() {
  return (
    <section className="flex flex-col items-center">
      {/* Header */}
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={60}
        height={60}
        className="rounded-full m-4"
      />
      <h1 className="text-2xl m-2">Rafael Flores Pereira</h1>
      <h2 className="text-xs">Software Engineer</h2>
      <Button />
      {/* Social */}
    </section>
  );
}
