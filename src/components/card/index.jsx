import styles from "./styles.module.css";

const Card = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.notify}></p>
        <h2 className={styles.title}>Implement User Authentication</h2>
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorum
        perspiciatis architecto excepturi porro! Rerum, nobis repellendus
        facilis vitae, tenetur harum doloremque cum dolorem voluptates esse
        nostrum laboriosam accusamus officia!
      </p>
      <p className={styles.deadline}>
        <span>Deadline:</span> 11th - 15th August 2023
      </p>
      <div className={styles.cardFooter}>
        <p className={styles.status}>status</p>
        <button onClick={onClick}>view</button>
      </div>
    </div>
  );
};

export default Card;
