import { useMutation } from "@tanstack/react-query";

import styles from "./styles.module.css";
import Logo from "../logo";
import Profile from "../profile";
import Button from "../buttons";
import { registerUser } from "../../../helpers";

const Navbar = ({ session, signIn, signOut }) => {
  const mutation = useMutation({
    mutationFn: registerUser,
  });

  // Handle Signin And User  Details
  const handleUserSignIn = (session, signIn, signOut) => {
    session ? signOut() : signIn();

    if (typeof window !== "undefined") {
      const email = window.localStorage.getItem("userEmail");

      // Add To LocalStorage
      if (!email) {
        window.localStorage.setItem("userEmail", session.user.email);
      }

      if (email) {
        mutation.mutate({ email: email });
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <Logo />
        <h1 className={styles.routeName}>Dashboard</h1>
      </div>

      <div className={styles.linkContainer}>
        <div>{session && <Profile userDetails={session.user} />}</div>

        <Button
          onClick={() => handleUserSignIn(session, signIn, signOut)}
          isFilled={false}
          label={session ? "Sign out" : "Sign in"}
        />
      </div>
    </div>
  );
};

export default Navbar;
