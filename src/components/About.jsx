import React from "react";
import styles from "../styles/modules/about.module.css";
import profileImage from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2 className={styles.title}>ABOUT ME</h2>
          <p className={styles.kicker}>Software Engineering • AI • Data</p>
        </div>

        <div className={styles.grid}>
          <section className={styles.textRow}>
            <div className={styles.photoWrap}>
              <img src={profileImage} alt="Brooke Wangenheim" className={styles.photo} />
            </div>
            <div className={styles.copy}>
            <p className={styles.lead}>
              I'm a senior at Brown University building pragmatic, human‑centered software at the
              intersection of SWE and applied ML. I care about shipping reliable systems, clear
              interfaces, and work that measurably improves how people do their jobs.
            </p>
            <p className={styles.body}>
              Recently, I engineered AI automation at The Carlyle Group to dramatically reduce
              analyst time on unstructured financial data; contributed ML research in the Tripathi
              Lab; and supported platform work with Brown DSI. I like owning problems end‑to‑end:
              shaping scope, designing straightforward solutions, and iterating quickly with users.
            </p>
            <p className={styles.body}>
              I'm looking for a software engineering role on a small, product‑minded team where I
              can take responsibility for features, learn from strong peers, and keep raising the
              bar on quality and clarity.
            </p>
            <p className={styles.body}>
            Unplugged, you can find me perfecting my matcha latte recipe, front-row at a concert, or somewhere in the ocean. 
            </p>

            <div className={styles.pillsRow}>
              <span className={styles.pill}>Python</span>
              <span className={styles.pill}>TypeScript</span>
              <span className={styles.pill}>React</span>
              <span className={styles.pill}>PyTorch</span>
              <span className={styles.pill}>AWS</span>
              <span className={styles.pill}>SQL</span>
            </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
