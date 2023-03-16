import style from "./style.module.css";
const Fade = require("react-reveal/Fade");
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


export default function Projects() {
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
    <div className={style.section_projects} id="projects">
      <Fade bottom duration={700} distance="50px">
        <h1 className="text-xl -tracking-tighter md:text-3xl text-center pb-10 pt-10 md:pt-14 md:pb-14">
          AMBIENTES
        </h1>
      </Fade>
      <div>
        <Swiper
          spaceBetween={30}
          effect={"slide"}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: false,
          }}
          modules={[Pagination]}
          className="mySwiper"
          id="my-styles-swiper"
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide key={slide.id} className=" mb-10">
                <div className={`h-[300px] w-full`}>
                  <Image
                    blurDataURL={slide.srcImg}
                    placeholder="blur"
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
    </div>
  );
}
