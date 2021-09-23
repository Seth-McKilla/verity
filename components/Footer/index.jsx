import * as React from "react";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>{`Copyright ©️ ${new Date().getFullYear()} Verity`}</div>
    </footer>
  );
}
