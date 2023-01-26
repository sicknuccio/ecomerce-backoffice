import styles from "./styles.module.scss";
import { Category } from "../Category/Category";
import { Product } from "../Product/Product";

export function Container({ route }) {
  return (
    <div className={styles.main}>
      {route === "Categorie" && <Category />}
      {route === "Prodotti" && <Product />}
    </div>
  );
}
