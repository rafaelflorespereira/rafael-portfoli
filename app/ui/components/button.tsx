import Link from "next/link";
import styles from "./button.module.css";
export default function Button() {
  return (
    <Link className={styles.button} href={"#"}>
      Contact me
    </Link>
  );
}
