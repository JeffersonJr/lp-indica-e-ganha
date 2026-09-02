import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { CheckCircle2, ArrowRight } from "lucide-react";
import * as React from "react";

export const Route = createFileRoute("/obrigado-corretor")({
  head: () => ({
    meta: [
      { title: "Tudo certo! | Microsistec" },
      {
        name: "description",
        content: "Sua mensagem foi enviada. Nossa equipe já vai te atender.",
      },
    ],
  }),
  component: ObrigadoCorretorPage,
});

function ObrigadoCorretorPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[color:var(--brand-orange)] selection:text-white flex flex-col">
      <Nav />

      <main className="flex-1 pt-32 pb-16 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[color:var(--brand-orange)]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-2xl mx-auto w-full relative z-10 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[color:var(--brand-ink)] mb-6">
            Tudo certo!
          </h1>

          <p className="text-2xl text-muted-foreground mb-12">
            A janela do WhatsApp foi aberta! Nossa equipe está pronta para te
            atender e liberar todas as novidades exclusivas que preparamos para
            o Dia do Corretor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5513997591781&text=Ol%C3%A1!%20Estou%20na%20p%C3%A1gina%20do%20Dia%20do%20Corretor%20e%20quero%20saber%20as%20novidades!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 h-14 inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] font-bold text-xl hover:bg-[color:var(--brand-sand)] transition shadow-soft"
            >
              Abrir WhatsApp
            </a>
            <Link
              title="Sobre a Microsistec"
              to="/empresa"
              className="w-full sm:w-auto px-8 h-14 inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-sand)] text-[color:var(--brand-ink)] font-bold text-xl hover:bg-[color:var(--brand-sand)]/80 transition shadow-soft group"
            >
              Conhecer a Microsistec
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
