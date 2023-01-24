import { Searchbar } from "../Searchbar/Searchbar";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <div className={styles.main}>
      <Searchbar />
    </div>
  );
}
