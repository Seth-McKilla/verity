import styles from "./index.module.css";

// Mui
import { default as MuiContainer } from "@mui/material/Container";

export default function Container({ children }) {
  return (
    <MuiContainer className={styles.container} maxWidth="sm">
      {children}
    </MuiContainer>
  );
}
