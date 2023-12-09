import styles from "./Header.module.css";
import Container from "../Container/Container";
import Link from "next/link";

const Header = ({ brand, links }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h3>{brand}</h3>
          {links.map((el, i) => (
            <ul key={i}>
              <li>
                <Link className={styles.link} href={"/"}>
                  {el.l1}
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={"/"}>
                  {el.l2}
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={"/"}>
                  {el.l3}
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={"/"}>
                  {el.l4}
                </Link>
              </li>
              <li>
                <Link className={styles.link} href={"/"}>
                  {el.l5}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </Container>
    </header>
  );
};

export default Header;
