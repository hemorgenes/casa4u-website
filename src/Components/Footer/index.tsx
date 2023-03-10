import Link from "next/link";
import style from "./style.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_item}>
        <div>
          <div>
            <img src="/img/logo.svg" alt="Logo Casa4U" />
            <h2>CASA4U</h2>
          </div>
          <p>
            - A Casa4u é um escritório de móveis planejados para diversos
            partimentos contemporâneos com sede em Morumbi - São Paulo. Fundada
            por <u>Hermogenes Capiotto</u>.
          </p>
          <p>
            Rua Dr Luiz Migliano, 1896 - Sala 1016 - 10 andar
            <br />
            CEP: 05711-001 JD Caboré - Morumbi - SP
          </p>
        </div>
        <div>
          <div>
            <h4>
              <u>Navegação</u>
            </h4>
            <Link href="#home">
              <a>Ínicio</a>
            </Link>
            <Link href="#featured">
              <a>Serviços</a>
            </Link>

            <Link href="#products">
              <a>Produtos</a>
            </Link>

            <Link href="#testimoni">
              <a>Depoimentos</a>
            </Link>
          </div>
          <div>
            <h4>
              <u>Produtos</u>
            </h4>
            <p>Quarto</p>
            <p>Sala de estar</p>
            <p>Office</p>
            <p>Cozinha</p>
          </div>
          <div>
            <h4>
              <u>Ajuda & Soluções</u>
            </h4>
            <p>Compreender</p>
            <p>Atender</p>
            <p>Satisfazer</p>
            <p>Agradar</p>
          </div>
          <div>
            <h4>
              <u>Redes sociais</u>
            </h4>
            <Link href="https://www.instagram.com/casa4u_oficial/">
              <a target="_blank">Instagram</a>
            </Link>
            <Link href="https://twitter.com/Casa4u_oficial">
              <a target="_blank">Twitter</a>
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=5511979588987">
              <a target="_blank">Whatsapp</a>
            </Link>
            <Link href="https://www.linkedin.com/company/casa4u/">
              <a target="_blank">Linkedin</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.footer_terms}>
        <p>Copyright &copy; {new Date().getFullYear()} Casa4u</p>
        <p>Termos e condições - Política de privacidade</p>
      </div>
    </footer>
  );
}
