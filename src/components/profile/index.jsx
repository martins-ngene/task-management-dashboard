import Image from "next/image";

import styles from "./styles.module.css";
const Profile = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          className={styles.image}
          src='/avatar.jpg'
          width={50}
          height={50}
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>John Doe</h2>
        <p className={styles.email}>johndoe@email.com</p>
      </div>
    </div>
  );
};

export default Profile;
