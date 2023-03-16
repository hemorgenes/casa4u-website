import style from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type ClientProps = {
  id: number;
  name: string;
  imageSrc: string;
  text: string;
};

export default function Clients() {
  const clients: ClientProps[] = [
    {
      id: 1,
      name: "Evandro Rodrigues",
      imageSrc: "/img/avatar-1.webp",
      text: `Eu precisava de um escritório bem decorado, com um ambiente simples e bonito. A Casa4u conseguiu trazer isso pra mim, nenhum espaço ficou mal preenchido e o resultado ficou impecável.`,
    },
    {
      id: 2,
      name: "Marcos Pereira ",
      imageSrc: "/img/avatar-2.webp",
      text: `A dedicação e comprometimento dessa equipe é de tirar o chapéu, hoje tenho o quarto dos meus sonhos graças a vocês, obrigado por todo o carinho.`,
    },
  ];

  return (
    <div className={style.clients} id="testimoni">
      <div className={style.clients_section}>
        <div>
          <h1>
            O que estão dizendo <br />
            sobre a <b className="text-[#DCBE52]">CASA4U</b>?
          </h1>
          <p>
            Depoimentos de clientes que já contrataram nossos serviços.
            Trabalhamos com total dedicação prezando a mais alta sofisticação,
            inovação e originalidade.{" "}
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className={style.mySwiper}
          >
            {clients.map((client) => {
              return (
                <SwiperSlide className={style.swiper_slide} key={client.id}>
                  <div className={style.client_says}>
                    <h1>‘’</h1>
                    <p>{client.text}</p>
                  </div>
                  <div className={style.avatar}>
                    <div className={style.imageAvatar}>
                      <img src={client.imageSrc} alt={client.name} />
                    </div>
                    <p>{client.name}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
