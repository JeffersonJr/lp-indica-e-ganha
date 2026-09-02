import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { solutions, getIconComponent } from "@/lib/data";
import { CheckCircle2, MessageCircle, ChevronDown } from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { PhoneInput } from "@/components/ui/phone-input";
import { sendLeadToClickUp } from "@/lib/clickup";
import { cnpjMask } from "@/lib/utils";

export const Route = createFileRoute("/dia-corretor")({
  head: () => ({
    meta: [
      { title: "Mês do Corretor | Novidades Exclusivas Microsistec" },
      {
        name: "description",
        content:
          "Descubra as novidades que preparamos para o Dia do Corretor. O futuro do corretor de imóveis chegou na Microsistec.",
      },
    ],
  }),
  component: DiaCorretorPage,
});

function DiaCorretorPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dialCode: "+55",
    phone: "",
    cnpj: "",
    role: "",
  });

  const getRoleLabel = (value: string) => {
    switch (value) {
      case "corretor":
        return "Corretor(a) de Imóveis";
      case "dono":
        return "Dono(a) de Imobiliária";
      case "gerente":
        return "Gerente / Coordenador";
      case "marketing":
        return "Marketing / Secretária(o)";
      default:
        return value;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[color:var(--brand-orange)] selection:text-[color:var(--brand-sand)] flex flex-col">
      <Nav />

      <main className="flex-1 relative bg-hero border-b border-[color:var(--brand-ink)]/10 overflow-x-clip">
        <div className="bg-grid absolute inset-0 pointer-events-none" />

        <div className="pt-32 pb-16 md:pt-36 md:pb-24 px-6 relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Esquerda: Copy / Benefícios */}
            <div className="flex flex-col lg:col-span-7">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[color:var(--brand-sand)] text-sm font-bold text-[color:var(--brand-ink)] border border-[color:var(--brand-ink)]/5 w-fit mb-6">
                Dia do Corretor
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold tracking-[-0.02em] text-[color:var(--brand-ink)] leading-[1.15] mb-6">
                O Futuro do Corretor de Imóveis já chegou na Microsistec.
              </h1>

              <p className="text-2xl text-foreground/80 leading-relaxed mb-8">
                Neste Dia do Corretor, preparamos novidades exclusivas para quem
                deseja vender mais, perder menos tempo com burocracia e oferecer
                um atendimento de excelência. Cadastre-se para descobrir.
              </p>

              <div className="space-y-4 mb-12">
                {[
                  "Automatize seu atendimento com IA.",
                  "Centralize seus imóveis e clientes.",
                  "Receba novidades exclusivas da campanha.",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-xl font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-12 hidden lg:block">
                <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-ink)] mb-8">
                  Todo o potencial do nosso ecossistema
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solutions.map((solution) => {
                    const Icon = getIconComponent(solution.iconName);
                    return (
                      <div
                        key={solution.id}
                        className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-[color:var(--brand-ink)]/5 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-12 h-12 bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] rounded-xl flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[color:var(--brand-ink)] mb-2 flex items-center gap-2">
                          {solution.title}
                          {solution.slug === "locacao" && (
                            <span className="text-[10px] uppercase font-bold bg-[color:var(--brand-orange)]/20 text-[color:var(--brand-orange)] px-2 py-0.5 rounded-full">
                              Em breve
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-foreground/70 leading-relaxed">
                          {solution.shortDesc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Direita: Formulário Direto (STICKY) */}
            <div className="relative lg:col-span-5 lg:sticky lg:top-32">
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[color:var(--brand-ink)]/5 relative z-10 min-h-[450px] flex flex-col justify-center overflow-hidden">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-3xl font-bold tracking-tight text-[color:var(--brand-ink)] mb-2">
                    Quero saber as novidades
                  </h3>
                  <p className="text-base text-muted-foreground mb-8">
                    Preencha seus dados reais para liberar o acesso exclusivo.
                  </p>

                  <form
                    className="space-y-5"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);
                      try {
                        const telefoneCompleto = `${formData.dialCode} ${formData.phone}`;
                        await sendLeadToClickUp({
                          data: {
                            nome: formData.name,
                            telefone: telefoneCompleto,
                            email: formData.email,
                            cnpj: formData.cnpj,
                            origem: "Landing Page: Dia do Corretor",
                          },
                        });
                        const text = `Olá! Quero saber as novidades do Dia do Corretor que a Microsistec preparou!\n\n*Meus Dados:*\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nCargo: ${getRoleLabel(formData.role)}`;
                        const url = `https://api.whatsapp.com/send?phone=5513997591781&text=${encodeURIComponent(text)}`;
                        window.open(url, "_blank");
                        navigate({ to: "/obrigado-corretor" });
                      } catch (err) {
                        console.error(
                          "[DiaCorretor] Erro ao enviar lead:",
                          err,
                        );
                        setIsSubmitting(false);
                      }
                    }}
                  >
                    <div className="space-y-1.5">
                      <label className="text-base font-semibold text-[color:var(--brand-ink)]">
                        Nome completo{" "}
                        <span className="text-[color:var(--brand-orange)]">
                          *
                        </span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="João da Silva"
                        className="w-full h-12 px-4 rounded-xl border border-input bg-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--brand-orange)]"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, name: e.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-base font-semibold text-[color:var(--brand-ink)]">
                        E-mail de trabalho{" "}
                        <span className="text-[color:var(--brand-orange)]">
                          *
                        </span>
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="joao@imobiliaria.com.br"
                        className="w-full h-12 px-4 rounded-xl border border-input bg-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--brand-orange)]"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, email: e.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-base font-semibold text-[color:var(--brand-ink)]">
                        Telefone / WhatsApp{" "}
                        <span className="text-[color:var(--brand-orange)]">
                          *
                        </span>
                      </label>
                      <PhoneInput
                        required
                        value={formData.phone}
                        dialCode={formData.dialCode}
                        onPhoneChange={(phone, dialCode) =>
                          setFormData((p) => ({ ...p, phone, dialCode }))
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-base font-semibold text-[color:var(--brand-ink)]">
                        CNPJ
                      </label>
                      <input
                        type="text"
                        placeholder="00.000.000/0001-00"
                        className="w-full h-12 px-4 rounded-xl border border-input bg-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--brand-orange)]"
                        value={formData.cnpj}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, cnpj: cnpjMask(e.target.value) }))
                        }
                      />
                    </div>
                    <div className="space-y-1.5 relative">
                      <label className="text-base font-semibold text-[color:var(--brand-ink)]">
                        Cargo{" "}
                        <span className="text-[color:var(--brand-orange)]">
                          *
                        </span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          className="w-full h-12 px-4 rounded-xl border border-input bg-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--brand-orange)] appearance-none cursor-pointer"
                          value={formData.role}
                          onChange={(e) =>
                            setFormData((p) => ({ ...p, role: e.target.value }))
                          }
                        >
                          <option value="">Selecione uma opção...</option>
                          <option value="corretor">
                            Corretor(a) de Imóveis
                          </option>
                          <option value="dono">Dono(a) de Imobiliária</option>
                          <option value="gerente">Gerente / Coordenador</option>
                          <option value="marketing">
                            Marketing / Secretária(o)
                          </option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 mt-4 inline-flex items-center justify-center rounded-xl bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] font-bold text-xl hover:bg-[color:var(--brand-sand)] transition shadow-soft disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting
                        ? "Enviando..."
                        : "Quero as novidades exclusivas"}
                    </button>
                  </form>
                  <p className="text-sm text-muted-foreground text-center mt-6">
                    Prometemos não usar suas informações para enviar spam.
                  </p>
                </div>
              </div>

              {/* Elementos decorativos atrás do formulário */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dots-pattern opacity-10 pointer-events-none" />
            </div>
          </div>

          <div className="mt-16 lg:hidden">
            <h2 className="text-3xl font-bold tracking-tight text-[color:var(--brand-ink)] mb-8 text-center">
              Todo o potencial do nosso ecossistema
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solutions.map((solution) => {
                const Icon = getIconComponent(solution.iconName);
                return (
                  <div
                    key={solution.id}
                    className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-[color:var(--brand-ink)]/5 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[color:var(--brand-ink)] mb-2 flex items-center gap-2">
                      {solution.title}
                      {solution.slug === "locacao" && (
                        <span className="text-[10px] uppercase font-bold bg-[color:var(--brand-orange)]/20 text-[color:var(--brand-orange)] px-2 py-0.5 rounded-full">
                          Em breve
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {solution.shortDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
