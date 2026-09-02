import * as React from "react";
import { useDemoModal } from "@/hooks/use-demo-modal";
import { useLocation } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";
import { sendLeadToClickUp } from "@/lib/clickup";
import { cnpjMask } from "@/lib/utils";

export function DemoModal() {
  const { isOpen, closeModal } = useDemoModal();
  const location = useLocation();

  const [step, setStep] = React.useState<"form" | "whatsapp">("form");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    dialCode: "+55",
    phone: "",
    cnpj: "",
    role: "",
  });

  // Reseta o form toda vez que o modal abre
  React.useEffect(() => {
    if (isOpen) {
      setStep("form");
      setFormData({
        name: "",
        email: "",
        dialCode: "+55",
        phone: "",
        cnpj: "",
        role: "",
      });
    }
  }, [isOpen]);

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

  const handleWhatsAppClick = () => {
    // Fecha o modal logo após o clique
    closeModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="z-[55] sm:max-w-[500px] p-0 bg-transparent border-none overflow-hidden rounded-[2rem] shadow-none">
        {/* Unconditional elements for Accessibility */}
        <DialogTitle className="sr-only">Falar com Especialista</DialogTitle>
        <DialogDescription className="sr-only">
          Preencha o formulário para falar com o nosso time de especialistas.
        </DialogDescription>

        <div
          data-gtm-modal="modal_demonstracao"
          className="bg-white p-8 md:p-10 relative z-10 min-h-[450px] flex flex-col justify-center overflow-hidden"
        >
          {step === "form" ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-3xl font-bold tracking-tight text-[color:var(--brand-ink)] mb-2">
                Falar com Especialista
              </h3>
              <p className="text-base text-muted-foreground mb-8">
                Preencha seus dados reais para falarmos com você no WhatsApp.
              </p>

              <form
                data-gtm-form="solicitar_demonstracao"
                data-form-page={location.pathname}
                className="space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setSubmitError(null);
                  try {
                    const telefoneCompleto = `${formData.dialCode} ${formData.phone}`;
                    await sendLeadToClickUp({
                      data: {
                        nome: formData.name,
                        telefone: telefoneCompleto,
                        email: formData.email,
                        cnpj: formData.cnpj,
                        origem: "Modal: Solicite uma Demonstração",
                      }
                    });
                    setStep("whatsapp");
                  } catch (err) {
                    console.error("[DemoModal] Erro ao enviar lead:", err);
                    // Mesmo com erro no ClickUp, permite seguir para o WhatsApp
                    setStep("whatsapp");
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div className="space-y-1.5">
                  <label className="text-base font-semibold text-[color:var(--brand-ink)]">
                    Nome completo{" "}
                    <span className="text-[color:var(--brand-orange)]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
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
                    <span className="text-[color:var(--brand-orange)]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
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
                    <span className="text-[color:var(--brand-orange)]">*</span>
                  </label>
                  <PhoneInput
                    id="phone"
                    name="phone"
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
                    id="cnpj"
                    name="cnpj"
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
                    <span className="text-[color:var(--brand-orange)]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full h-12 px-4 rounded-xl border border-input bg-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[color:var(--brand-orange)] appearance-none cursor-pointer"
                      value={formData.role}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, role: e.target.value }))
                      }
                    >
                      <option value="">Selecione uma opção...</option>
                      <option value="corretor">Corretor(a) de Imóveis</option>
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
                  data-gtm-cta="enviar_modal_demonstracao"
                  className="w-full h-14 mt-4 inline-flex items-center justify-center rounded-xl bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] font-bold text-xl hover:bg-[color:var(--brand-sand)] transition shadow-soft disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Falar com especialista"}
                </button>
              </form>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-[color:var(--brand-ink)] mb-3">
                Falta pouco! Inicie o contato.
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Clique no botão abaixo para nos avisar no WhatsApp que você
                deseja falar com um especialista. Nossa equipe está pronta para
                te atender!
              </p>

              <a
                title="Acessar link"
                href={`https://api.whatsapp.com/send?phone=5513997591781&text=${encodeURIComponent(`Olá! Gostaria de falar com um especialista sobre as soluções da Microsistec.\n\n*Minhas Informações:*\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nCargo: ${getRoleLabel(formData.role)}\n\nGostaria de receber mais informações e agendar uma demonstração.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                data-gtm-cta="whatsapp_modal_demonstracao"
                className="w-full h-14 inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] font-bold text-xl hover:bg-[color:var(--brand-sand)] transition shadow-soft"
              >
                <MessageCircle className="w-5 h-5" />
                Abrir WhatsApp
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
