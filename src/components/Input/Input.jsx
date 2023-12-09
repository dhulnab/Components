import styles from "./Input.module.css";

const Input = ({ placeholder, value, onChange, style, ...props }) => {
  return (
    <span>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
        style={{ ...style }}
      />
    </span>
  );
};

export default Input;
