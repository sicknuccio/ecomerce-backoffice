import { navElements } from "../../costants/navbar";
import { Logo } from "../Logo/Logo";
import { NavbarElement } from "../NavbarElement/NavbarElement";
import styles from "./styles.module.scss";

export function Navbar({ setRoute }) {
  return (
    <nav className={styles.main}>
      <Logo />
      <ul>
        {navElements.map((navEl) => {
          return (
            <NavbarElement
              setRoute={setRoute}
              label={navEl.label}
              icon={navEl.icon}
              key={navEl.id}
            />
          );
        })}
      </ul>
    </nav>
  );
}
