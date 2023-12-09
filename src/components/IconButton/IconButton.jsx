import styles from "./IconButton.module.css";
import { FaSquareTwitter, FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const IconButton = ({ type, size, icon, style }) => {
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
        {icon === "Twitter" ? (
          <FaSquareTwitter />
        ) : icon === "Github" ? (
          <FaSquareGithub />
        ) : icon === "Linkedin" ? (
          <FaLinkedin />
        ) : icon === "Facebook" ? (
          <FaFacebookSquare />
        ) : null}
      </button>
    </span>
  );
};

export default IconButton;
