import Image from "next/image";
import style from "./style.module.css";
import { ButtonHTMLAttributes } from "react";
import { useModalForm } from "../../contexts/ModalFormContext";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: string;
}

export default function Button(props: ButtonProps) {
  const { text, icon } = props;
  const setModalIsOpen = useModalForm((state) => state.setModalIsOpen);

  return (
    <button
      {...props}
      className={style.btn}
      onClick={() => {
        setModalIsOpen(true);
      }}
    >
      {text}
      &nbsp;
      {icon && (
        <Image
          src={`/img/${icon}.svg`}
          width={24}
          height={24}
          alt={`Ícone ${icon}`}
        />
      )}
    </button>
  );
}
