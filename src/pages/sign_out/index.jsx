/** @format */

import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";
import { SubmitBtn } from "@/components/buttons";
import Logo from "@/components/logo";

const SignOut = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.logo_container}>
          <Logo />
        </div>
        <h1 className={styles.header}>You&apos;re now logged out</h1>
        <p className={styles.welcome_text}>We hope you enjoyed our services.</p>

        <div>
          <Link href='/' passHref>
            <SubmitBtn className='mb-8' label='Sign back in' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
