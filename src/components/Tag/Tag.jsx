import styles from "./Tag.module.css";

const Tag = ({ color, children }) => {
  return (
    <span className={styles.tag} style={{ backgroundColor: color }}>
      {children}
    </span>
  );
};

export default Tag;
