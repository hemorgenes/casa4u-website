import { Navbar, Link, Text } from "@nextui-org/react";
import Image from "next/image";
import { FaWhatsappSquare } from "react-icons/fa";
import { useModalForm } from "../../contexts/ModalFormContext";

export default function NavbarComponent() {
  const collapseItems = [
    {
      text: "Whatsapp",
      href: "https://api.whatsapp.com/send?phone=5511953804114",
      color: "success",
    },
    {
      text: "Facebook",
      href: "https://www.facebook.com/people/Casa-4U-M%C3%B3veis-Planejados/100090892625224/",
      color: "primary",
    },
    {
      text: "Instagram",
      href: "https://www.linkedin.com/company/casa4u_",
      color: "secondary",
    },
  ];

  const setModalIsOpen = useModalForm((state) => state.setModalIsOpen);

  return (
    <header className="md:px-16 px-4 py-3">
      <Navbar id="navbar" variant="static">
        <Image
          src={"/img/logo.svg"}
          width={130}
          height={60}
          alt="Logo casa4u"
        />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Navbar.Toggle showIn="xs" />
        </Navbar.Brand>
        <Navbar.Content activeColor="neutral" hideIn="xs">
          <Navbar.Link color={"text"} href="#">
            Inicio
          </Navbar.Link>
          <Navbar.Link color={"text"} href="#projects">
            Ambientes
          </Navbar.Link>
          <Navbar.Link color={"text"} href="#testimoni">
            Depoimentos
          </Navbar.Link>
          <Navbar.Link color={"text"} href="#contact">
            <button>Contato</button>
          </Navbar.Link>
          <Navbar.Link
            color={"text"}
            href="https://api.whatsapp.com/send?phone=5511953804114"
            target={"_blank"}
          >
            <FaWhatsappSquare size={30} color="#16d696" />
          </Navbar.Link>
        </Navbar.Content>

        <Navbar.Collapse>
          <h2 className="text-xl mb-4 font-semibold text-gray-800">
            Redes sociais
          </h2>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item.text} activeColor="neutral">
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={item.href}
                target="_blank"
              >
                <span className="text-gray-500">{item.text}</span>
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
