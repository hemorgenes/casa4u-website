import { useModalForm } from "../../contexts/ModalFormContext";
import style from "./style.module.css";
export default function Concepts() {
  const setModalIsOpen = useModalForm((state) => state.setModalIsOpen);

  return (
    <div className={style.concept}>
      <h1>
        Tenha uma incrível experiência
        <br />
        Conosco!
      </h1>
      <div className={style.button_box}>
        <button onClick={() => setModalIsOpen(true)}>Entrar em contato</button>
      </div>
    </div>
  );
}
