import styles from "./Text.module.css";

const Text = ({ size, bold, color, style, children }) => {
  const combinedStyle = {
    color: color,
    fontWeight: bold === true ? 900 : 400,
    ...style,
    fontSize: size,
  };
  return (
    <span>
      <p style={combinedStyle}>{children}</p>
    </span>
  );
};

export default Text;
