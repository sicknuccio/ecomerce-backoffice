import styles from "./styles.module.scss";
import { Category } from "../Category/Category";

export function Container({ route }) {
  return (
    <div className={styles.main}>{route === "Categorie" && <Category />}</div>
  );
}
