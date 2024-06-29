import Image from "next/image";
import Button from "@/app/ui/components/button";
import profilePic from "@/public/profile-picture.jpeg";

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
      <h2 className="text-xs">React &bull; Nodejs &bull; Typescript</h2>
      <Button />
      {/* Social media links*/}
    </section>
  );
}
