import Button from "../buttons";
import styles from "./styles.module.css";

const Card = ({ onClick, title, description, deadline, status }) => {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.header}>
          <p className={styles.notify}></p>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.deadline}>
          <span>Deadline:</span> {deadline}
        </p>
      </div>
      <div className={styles.cardFooter}>
        <p className={styles.status}>{status}</p>
        <Button onClick={onClick} isFilled={false} label='View' />
      </div>
    </div>
  );
};

export default Card;
