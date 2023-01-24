import { useEffect, useState } from "react";
import { GET } from "../../http/http";
import { Loader } from "../Loader/Loader";
import styles from "./styles.module.scss";

export function Category() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GET("categories").then((res) => {
      setCategories(res);
      setLoading(false);
    });
  }, []);
  return (
    <div className={styles.main}>
      <button>New Category</button>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item) => {
              const { id, name, image } = item;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name.slice(0, 10)}</td>
                  <td>
                    <img src={image} alt="immagine" />
                  </td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
