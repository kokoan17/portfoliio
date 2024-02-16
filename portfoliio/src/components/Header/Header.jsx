import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-scroll"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div className={`${styles.header} ${isScrolled ? styles.scrolled : ``}`}>
      <ul className={styles.nav_items}>
        <li>
          <Link className={styles.nav_item} spy smooth activeClass={styles.active} to="start">
            Hello
          </Link>
        </li>
        <li>
          <Link className={styles.nav_item} spy smooth activeClass={styles.active} to="about">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.nav_item} spy smooth activeClass={styles.active} to="tools">
            Tools
          </Link>
        </li>
        <li>
          <Link className={styles.nav_item} spy smooth activeClass={styles.active} to="experience">
            Work
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
