import style from "./style.module.css";
const Fade = require("react-reveal/Fade");
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
      <Fade left duration={700} distance="100px">
        <div>
          <Image
            src="/img/img-step.webp"
            width={575}
            height={710}
            objectFit="cover"
            alt="Imagem ilustrativa"
          />
        </div>
      </Fade>
      <div>
        <Fade bottom duration={700} distance="100px">
          <h1 style={{ margin: "0" }}>
            Simples <u>etapas,</u>
            <br />
            Grandes <u>Mudanças</u>
          </h1>
        </Fade>
        <Fade bottom duration={700} distance="50px" delay="100">
          <p>
            Tudo acontece dentro do lar: nos quartos os sonhos ganham vida, na
            cozinha damos corpo as emoções, histórias são feitas nas salas. Com
            a nossa cara e o nosso estilo, o nosso lar é onde cada milímetro diz
            que a gente é por completo. Confira as etapas desse procedimento:
          </p>
        </Fade>
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
