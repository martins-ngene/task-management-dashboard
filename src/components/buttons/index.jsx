import styles from "./styles.module.css";

const Button = ({ className, label, isFilled, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        isFilled ? styles.btn_filled : styles.btn_outline
      } ${className}`}>
      {label}
    </button>
  );
};

export default Button;
