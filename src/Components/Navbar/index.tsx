import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <header>
      <nav id="nav" className={style.nav}>
        <Link href="/">
          <a className="casa4u">Casa4u</a>
        </Link>
        <Image src="/img/logo.svg" width={32} height={32} alt="Logo Casa4u" />
        <OutsideClickHandler onOutsideClick={() => setOffCanvas(false)}>
          <Image
            src="/img/menu.svg"
            width={32}
            height={32}
            style={{ cursor: "pointer" }}
            onClick={() => setOffCanvas(true)}
            alt="ícone de menu"
          />
        </OutsideClickHandler>
      </nav>
      <div className={`${style.canvas_menu} ${offCanvas ? style.active : ""} `}>
        <div className={style.close_icon}>
          <Image
            src="/img/close.svg"
            width={32}
            height={32}
            onClick={() => setOffCanvas(false)}
            alt="Ícone de fechar o menu"
          />
        </div>
        <div className={style.canvas_content}>
          <div className={style.social}>
            <h4>Redes sociais</h4>

            <div>
              <Link href="https://www.instagram.com/casa4u_oficial/">
                <a target="_blank">
                  <p>
                    <AiOutlineInstagram
                      width={32}
                      style={{ color: "#E1BF44" }}
                    />
                    <span>&nbsp; Instagram</span>
                  </p>
                </a>
              </Link>
              <Link href="https://twitter.com/Casa4u_oficial">
                <a target="_blank">
                  <p>
                    <FiTwitter width={32} style={{ color: "#E1BF44" }} />
                    <span>&nbsp; Twitter</span>
                  </p>
                </a>
              </Link>

              <Link href="https://www.linkedin.com/company/casa4u/">
                <a target="_blank">
                  <p>
                    <FiLinkedin width={32} style={{ color: "#E1BF44" }} />
                    <span>&nbsp; Linkedin</span>
                  </p>
                </a>
              </Link>
              <Link href="https://api.whatsapp.com/send/?phone=5511979588987">
                <a target="_blank">
                  <p>
                    <BsWhatsapp width={32} style={{ color: "#E1BF44" }} />
                    <span>&nbsp; Whatsapp</span>
                  </p>
                </a>
              </Link>
            </div>
          </div>

          <div className={style.menu}>
            <h4>Menu</h4>
            <p style={{ marginTop: 0 }}>
              <a href="#home" onClick={() => setOffCanvas(false)}>
                Ínicio
              </a>
            </p>
            <p>
              <a href="#featured" onClick={() => setOffCanvas(false)}>
                Serviços
              </a>
            </p>
            <p>
              <a href="#projects" onClick={() => setOffCanvas(false)}>
                Projetos
              </a>
            </p>
            <p>
              <a href="#testimoni" onClick={() => setOffCanvas(false)}>
                Depoimentos
              </a>
            </p>
          </div>
        </div>

        <div className={style.email}>
          <p>Entre em contato</p>
          <h2>
            <u>contato@casa4u.com.br</u>
          </h2>
        </div>
      </div>
    </header>
  );
}
