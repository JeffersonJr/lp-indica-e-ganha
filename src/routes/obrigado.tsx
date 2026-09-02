import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { CheckCircle2, ArrowRight } from "lucide-react";
import * as React from "react";

type ObrigadoSearch = {
  url?: string;
};

export const Route = createFileRoute("/obrigado")({
  validateSearch: (search: Record<string, unknown>): ObrigadoSearch => {
    return {
      url: search.url as string | undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Obrigado! | Microsistec" },
      { name: "description", content: "Obrigado por baixar nosso material!" },
    ],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  const { url } = Route.useSearch();

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
            Obrigado! Seu material já deve estar baixando.
          </h1>

          <p className="text-2xl text-muted-foreground mb-12">
            Seu download deve ter iniciado automaticamente. Caso isso não tenha
            acontecido,{" "}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--brand-orange)] underline font-bold hover:text-[color:var(--brand-orange)]/80"
              >
                clique aqui para baixar manualmente
              </a>
            ) : (
              <span className="font-bold">
                verifique sua pasta de downloads
              </span>
            )}
            . Enquanto isso, aproveite para conhecer mais sobre as soluções que
            podem transformar sua imobiliária!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              title="Blog da Microsistec - Conteúdos sobre Mercado Imobiliário"
              to="/blog"
              className="w-full sm:w-auto px-8 h-14 inline-flex items-center justify-center rounded-xl bg-[color:var(--brand-sand)] text-[color:var(--brand-ink)] font-bold text-xl hover:bg-black/5 transition"
            >
              Ler nosso Blog
            </Link>
            <Link
              title="Página Inicial da Microsistec"
              to="/"
              className="w-full sm:w-auto px-8 h-14 inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] font-bold text-xl hover:bg-[color:var(--brand-sand)] transition shadow-soft group"
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
