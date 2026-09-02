import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies | Microsistec" },
      { name: "description", content: "Política de Cookies da Microsistec" },
    ],
  }),
  component: PoliticaCookies,
});

function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-[color:var(--brand-orange)]">
          Política de Cookies
        </h1>
        <div className="prose max-w-none text-foreground/90 prose-p:leading-relaxed prose-headings:font-bold prose-a:text-[color:var(--brand-orange)] space-y-6">
          <p>
            Esta Política de Cookies explica como a Microsistec usa cookies e
            tecnologias semelhantes para reconhecê-lo quando você visita nosso
            site. Ela explica o que são essas tecnologias e por que as usamos,
            bem como seus direitos de controlar o uso delas por nós.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">
            1. O que são cookies?
          </h2>
          <p className="text-foreground/80">
            Cookies são pequenos arquivos de dados que são colocados em seu
            computador ou dispositivo móvel quando você visita um site. Eles são
            amplamente utilizados para fazer os sites funcionarem, ou
            funcionarem de forma mais eficiente, bem como para fornecer
            informações de relatórios.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">
            2. Por que usamos cookies?
          </h2>
          <p className="text-foreground/80">
            Utilizamos cookies primários e de terceiros por vários motivos.
            Alguns cookies são necessários por razões técnicas para que nossos
            sites operem e os chamamos de cookies "essenciais" ou "estritamente
            necessários". Outros cookies também nos permitem rastrear e
            segmentar os interesses de nossos usuários para aprimorar a
            experiência em nossas propriedades online.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">
            3. Tipos de cookies que usamos
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-foreground/80">
            <li>
              <strong className="text-foreground font-bold">
                Cookies essenciais:
              </strong>{" "}
              Necessários para fornecer os serviços disponíveis em nosso site e
              para usar alguns de seus recursos.
            </li>
            <li>
              <strong className="text-foreground font-bold">
                Cookies de desempenho e funcionalidade:
              </strong>{" "}
              Usados para melhorar o desempenho e a funcionalidade de nossos
              sites, mas não são essenciais para seu uso.
            </li>
            <li>
              <strong className="text-foreground font-bold">
                Cookies de análise e personalização:
              </strong>{" "}
              Coletam informações que são usadas agregadamente para nos ajudar a
              entender como nossos sites estão sendo usados ou a eficácia de
              nossas campanhas de marketing.
            </li>
          </ul>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">
            4. Como posso controlar os cookies?
          </h2>
          <p className="text-foreground/80">
            Você tem o direito de decidir se aceita ou rejeita os cookies. Você
            pode exercer suas preferências de cookies ajustando as configurações
            do seu navegador para recusar os cookies. Se você optar por rejeitar
            os cookies, ainda poderá usar nosso site, embora seu acesso a
            algumas funcionalidades e áreas de nosso site possa ser restrito.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">
            5. Alterações nesta Política
          </h2>
          <p className="text-foreground/80">
            Podemos atualizar esta Política de Cookies periodicamente para
            refletir mudanças nos cookies que usamos ou por outras razões
            operacionais, legais ou regulatórias.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">6. Contato</h2>
          <p className="text-foreground/80">
            Se você tiver alguma dúvida sobre o uso de cookies ou outras
            tecnologias, envie um e-mail para:{" "}
            <a
              title="Acessar link"
              href="mailto:contato@microsistec.com.br"
              className="text-[color:var(--brand-orange)] hover:underline"
            >
              contato@microsistec.com.br
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
