import { useEffect, useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, CloseBtnContent, onClose, children }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setModal(false);
    onClose();
  };

  return (
    <>
      {modal ? (
        <div className={styles.modal}>
          <div onClick={closeModal} className={styles.overlay}></div>
          <div className={styles.content}>
            {children}

            <button
              onClick={closeModal}
              className={
                CloseBtnContent == null
                  ? styles.buttonClose
                  : styles.buttonClose2
              }
            >
              {CloseBtnContent == null ? "X" : CloseBtnContent}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
