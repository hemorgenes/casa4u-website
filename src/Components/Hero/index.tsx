import Image from "next/image";
import Link from "next/link";
const Fade = require("react-reveal/Fade");

export default function Hero() {
  return (
    <section className=" md:py-16 px-8 md:px-0 text-center mt-12 md:mt-10 w-full flex flex-col items-center justify-center gap-12">
      <Fade bottom duration={700} distance="100px">
        <h2 className="uppercase md:mb-20  text-gray-800 text-2xl tracking-widest">
          Conheça nossa história
        </h2>
      </Fade>
      <div className="relative md:h-[500px] flex w-full flex-col md:flex-row items-center gap-6 md:gap-12 justify-center">
        <Fade bottom duration={700} distance="100px">
          <div className="relative w-full md:max-w-[600px] h-[300px] md:h-[600px] ">
            <Image
              className="brightness-50 hover:opacity-70 transition-all"
              src={"/img/hero-1.webp"}
              layout="fill"
              alt=""
            />
            <div className="absolute  z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="block uppercase  -tracking-tighter text-3xl text-white font-bold">
                Sobre nós
              </span>
              <Link href="https://www.instagram.com/p/CpiUURrpdTc/">
                <a target={"_blank"}>
                  <button className="text-white uppercase border w-full py-2 mt-4 hover:bg-white hover:text-black transition-colors">
                    saber mais
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={700} distance="100px" delay="200">
          <div className="relative w-full md:max-w-[600px] h-[300px] md:h-[600px] ">
            <Image
              className="brightness-50 hover:opacity-70 transition-all"
              src={"/img/hero-2.webp"}
              layout="fill"
              alt=""
            />
            <div className="absolute  z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="block uppercase  -tracking-tighter text-3xl text-white font-bold">
                4 pilares da casaa4u
              </span>
              <Link href="https://www.instagram.com/p/Cp0TiWTrwfI/">
                <a target={"_blank"}>
                  <button className="text-white uppercase border w-full py-2 mt-4 hover:bg-white hover:text-black transition-colors">
                    saber mais
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
