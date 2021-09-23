import styles from "./index.module.css";

export default function Content({ children }) {
  return <main className={styles.main}>{children}</main>;
}
