import style from "./style.module.css";
import Button from "../Button";
import { useState } from "react";

type ObjectProps = {
  id: number;
  image: string;
  text: string;
};

type AppStateProps = {
  activeObject: ObjectProps | null;
  objects: ObjectProps[];
};

export default function Projects() {
  const [appState, changeState] = useState<AppStateProps>({
    activeObject: null,
    objects: [
      {
        id: 1,
        image: "project-1.webp",
        text: "Cozinha",
      },
      {
        id: 2,
        image: "project-2.webp",
        text: "Reunião",
      },
      {
        id: 3,
        image: "project-3.webp",
        text: "Office",
      },
      {
        id: 4,
        image: "project-4.webp",
        text: "Armário",
      },
    ],
  });

  function toggleActive(key: number) {
    changeState({ ...appState, activeObject: appState.objects[key] });
  }

  const [firstItemActive, setFirstItemActive] = useState(true);

  return (
    <div className={style.section_projects} id="projects">
      <h1>
        <u>Projetos</u>
      </h1>
      <div className={style.projects}>
        {appState.objects.map((item: ObjectProps, key: number) => (
          <div
            className={`${style.project} ${
              appState.objects[key] == appState.activeObject ? style.active : ""
            } ${key == 0 ? `${firstItemActive ? style.active : ""}` : ""}`}
            style={{ backgroundImage: `url(/img/${item.image})` }}
            key={key}
            onClick={() => {
              toggleActive(key);
              setFirstItemActive(false);
            }}
          >
            <h2>{item.text}</h2>
            <Button icon="Send" />
          </div>
        ))}
      </div>
    </div>
  );
}
