import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";

export default function Step() {
  const [appState, changeState] = useState<any>({
    activeObject: null,
    objects: [
      {
        id: 1,
        image: "edit.svg",
        image_active: "edit-active.svg",
        text: "Desenhar seu sonho",
      },
      {
        id: 2,
        image: "stack.svg",
        image_active: "stack-active.svg",
        text: "Construir e transformar",
      },
      {
        id: 3,
        image: "home.svg",
        image_active: "home-active.svg",
        text: "Pronto para ser usado  ",
      },
    ],
  });

  function toggleActive(key: any) {
    changeState({ ...appState, activeObject: appState.objects[key] });
  }

  const [firstItemActive, setFirstItemActive] = useState(true);

  return (
    <div className={style.step}>
      <div>
        <Image
          src="/img/img-step.webp"
          width={575}
          height={710}
          alt="Imagem ilustrativa"
        />
      </div>
      <div>
        <h1 style={{ margin: "0" }}>
          Simples <u>etapas,</u>
          <br />
          Grandes <u>Mudanças</u>
        </h1>
        <p>
          A Casa <b>for you (4U)</b> foi concebida a para atender as mais
          variadas necessidades. Está claro para nós que a elegância e
          sofisticação devem ser trata como prioridade para nossos clientes. Não
          é apenas uma questão de vender serviço e produto, nossa proposta vai
          muito além disso. Cremos que vender uma vez é fácil, difícil é fazer
          parte da vida das pessoas de forma positiva.
        </p>
        <div className={style.box_steps}>
          {appState.objects.map((item: any, key: any) => (
            <div
              className={` ${style.box} ${
                appState.objects[key] == appState.activeObject
                  ? style.active
                  : ""
              } ${key == 0 ? `${firstItemActive ? style.active : ""}` : ""} `}
              onMouseOver={() => {
                toggleActive(key);
                setFirstItemActive(false);
              }}
              key={key}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/img/${
                  appState.objects[key] == appState.activeObject
                    ? item.image_active
                    : `${
                        key == 0
                          ? `${
                              firstItemActive ? item.image_active : item.image
                            }`
                          : item.image
                      } `
                }`}
                alt="Imagem atual"
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <Button text="Entre em contato" icon="Send" />
      </div>
    </div>
  );
}
