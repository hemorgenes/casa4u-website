import { ReactNode } from "react";
import style from "./style.module.css";
import {
  MdOutlineBedtime,
  MdOutlineKitchen,
  MdOutlineChair,
  MdOutlineWaterDrop,
  MdOutlineCardTravel,
} from "react-icons/md";

type FeaturedProps = {
  id: number;
  icon: ReactNode;
  title: string;
  text: string;
};

export default function Featured() {
  const itemFeatured: FeaturedProps[] = [
    {
      id: 1,
      icon: <MdOutlineChair size={24} />,
      title: "Sala de estar",
      text: "O espaço da família, a área comum, o lugar em que todos se juntam. Criar uma sala de estar que reflita sua vida. Com cores e decorações que façam sentido para um bem estar comum.",
    },
    {
      id: 2,
      icon: <MdOutlineBedtime size={24} />,
      title: "Quarto",
      text: "O lugar que você chama de seu. É no quarto onde recarregamos nossa energia. Onde devemos planejar um ambiente agradável com requinte e sofisticação.",
    },
    {
      id: 3,
      icon: <MdOutlineCardTravel size={24} />,
      title: "Office",
      text: "Um lugar que possa trazer boas energias, conforto e que você possa se ter um bem-estar. Transformar um lugar de trabalho em uma segunda casa.",
    },
    {
      id: 4,
      icon: <MdOutlineKitchen size={24} />,
      title: "Cozinha",
      text: "Um espaço para poder fazer suas refeições com um ambiente totalmente estruturado, limpo e bonito. Construir uma cozinha em que você possa se sentir livre.",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop size={24} />,

      title: "Lavabo",
      text: "É o cartão de visitas de uma propriedade. Um ambiente pensado para atender e agradar aos hóspedes e às pessoas que estão apenas de passagem.",
    },
    {
      id: 6,
      icon: <MdOutlineChair size={24} />,

      title: "Muito mais",
      text: "Uma boa projeção, com estética, conforto e originalidade e a capacidade de instigar sua familiaridade, torna qualquer ambiente acolhedor e agradável.",
    },
  ];

  return (
    <div className={style.featured} id="featured">
      {itemFeatured.map((item) => (
        <div className={style.box_featured} key={item.id}>
          {item.icon}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
