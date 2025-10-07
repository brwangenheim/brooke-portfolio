import React from "react";
import styles from "../styles/modules/header.module.css";

export default function Header() {
  return (
    <header id="top" className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a
            href="#"
            className={styles.logo}
            aria-label="Go to home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            BW
          </a>
        </div>
        <nav className={styles.center}>
          <a href="#about" className={styles.link}>
            About
          </a>
          <a href="#projects" className={styles.link}>
            Projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Resume
          </a>
          <a href="#footer" className={styles.link}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
