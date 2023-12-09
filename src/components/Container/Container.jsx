import styles from "./Container.module.css";

const Container = ({ children, Width = 1000, style }) => {
  const sty = {
    ...style,
    maxWidth: Width,
  };
  return (
    <div style={sty} className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
