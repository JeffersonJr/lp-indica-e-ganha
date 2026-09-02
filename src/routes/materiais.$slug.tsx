import {
  createFileRoute,
  notFound,
  Link,
  useNavigate,
} from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import { materiaisData } from "@/lib/data";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import * as React from "react";
import { useState } from "react";
import { PhoneInput } from "@/components/ui/phone-input";
import { sendLeadToClickUp } from "@/lib/clickup";
import { cnpjMask } from "@/lib/utils";

export const Route = createFileRoute("/materiais/$slug")({
  loader: ({ params }) => {
    const material = materiaisData.find((m) => m.slug === params.slug);
    if (!material) {
      throw notFound();
    }
    return { material };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.material.title} | Microsistec` },
      { name: "description", content: loaderData?.material.description },
    ],
  }),
  component: MaterialLandingPage,
});

// Helper para renderizar **negrito** como destaque laranja
function renderFormattedText(text: string) {
  if (!text) return null;
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-[color:var(--brand-orange)] font-black">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function MaterialLandingPage() {
  const { material } = Route.useLoaderData();
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "whatsapp">("form");
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

  // Fallbacks if data doesn't have LP specific fields
  const title = material.lpTitle || material.title;
  const subtitle = material.lpSubtitle || material.description;
  const bullets =
    material.lpBullets && material.lpBullets.length > 0
      ? material.lpBullets
      : [
          "Conteúdo prático e aplicável",
          "Focado exclusivamente no mercado imobiliário",
          "Acesso imediato após o cadastro",
        ];

  const handleWhatsAppClick = () => {
    // Dispara o download
    if (material.downloadUrl) {
      const link = document.createElement("a");
      link.href = material.downloadUrl;
      link.download = material.downloadUrl.split("/").pop() || "material.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // Aguarda um pequeno delay e manda para a página de obrigado
    setTimeout(() => {
      navigate({
        to: "/obrigado",
        search: { url: material.downloadUrl },
      });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-[color:var(--brand-orange)] selection:text-[color:var(--brand-sand)] flex flex-col">
      <Nav />

      <main className="flex-1 relative bg-hero border-b border-[color:var(--brand-ink)]/10 overflow-x-clip">
        <div className="bg-grid absolute inset-0 pointer-events-none" />

        <div className="pt-32 pb-16 md:pt-36 md:pb-24 px-6 relative z-10 max-w-7xl mx-auto w-full">
          <Link
            title="Materiais Ricos e Gratuitos"
            to="/materiais"
            className="inline-flex items-center gap-2 text-base font-semibold text-[color:var(--brand-ink)] hover:text-[color:var(--brand-orange)] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para materiais
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Esquerda: Copy / Benefícios */}
            <div className="flex flex-col lg:col-span-7">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[color:var(--brand-sand)] text-sm font-bold text-[color:var(--brand-ink)] border border-[color:var(--brand-ink)]/5 w-fit mb-6">
                Material Gratuito • {material.type}
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold tracking-[-0.02em] text-[color:var(--brand-ink)] leading-[1.15] mb-6">
                {renderFormattedText(title)}
              </h1>

              <p className="text-2xl text-foreground/80 leading-relaxed mb-8">
                {subtitle}
              </p>

              <div className="space-y-4 mb-12">
                {bullets.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-xl font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[color:var(--brand-ink)]/10 w-full max-w-lg hidden lg:block bg-[color:var(--brand-sand)] aspect-square">
                <img
                  src={material.imageUrl}
                  alt={material.title}
                  title={material.title}
                  width={800}
                  height={800}
                  fetchPriority="high"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Direita: Formulário Falso / Template (STICKY) */}
            <div className="relative lg:col-span-5 lg:sticky lg:top-32">
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[color:var(--brand-ink)]/5 relative z-10 min-h-[450px] flex flex-col justify-center overflow-hidden">
                {step === "form" ? (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-3xl font-bold tracking-tight text-[color:var(--brand-ink)] mb-2">
                      Baixe o material agora
                    </h3>
                    <p className="text-base text-muted-foreground mb-8">
                      Preencha seus dados reais para receber o link de download.
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
                              origem: `Landing Page: Materiais Ricos (${material.title})`,
                            }
                          });
                        } catch (err) {
                          console.error(
                            "[Materiais] Erro ao enviar lead:",
                            err,
                          );
                        } finally {
                          setIsSubmitting(false);
                          setStep("whatsapp");
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
                            setFormData((p) => ({
                              ...p,
                              email: e.target.value,
                            }))
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
                              setFormData((p) => ({
                                ...p,
                                role: e.target.value,
                              }))
                            }
                          >
                            <option value="">Selecione uma opção...</option>
                            <option value="corretor">
                              Corretor(a) de Imóveis
                            </option>
                            <option value="dono">Dono(a) de Imobiliária</option>
                            <option value="gerente">
                              Gerente / Coordenador
                            </option>
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
                        {isSubmitting ? "Enviando..." : material.ctaText}
                      </button>
                    </form>
                    <p className="text-sm text-muted-foreground text-center mt-6">
                      Prometemos não usar suas informações para enviar spam.
                    </p>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <MessageCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight text-[color:var(--brand-ink)] mb-3">
                      Falta pouco! Libere seu material.
                    </h3>
                    <p className="text-muted-foreground mb-8 text-lg">
                      Clique no botão abaixo para nos avisar no WhatsApp que
                      você solicitou o material.
                      <br />
                      <br />
                      <strong>
                        Assim que você clicar, o download começará
                        automaticamente!
                      </strong>
                    </p>

                    <a
                      title="Acessar link"
                      href={`https://api.whatsapp.com/send?phone=5513997591781&text=${encodeURIComponent(`Olá! Tenho interesse no material: *${material.title}*\n\n*Meus Dados:*\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nCargo: ${getRoleLabel(formData.role)}\n\nGostaria de acessar o material!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppClick}
                      className="w-full h-14 inline-flex items-center justify-center rounded-xl bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] font-bold text-xl hover:bg-[color:var(--brand-sand)] transition shadow-soft gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chamar no WhatsApp e Baixar
                    </a>
                  </div>
                )}
              </div>

              {/* Elementos decorativos atrás do formulário */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dots-pattern opacity-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
