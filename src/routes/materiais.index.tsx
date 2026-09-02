import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { materiaisData } from "@/lib/data";
import { Link } from "@tanstack/react-router";
import { Download, FileText, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/materiais/")({
  head: () => ({
    meta: [
      { title: "Materiais Ricos - Ebooks e Planilhas | Microsistec" },
      {
        name: "description",
        content:
          "Baixe ebooks, guias, planilhas e scripts para corretores e imobiliárias impulsionarem suas vendas e gestão.",
      },
    ],
  }),
  component: MateriaisIndex,
});

function MateriaisIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[color:var(--brand-orange)] selection:text-[color:var(--brand-sand)]">
      <Nav />

      {/* HEADER */}
      <section className="relative overflow-hidden bg-hero pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[color:var(--brand-ink)]/10">
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 text-center space-y-6">
          <span className="stamp text-[color:var(--brand-orange)] text-sm inline-block">
            Conteúdos Gratuitos
          </span>
          <h1 className="font-extrabold tracking-[-0.04em] leading-[0.98] text-[clamp(2.5rem,5.5vw,4.5rem)]">
            Materiais para decolar a
            <br />
            <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
              sua imobiliária
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            E-books, guias, planilhas e scripts exclusivos desenvolvidos por
            especialistas para ajudar corretores e gestores a venderem mais.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 md:py-20 px-6 bg-white relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {materiaisData.map((mat) => (
              <Link
                title="Acessar link"
                key={mat.id}
                to="/materiais/$slug"
                params={{
                  slug: mat.slug,
                }}
                className="group flex flex-col bg-[color:var(--brand-sand)]/30 rounded-3xl overflow-hidden border border-[color:var(--brand-ink)]/5 hover:border-[color:var(--brand-orange)]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Imagem */}
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={mat.imageUrl}
                    alt={mat.title}
                    title={mat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[color:var(--brand-ink)] flex items-center gap-1.5 shadow-sm">
                    <FileText className="w-3.5 h-3.5 text-[color:var(--brand-orange)]" />
                    {mat.type}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold tracking-tight text-[color:var(--brand-ink)] leading-snug mb-3 group-hover:text-[color:var(--brand-orange)] transition-colors">
                    {mat.title}
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed mb-6 flex-1">
                    {mat.description}
                  </p>

                  <div className="inline-flex items-center gap-2 font-bold text-[color:var(--brand-orange)] text-base mt-auto">
                    {mat.ctaText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
