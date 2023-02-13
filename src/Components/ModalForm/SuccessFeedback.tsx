import React from "react";
import { useForm } from "react-hook-form";
import { BsCheck2Circle } from "react-icons/bs";
import { useModalForm } from "../../contexts/ModalFormContext";
import styles from "./style.module.css";

function SuccessFeedback() {
  const setIsLoading = useModalForm((state) => state.setIsLoading);
  const setModalIsOpen = useModalForm((state) => state.setModalIsOpen);
  const setIsSuccessSendForm = useModalForm(
    (state) => state.setIsSuccessSendForm
  );

  const { reset } = useForm();

  const closeModal = () => {
    setIsSuccessSendForm(false);
    setIsLoading(false);
    setModalIsOpen(false);
    reset(undefined, {
      keepValues: false,
    });
  };

  return (
    <div className={styles.containerSuccess}>
      <BsCheck2Circle size={96} color="#2fd659" className={styles.check} />
      <span>Mensagem enviada, em breve entraremos em contato :)</span>
      <button onClick={closeModal}>fechar</button>
    </div>
  );
}

export default SuccessFeedback;
