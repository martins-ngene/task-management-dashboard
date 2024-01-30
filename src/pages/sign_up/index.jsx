/** @format */

import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";
import { SignInWithGoogleBtn, SubmitBtn } from "@/components/buttons";
import Logo from "@/components/logo";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.logo_container}>
          <Logo />
        </div>
        <h1 className={styles.header}>Create Account</h1>
        <p className={styles.welcome_text}>For anyone in need of security.</p>

        <div>
          <SignInWithGoogleBtn label='Sign up with Google' />
        </div>
        <div className={styles.cta_container}>
          <p className={styles.cta}>Have an account? </p>
          <Link href='/' passHref>
            <p className={styles.signup_text}> Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
