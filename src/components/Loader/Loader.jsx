import styles from "./styles.module.scss";

export function Loader({ isLoading }) {
  return <div className={styles.main}>{isLoading ? "Caricamento..." : ""}</div>;
}
