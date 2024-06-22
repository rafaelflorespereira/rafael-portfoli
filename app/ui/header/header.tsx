import Image from "next/image";
import Button from "../components/button";
import profilePic from "@/public/Designer.jpeg";

export default function Header() {
  return (
    <section>
      {/* Header */}
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={50}
        height={50}
      />
      <h1>Rafael Flores Pereira</h1>
      <h2>Software Engineer</h2>
      <Button />
      {/* Social */}
    </section>
  );
}
