import Button from "../Button";
import style from "./style.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper";
import Image from "next/image";

export default function Slide() {
  const slides = [
    {
      id: 1,
      title: "Sofisticação e Qualidade",
      srcImg: "/img/slide-1.webp",
      description: "Oferecemos um ótimo design e uma estrutra impecável",
    },
    {
      id: 2,
      title: "Conforto e Bem-estar",
      srcImg: "/img/slide-2.webp",
      description:
        "Transforme sua sala em um lugar que transmita energias boas",
    },
    {
      id: 3,
      title: "Agradável e Autêntico",
      srcImg: "/img/slide-3.webp",
      description:
        "Agrade você e as suas visitas com lavabo bem decorado e autêntico",
    },
  ];

  return (
    <div className={style.containerSlide}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: false,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
        id="my-styles-swiper"
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className={`${style.itemSlide}`}>
                <div className={`${style.overlay}`} />
                <div className={`${style.content}`}>
                  <h2>{slide.title}</h2>
                  <span>{slide.description}</span>
                  <Button text="Entrar em contato" icon="Send" />
                </div>
                <Image
                  className="img-slide"
                  layout="fill"
                  objectFit="cover"
                  src={slide.srcImg}
                  alt={slide.title}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
