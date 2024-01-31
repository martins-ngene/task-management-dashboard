import styles from "./styles.module.css";

const Modal = ({ children }) => {
  return <div className={styles.modal_container}>{children}</div>;
};

export default Modal;
