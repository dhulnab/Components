import styles from "./Button.module.css";

const Button = ({ type, size, children, style }) => {
  return (
    <span
      className={size === "sm" ? styles.sm : size === "md" ? styles.md : null}
    >
      <button
        className={
          type === "secondary"
            ? styles.secondary
            : type === "primary"
            ? styles.primary
            : styles.default
        }
        style={style}
      >
        {children}
      </button>
    </span>
  );
};

export default Button;
