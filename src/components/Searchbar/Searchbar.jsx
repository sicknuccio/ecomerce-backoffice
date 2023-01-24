import styles from "./style.module.scss";

import { GrSearch } from "react-icons/gr";

export function Searchbar() {
  return (
    <div className={styles.main}>
      <input type="text" placeholder="Cerca..." />
      <GrSearch />
    </div>
  );
}
