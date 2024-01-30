import Image from "next/image";
import styles from "./styles.module.css";

const Input = ({
  htmlFor,
  label,
  id,
  type,
  placeHolder,
  containerStyles,
  inputValue,
  onChange,
}) => {
  return (
    <div className={`${styles.container} ${containerStyles}`}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeHolder}
        value={inputValue}
      />
      <button className={styles.search_button}>
        <Image src='/search.svg' alt='search icon' width={24} height={24} />
      </button>
    </div>
  );
};

export default Input;
