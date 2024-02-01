import Image from "next/image";

import styles from "./styles.module.css";
const Profile = ({ userDetails }) => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          className={styles.image}
          src={userDetails.image}
          alt='avatar'
          priority
          width={50}
          height={50}
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{userDetails.name}</h2>
        <p className={styles.email}>{userDetails.email}</p>
      </div>
    </div>
  );
};

export default Profile;
