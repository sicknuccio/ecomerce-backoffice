import styles from "./styles.module.scss";

export function NavbarElement({ label, icon, setRoute }) {
  return (
    <li onClick={() => setRoute(label)} className={styles.main}>
      <div>{icon}</div>
      <span> {label} </span>
    </li>
  );
}
