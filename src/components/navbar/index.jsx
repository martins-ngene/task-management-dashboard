import styles from "./styles.module.css";
import Logo from "../logo";
import Profile from "../profile";
import Button from "../buttons";

const Navbar = ({ isLoggedIn = true, onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <Logo />
        <h1 className={styles.routeName}>Dashboard</h1>
      </div>

      <div className={styles.linkContainer}>
        <div>{isLoggedIn && <Profile />}</div>

        <Button
          onClick={onClick}
          isFilled={false}
          label={isLoggedIn ? "Sign out" : "Sign in"}
        />
      </div>
    </div>
  );
};

export default Navbar;
