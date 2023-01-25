import "./index.css";

const Modal = ({ children, setModalActive }) => {
  return (
    <div className="Modal">
      <div className="content">{children}</div>
      <div className="overlay" onClick={() => setModalActive(false)}></div>
    </div>
  );
};

export default Modal;
