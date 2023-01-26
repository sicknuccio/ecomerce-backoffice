import { useEffect, useState } from "react";
import { GET, DELETE } from "../../http/http";
import { CategoryForm } from "../CategoryForm/CategoryForm";
import { Loader } from "../Loader/Loader";
import Modal from "../Modal/Modal";
import styles from "./styles.module.scss";

export function Category() {
  const [categories, setCategories] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const [ModalActive, setModalActive] = useState({ state: false, type: "" });

  const fetchData = () => {
    setLoading(true);
    GET("categories").then((res) => {
      setCategories(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.main}>
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          {ModalActive.state && (
            <Modal setModalActive={setModalActive}>
              <CategoryForm
                type={ModalActive.type}
                id={ModalActive.id}
                nameToEdit={ModalActive.nameToEdit}
                imageToEdit={ModalActive.imageToEdit}
                setModalActive={setModalActive}
                fetchData={fetchData}
              />
            </Modal>
          )}
          <div className={styles.top_bar}>
            <div>
              <h3>Gestisci le categorie</h3>
              <button
                onClick={() => setModalActive({ state: true, type: "create" })}
              >
                Crea nuova categoria
              </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Foto</th>
                <th>Nome</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item) => {
                const { id, name, image } = item;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      <img src={image} alt="immagine" />
                    </td>
                    <td>{name.slice(0, 10)}</td>
                    <td className={styles.actions_td}>
                      <div>
                        <button
                          className={styles.edit_btn}
                          onClick={() =>
                            setModalActive({
                              state: true,
                              type: "edit",
                              id: id,
                              nameToEdit: name,
                              imageToEdit: image,
                            })
                          }
                        >
                          Edit
                        </button>
                        <button
                          className={styles.remove_btn}
                          onClick={() => {
                            DELETE("categories", id).then(() => {
                              fetchData();
                            });
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
