import Clients from "../Components/Clients";
import Concepts from "../Components/Concepts";
import Featured from "../Components/Featured";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Step from "../Components/Step";
import ScrollToTop from "react-scroll-to-top";
import Slide from "../Components/Slide";
import ModalForm from "../Components/ModalForm";
import Page from "../Components/Page";

export default function Home() {
  return (
    <Page
      title="Casa4u - Móveis Planejados"
      description="Casa4u fornece aos clientes a melhor experiência de ambiente possível, construindo sonhos, seja ele qual for. Cozinha planejada, Lavabos, Quartos planejados, Office e muito mais."
      path="/"
    >
      <ScrollToTop smooth color="#14213d" style={{ borderRadius: 0 }} />
      <Navbar />
      <main className="contextModal">
        <Hero />
        <Step />
        <Projects />
        <Slide />
        <Featured />
        <Clients />
        <Concepts />
        <Footer />
        {/* Modal */}
        <ModalForm />
      </main>
    </Page>
  );
}
