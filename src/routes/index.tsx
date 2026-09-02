import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Gift, Loader2 } from "lucide-react";
import { SimpleNav as Header, SimpleFooter as Footer } from "../components/microsistec/MicrosistecLanding";
import { phoneMask } from "../lib/utils";

import { sendIndicadorToClickUp } from "../lib/clickup";

export const Route = createFileRoute("/")({
  component: IndicaEGanhaPage,
});

function IndicaEGanhaPage() {
  const navigate = useNavigate({ from: Route.fullPath });
  const [formData, setFormData] = useState({
    imobiliaria: "",
    responsavel: "",
    telefone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    const formatForUrl = (text: string) => {
      return text
        .trim()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '') // remove caracteres especiais, mantem espaços
        .split(/\s+/)
        .join('.');
    };

    const cleanResponsavel = formatForUrl(formData.responsavel);
    const cleanImobiliaria = formatForUrl(formData.imobiliaria);
    
    // Se por acaso os campos estiverem vazios, coloca um fallback
    const uniqueCode = `${cleanResponsavel || "user"}-${cleanImobiliaria || "imob"}`;
    
    try {
      await sendIndicadorToClickUp({
        data: {
          imobiliaria: formData.imobiliaria,
          responsavel: formData.responsavel,
          telefone: formData.telefone,
          email: formData.email,
          codigo: uniqueCode
        }
      });
    } catch (err) {
      console.error("Erro ao enviar para webhook", err);
    } finally {
      setIsSubmitting(false);
      navigate({
        to: "/indica-e-ganha/sucesso",
        search: { code: uniqueCode },
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-[color:var(--brand-teal)] selection:text-white">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] relative overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[color:var(--brand-clay)]/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--brand-clay)]/20 text-[color:var(--brand-teal)] font-semibold text-sm mb-6 border border-[color:var(--brand-clay)]/30">
                <Gift className="w-4 h-4" />
                <span>Campanha exclusiva para clientes</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Indique parceiros e<br />
                <span className="text-[color:var(--brand-teal)]">zere sua mensalidade!</span>
              </h1>
              <p className="text-lg md:text-xl text-[color:var(--brand-sand)]/80 mb-8 leading-relaxed">
                Seu networking vale ouro. Indique imobiliárias para a Microsistec e ganhe <strong className="text-white">10% de desconto na sua mensalidade</strong> por indicação que virar cliente. <br className="hidden md:block" />
                <span className="inline-block mt-2 text-base">
                  Os descontos são <strong className="text-white">cumulativos</strong>! Você pode chegar a <strong>100% OFF</strong> (com 10 indicações) e ainda presenteia seus indicados com vantagens exclusivas.
                </span>
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[color:var(--brand-clay)] text-white flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Preencha seus dados</h3>
                    <p className="text-[color:var(--brand-sand)]/70">Cadastre sua imobiliária e gere seu link exclusivo.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[color:var(--brand-clay)] text-white flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Compartilhe seu link</h3>
                    <p className="text-[color:var(--brand-sand)]/70">Envie pelo WhatsApp para imobiliárias que ainda não usam o CRM Microsistec.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[color:var(--brand-clay)] text-white flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Virou cliente? Você ganha.</h3>
                    <p className="text-[color:var(--brand-sand)]/70">Se a imobiliária indicada contratar, você terá 10% de desconto na sua mensalidade por indicação.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl relative border border-[color:var(--brand-clay)]/10">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[color:var(--brand-orange)] rounded-full blur-[40px] opacity-20 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[color:var(--brand-clay)] rounded-full blur-[40px] opacity-20 pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-[color:var(--brand-ink)] mb-2">Gere seu link de indicação</h2>
                <p className="text-[color:var(--brand-ink)]/70 mb-6">Preencha seus dados e receba um link exclusivo para compartilhar.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="imobiliaria" className="text-sm font-semibold text-[color:var(--brand-ink)]">Nome da imobiliária*</label>
                    <input
                      id="imobiliaria"
                      type="text"
                      required
                      value={formData.imobiliaria}
                      onChange={(e) => setFormData({ ...formData, imobiliaria: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition"
                      placeholder="Sua imobiliária"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="responsavel" className="text-sm font-semibold text-[color:var(--brand-ink)]">Nome do responsável*</label>
                    <input
                      id="responsavel"
                      type="text"
                      required
                      value={formData.responsavel}
                      onChange={(e) => setFormData({ ...formData, responsavel: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="telefone" className="text-sm font-semibold text-[color:var(--brand-ink)]">Telefone / WhatsApp*</label>
                    <input
                      id="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: phoneMask(e.target.value) })}
                      className="w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-[color:var(--brand-ink)]">E-mail*</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition"
                      placeholder="seu@email.com.br"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 bg-[color:var(--brand-clay)] text-white hover:bg-[color:var(--brand-clay)]/90 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer shadow-lg active:scale-[0.98] border-none disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Gerando Link... <Loader2 className="w-5 h-5 animate-spin" /></>
                    ) : (
                      <>Gerar Meu Link <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                  <p className="text-center text-xs text-[color:var(--brand-ink)]/60 mt-2">
                    Leva menos de 1 minuto para gerar seu link.<br />Campanha válida até 30/09/2026.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
