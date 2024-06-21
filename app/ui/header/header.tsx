import Image from "next/image";
import styles from "./header.module.css";
import Button from "../components/button";
import profilePic from "@/public/Designer.jpeg";

export default function Header() {
  return (
    <section className={styles.wrapper}>
      {/* Header */}
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={50}
        height={50}
        className={styles.image}
      />
      <h1 className={styles.title}>Rafael Flores Pereira</h1>
      <h2 className={styles.subtitle}>Software Engineer</h2>
      <Button />
      {/* Social */}
    </section>
  );
}
