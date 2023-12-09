import { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen = false, CloseBtnContent, onClose, children }) => {
  const [modal, setModal] = useState(isOpen);

  const openModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
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
      <button className={styles.buttonOpen} onClick={openModal}>
        Open
      </button>
    </>
  );
};
export default Modal;
