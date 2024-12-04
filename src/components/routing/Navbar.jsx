import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/home" className={styles.navLink}>
        Home
      </Link>
      <Link to="/about" className={styles.navLink}>
        About
      </Link>
      <Link to="/contact" className={styles.navLink}>
        Contact
      </Link>
      <Link to="/blog" className={styles.navLink}>
        Blog
      </Link>
    </nav>
  );
};

export default Navbar;
