import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" type="image/png" href="/img/miniature.png" />
        <meta property="og:image" content="/thumb.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />  
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nettracker.com.br/" />
        <meta property="twitter:title" content="Casa4u - Móveis Planejados" />
        <meta
          property="twitter:description"
          content="Casa4u fornece aos clientes a melhor experiência de ambiente possível, construindo sonhos, seja ele qual for. Cozinha planejada, Lavabos, Quartos planejados, Office e muito mais."
        />
        <meta property="twitter:image" content="/thumb.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
