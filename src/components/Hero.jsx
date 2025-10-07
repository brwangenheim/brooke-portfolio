import React from "react";
import styles from "../styles/modules/hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.meta}>
        <h1 className={styles.h1}>BROOKE WANGENHEIM</h1>
        <h2 className={styles.h2}> Computer Science @ Brown '26</h2>
        <p className={styles.p}>
          I'm passionate about creating
          human-centered technology at the intersection of software engineering, AI, and
          data science. Currently seeking full-time opportunities.
        </p>
            </div>
    </section>
  );
}

export default Hero;
