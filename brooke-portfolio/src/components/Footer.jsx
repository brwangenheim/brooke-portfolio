import React from "react";
import styles from "../styles/modules/footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.p}>© 2025 Brooke Wangenheim. Built with React & Vite.</p>
        </div>
        <div className={styles.links}>
          <a
            href="mailto:brooke_wangenheim@brown.edu"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
            className={styles.link}
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path d="M2 4h20v16H2V4zm2 2v.01L12 13l8-6.99V6H4zm0 2.24V20h16V8.24l-8 7.01-8-7.01z" />
            </svg>
            Email
          </a>
          <a
            href="https://linkedin.com/in/brooke-wangenheim"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className={styles.link}
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9.5 16V10H7v9h2.5zm-1.25-10.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM17 19v-4.5c0-2.5-3-2.31-3 0V19H12v-4.5c0-3.5 4-3.37 4 0V19h-1z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/brooke-wangenheim"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className={styles.link}
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
