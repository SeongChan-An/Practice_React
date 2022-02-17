import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => (
  <footer className={styles.footer}>
    <p className={styles.title}>React, Firebase, Cloudinary</p>
    <p className={styles.description}>React Hook, React Router</p>
  </footer>
));

export default Footer;
