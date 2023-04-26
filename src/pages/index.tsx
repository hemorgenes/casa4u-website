import ScrollToTop from "react-scroll-to-top";
//@ts-ignore
import TawkTo from "tawkto-react";
import Navbar from "../Components/Navbar";
import Slide from "../Components/Slide";
import Page from "../Components/Page";
import Hero from "../Components/Hero";
import Step from "../Components/Step";
import Projects from "../Components/Projects";
import Concepts from "../Components/Concepts";
import Clients from "../Components/Clients";
import Featured from "../Components/Featured";
import Footer from "../Components/Footer";
import BoxSponsers from "../Components/BoxSponsers";
import ModalForm from "../Components/ModalForm";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    var tawk = new TawkTo(process.env.NEXT_PUBLIC_PROPERTY_ID, process.env.NEXT_PUBLIC_TAWK_ID);

    tawk.onStatusChange((status: any) => {
      console.log(status);
    });
  }, []);

  return (
    <Page
      title="Casa4u - Móveis Planejados"
      description="Casa4u fornece aos clientes a melhor experiência de ambiente possível, construindo sonhos, seja ele qual for. Cozinha planejada, Lavabos, Quartos planejados, Office e muito mais."
      path="/"
    >
      <ScrollToTop
        smooth
        color="#14213d"
        style={{
          borderRadius: 100,
          padding: "0rem 0rem 0rem .4rem",
          zIndex: 20,
        }}
      />
      <Navbar />
      <main className="contextModal">
        <Slide />
        <Hero />
        <Step />
        <Projects />
        <Featured />
        <BoxSponsers />
        <Clients />
        <Concepts />
        <Footer />
        {/* Modal */}
        <ModalForm />
      </main>
    </Page>
  );
}
