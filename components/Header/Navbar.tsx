"use client";
import Navigation from "./Navigatio";
import Logo from "./Logo";
import styles from "./style.module.css";
import Search from "./Search";
import Hamburger from "./Hamburger";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const click = () => {
    setActive(!active);
  };
  return (
    <div className={styles.header}>
      <div className={styles.navlog}>
        <Logo />
        <Navigation active={active} />
      </div>
      <div className={styles.burger}>
        <Search />
        <Hamburger active={active} handleClick={click} />
      </div>
    </div>
  );
};

export default Navbar;
