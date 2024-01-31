import styles from "./styles.module.css";

const Button = ({ label, isFilled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={isFilled ? styles.btn_filled : styles.btn_outline}>
      {label}
    </button>
  );
};

export default Button;
