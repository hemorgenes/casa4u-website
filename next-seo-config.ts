const title = "Casa4u - Móveis Planejados";
const description =
  "Casa4u fornece aos clientes a melhor experiência de ambiente possível, construindo sonhos, seja ele qual for. Cozinha planejada, Lavabos, Quartos planejados, Office e muito mais.";

export const SEO = {
  title,
  description,
  canonical: "http://localhost:3000/",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "http://localhost:3000/",
    title,
    description,
    images: [
      {
        url: "/img/img-3.png",
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
};
