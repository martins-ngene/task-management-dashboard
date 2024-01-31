import Image from "next/image";
import React, { useState } from "react";

import styles from "./styles.module.css";
import Menu from "../menu";
import Logo from "../logo";
import Profile from "../profile";

const Navbar = () => {
  // Menu useState to hide and show the menu component
  const [isOpen, setIsOpen] = useState(false);

  // This function opens and closes the menu using the Menu useState above
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <Logo />
        <h1 className={styles.routeName}>Dashboard</h1>
      </div>

      <div>
        <Profile />
      </div>
      <button onClick={toggleMenu} className={styles.menu_container}>
        <Image src='/menu.svg' alt='open menu' fill />
      </button>
      <> {isOpen && <Menu />}</>
    </div>
  );
};

export default Navbar;
