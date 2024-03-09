import Image from "next/image";
import React from "react";
import styles from "./style.module.css";

const Logo = () => {
  return (
    <div className={styles.logodiv}>
      <Image src="/logo.png" alt="logo" width={36} height={53} />
      <h1 className={styles.logoh1}>Organick</h1>
    </div>
  );
};

export default Logo;
