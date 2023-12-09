import styles from "./Tag.module.css";

const Tag = ({ color, children, ...props }) => {
  return (
    <span
      className={styles.tag}
      style={{
        backgroundColor: color,
        color: color === "white" || color === "#fff"||color === "#ffffff" ? "black" : null,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
