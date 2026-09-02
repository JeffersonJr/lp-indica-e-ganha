import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Microsistec" },
      {
        name: "description",
        content: "Política de Privacidade da Microsistec",
      },
    ],
  }),
  component: PoliticaPrivacidade,
});

function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-[color:var(--brand-orange)]">
          Política de Privacidade
        </h1>
        <div className="prose max-w-none text-foreground/90 prose-p:leading-relaxed prose-headings:font-bold prose-a:text-[color:var(--brand-orange)] space-y-6">
          <p>
            Na Microsistec, levamos a sua privacidade a sério. Esta política
            descreve como coletamos, usamos e protegemos as suas informações
            pessoais.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">
            1. Informações que Coletamos
          </h2>
          <p className="text-foreground/80">
            Podemos coletar informações pessoais que você nos fornece
            diretamente, como nome, endereço de e-mail e número de telefone,
            quando você entra em contato conosco ou se cadastra em nossos
            serviços.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">
            2. Como Usamos as Informações
          </h2>
          <p className="text-foreground/80">
            Utilizamos as informações para fornecer, manter e melhorar nossos
            serviços, além de nos comunicarmos com você sobre atualizações,
            ofertas e novidades da plataforma.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">
            3. Compartilhamento de Informações
          </h2>
          <p className="text-foreground/80">
            Não compartilhamos suas informações pessoais com terceiros, exceto
            quando estritamente necessário para fornecer nossos serviços,
            mediante sua autorização ou quando exigido por lei.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">4. Segurança</h2>
          <p className="text-foreground/80">
            Adotamos as melhores práticas e medidas de segurança técnicas e
            organizacionais para proteger suas informações contra acesso não
            autorizado, perda, alteração ou destruição.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">
            5. Seus Direitos
          </h2>
          <p className="text-foreground/80">
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o
            direito de solicitar o acesso, a correção ou a exclusão das suas
            informações pessoais a qualquer momento.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">
            6. Alterações nesta Política
          </h2>
          <p className="text-foreground/80">
            Podemos atualizar esta política de privacidade periodicamente para
            refletir mudanças em nossas práticas ou por outras razões
            operacionais, legais ou regulatórias.
          </p>

          <h2 className="text-3xl mt-10 mb-4 text-foreground">7. Contato</h2>
          <p className="text-foreground/80">
            Se você tiver alguma dúvida sobre esta política ou quiser exercer
            seus direitos, entre em contato conosco através do e-mail:{" "}
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
