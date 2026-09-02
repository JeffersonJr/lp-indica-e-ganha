import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Microsistec" },
      {
        name: "description",
        content:
          "Entre em contato com a Microsistec. Canais de atendimento para imobiliárias, corretores e parceiros.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main
        id="contato_main"
        data-gtm-section="contato_main"
        className="pt-32 pb-20 px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-[color:var(--brand-orange)]">
          Fale Conosco
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Estamos prontos para ajudar sua imobiliária a vender mais e atender
          melhor. Escolha o melhor canal para falar com a nossa equipe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[color:var(--brand-sand)]/10 p-8 rounded-3xl border border-[color:var(--brand-ink)]/10">
            <h2 className="text-2xl font-bold mb-6 text-[color:var(--brand-ink)] flex items-center gap-3">
              <Mail className="w-6 h-6 text-[color:var(--brand-orange)]" />
              E-mail
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  Suporte Técnico
                </p>
                <a
                  href="mailto:suporte@microsistec.com.br"
                  data-gtm-cta="email_suporte"
                  data-gtm-location="contato_main"
                  className="text-lg font-medium hover:text-[color:var(--brand-orange)] transition"
                >
                  suporte@microsistec.com.br
                </a>
              </div>
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  Financeiro
                </p>
                <a
                  href="mailto:financeiro@microsistec.com.br"
                  data-gtm-cta="email_financeiro"
                  data-gtm-location="contato_main"
                  className="text-lg font-medium hover:text-[color:var(--brand-orange)] transition"
                >
                  financeiro@microsistec.com.br
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[color:var(--brand-sand)]/10 p-8 rounded-3xl border border-[color:var(--brand-ink)]/10">
            <h2 className="text-2xl font-bold mb-6 text-[color:var(--brand-ink)] flex items-center gap-3">
              <Phone className="w-6 h-6 text-[color:var(--brand-orange)]" />
              Telefone
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  Central de Atendimento
                </p>
                <p className="text-lg font-medium">+55 (13) 3227-8090</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
