// components/Navbar.js
import Link from "next/link";
import styles from "./nav.module.css"; // Import the CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["menu-list"]}>
        <li className={styles["menu-item"]}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles["menu-item"]}>
          <Link href="/about">AboutUs</Link>
        </li>
        <li className={styles["menu-item"]}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles["menu-item"]}>
          <Link href="/careers">Careers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
