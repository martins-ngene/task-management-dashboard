/** @format */

import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";
import { NavItems } from "../constants";

const Menu = () => {
  return (
    <div className={styles.menu_container}>
      <div className={styles.links_container}>
        {NavItems.map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <p className={styles.link}>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
