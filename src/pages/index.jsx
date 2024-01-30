import { Inter } from "next/font/google";
import Link from "next/link";
// import { useSession, signIn } from "next-auth/react";

import styles from "@/styles/Signin.module.css";
import { SignInWithGoogleBtn, SubmitBtn } from "@/components/buttons";
import Logo from "@/components/logo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Get Session
  // const { data: session } = useSession();

  // console.log(session);
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.form_container}>
          {/* <div className={styles.logo_container}>
            <Logo />
          </div> */}
          <h1 className={styles.header}>Welcome back</h1>
          <p className={styles.welcome_text}>
            Welcome back! Please enter your details.
          </p>

          <div>
            <SignInWithGoogleBtn
              // onClick={() => signIn()}
              label='Sign in with Google'
            />
          </div>
          <div className={styles.cta_container}>
            <p className={styles.cta}>Don&apos;t have an account? </p>
            <Link href='/sign_up' passHref>
              <p className={styles.signup_text}> Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
