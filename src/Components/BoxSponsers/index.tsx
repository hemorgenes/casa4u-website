import Image from "next/image";
import Link from "next/link";
import React from "react";

function BoxSponsers() {
  return (
    <section className="flex items-center py-8 md:min-h-[800px] justify-center w-full ">
      <div className="relative max-w-[900px] w-full h-[600px] md:h-[700px] z-10">
        <Image
          className="brightness-75"
          layout="fill"
          objectFit="cover"
          src="/img/slide-1.webp"
          alt="Imagem ilustrativa"
        />
        <div className="text-white px-3 flex flex-col items-center gap-3 w-full absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 z-10">
          <h2 className="font-bold text-xl md:text-3xl">SOLICITAR ORÇAMENTO</h2>
          <span className="block text-base md:text-2xl -tracking-tighter">
            Todas as novidades sobre decoração e móveis em um só lugar
          </span>
          <Link href="https://wa.me/5511953804114?text=Ol%C3%A1,%20Eu%20gostaria%20de%20solicitar%20um%20or%C3%A7amento">
            <a>
              <button className="bg-white text-black text-lg -tracking-tighter font-light hover:bg-black hover:text-white transition-all px-4 w-fit py-2">
                ACESSAR
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className="absolute bg-[#000] h-[500px] w-[80%]"></div>
    </section>
  );
}

export default BoxSponsers;
