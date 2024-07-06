import Image from "next/image";
import logo from "@/public/Image-1.jpeg";
import Social from "@/app/ui/components/social";
// Both below works
import GithubLogo from "../ui/logos/github-logo";
import LinkedinLogo from "../ui/logos/linkedin-logo";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const socials = [
    {
      icon: faGithub,
      alt: "Github logo",
      name: "Github",
      link: "https://github.com/rafaelflorespereira",
    },
    {
      icon: faLinkedin,
      alt: "Linkedin logo",
      name: "Linkedin",
      link: "https://www.linkedin.com/in/rafael-flores-pereira/",
    },
  ];
  return (
    <section className="min-h-1/4-vh flex flex-col justify-center items-center w-full gap-2">
      <Image
        src={logo}
        alt="Rafael's logo picture"
        width={200}
        height={50}
        className="object-cover"
      />
      {socials.map((social) => (
        <Social key={social.name} {...social} />
      ))}

      {/* All rights reserved */}
    </section>
  );
}
