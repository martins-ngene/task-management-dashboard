import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

const Logo = () => {
  return (
    <Link href='/' className={styles.logo_container}>
      <Image src='/logo.png' alt='logo' width={40} height={40} priority />
      <div className={styles.brand}>TeachMateAI</div>
    </Link>
  );
};

export default Logo;
