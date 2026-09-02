import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Bot, Database, Globe, CheckCircle2, Loader2, Gift, Check, ChevronsUpDown, ChevronDown, TrendingUp } from "lucide-react";
import { SimpleNav as Header, SimpleFooter as Footer } from "../components/microsistec/MicrosistecLanding";
import { cn, phoneMask } from "../lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { sendIndicacaoToClickUp } from "../lib/clickup";

export const Route = createFileRoute("/indique/$codigo")({
  component: IndiqueLandingPage,
});

const ESTADOS = [
  { value: "AC", label: "Acre (AC)" },
  { value: "AL", label: "Alagoas (AL)" },
  { value: "AP", label: "Amapá (AP)" },
  { value: "AM", label: "Amazonas (AM)" },
  { value: "BA", label: "Bahia (BA)" },
  { value: "CE", label: "Ceará (CE)" },
  { value: "DF", label: "Distrito Federal (DF)" },
  { value: "ES", label: "Espírito Santo (ES)" },
  { value: "GO", label: "Goiás (GO)" },
  { value: "MA", label: "Maranhão (MA)" },
  { value: "MT", label: "Mato Grosso (MT)" },
  { value: "MS", label: "Mato Grosso do Sul (MS)" },
  { value: "MG", label: "Minas Gerais (MG)" },
  { value: "PA", label: "Pará (PA)" },
  { value: "PB", label: "Paraíba (PB)" },
  { value: "PR", label: "Paraná (PR)" },
  { value: "PE", label: "Pernambuco (PE)" },
  { value: "PI", label: "Piauí (PI)" },
  { value: "RJ", label: "Rio de Janeiro (RJ)" },
  { value: "RN", label: "Rio Grande do Norte (RN)" },
  { value: "RS", label: "Rio Grande do Sul (RS)" },
  { value: "RO", label: "Rondônia (RO)" },
  { value: "RR", label: "Roraima (RR)" },
  { value: "SC", label: "Santa Catarina (SC)" },
  { value: "SP", label: "São Paulo (SP)" },
  { value: "SE", label: "Sergipe (SE)" },
  { value: "TO", label: "Tocantins (TO)" },
];

function IndiqueLandingPage() {
  const { codigo } = Route.useParams();
  const [openEstado, setOpenEstado] = useState(false);
  
  const [formData, setFormData] = useState({
    imobiliaria: "",
    responsavel: "",
    whatsapp: "",
    email: "",
    cidade: "",
    estado: "",
    corretores: "",
    usaCrm: "",
    qualCrm: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    
    const [rawNome, rawImob] = codigo.split("-");
    const nomeIndicador = (rawNome || "").replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase());
    const imobIndicador = (rawImob || "").replace(/\./g, " ").replace(/\b\w/g, l => l.toUpperCase());

    try {
      await sendIndicacaoToClickUp({
        data: {
          codigo_indicador: codigo,
          indicador_nome: nomeIndicador,
          indicador_imobiliaria: imobIndicador,
          indicador_telefone: "Não informado",
          indicador_email: "Não informado",
          indicado_nome: formData.imobiliaria,
          indicado_responsavel: formData.responsavel,
          indicado_telefone: formData.whatsapp,
          indicado_email: formData.email,
          cidade: formData.cidade,
          estado: formData.estado,
          corretores: formData.corretores,
          usaCrm: formData.usaCrm,
          qualCrm: formData.qualCrm
        }
      });
    } catch (err) {
      console.error("Erro ao enviar para webhook", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const scrollToForm = () => {
    document.getElementById('qualificacao')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderFormContent = () => (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl relative border border-[color:var(--brand-clay)]/10 text-left">
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-[color:var(--brand-orange)] rounded-full blur-[40px] opacity-20 pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[color:var(--brand-clay)] rounded-full blur-[40px] opacity-20 pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-[color:var(--brand-ink)] mb-2">Falar com Especialista</h2>
        <p className="text-[color:var(--brand-ink)]/70 mb-6 text-sm">Nossa equipe apresentará a solução ideal para você.</p>
        
        {isSubmitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[color:var(--brand-ink)] mb-2">Tudo certo!</h3>
            <p className="text-sm text-slate-600">Nosso time entrará em contato em breve para apresentar a Microsistec.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="hidden" name="origem" value={`indicacao_${codigo}`} />
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="imob" className="text-sm font-semibold text-[color:var(--brand-ink)]">Imobiliária*</label>
                <input id="imob" name="imob" autoComplete="organization" required type="text" value={formData.imobiliaria} onChange={e => setFormData({...formData, imobiliaria: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition" />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="resp" className="text-sm font-semibold text-[color:var(--brand-ink)]">Responsável*</label>
                <input id="resp" name="resp" autoComplete="name" required type="text" value={formData.responsavel} onChange={e => setFormData({...formData, responsavel: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="whatsapp" className="text-sm font-semibold text-[color:var(--brand-ink)]">WhatsApp*</label>
                  <input id="whatsapp" name="whatsapp" autoComplete="tel" required type="tel" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: phoneMask(e.target.value)})} className="w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-[color:var(--brand-ink)]">E-mail*</label>
                  <input id="email" name="email" autoComplete="email" required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="estado" className="text-sm font-semibold text-[color:var(--brand-ink)]">Estado*</label>
                  <div className="relative">
                    <select id="estado" name="estado" required value={formData.estado} onChange={e => setFormData({...formData, estado: e.target.value})} className="appearance-none w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition">
                      <option value="" disabled>UF</option>
                      {ESTADOS.map(estado => (
                        <option key={estado.value} value={estado.value}>{estado.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cidade" className="text-sm font-semibold text-[color:var(--brand-ink)]">Cidade*</label>
                  <input id="cidade" name="cidade" autoComplete="address-level2" required type="text" value={formData.cidade} onChange={e => setFormData({...formData, cidade: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="corretores" className="text-sm font-semibold text-[color:var(--brand-ink)]">Qtd Corretores*</label>
                  <div className="relative">
                    <select id="corretores" name="corretores" required value={formData.corretores} onChange={e => setFormData({...formData, corretores: e.target.value})} className="appearance-none w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition">
                      <option value="" disabled>Selecione</option>
                      <option value="1 a 3">1 a 3</option>
                      <option value="4 a 10">4 a 10</option>
                      <option value="11 a 20">11 a 20</option>
                      <option value="Mais de 20">Mais de 20</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="usacrm" className="text-sm font-semibold text-[color:var(--brand-ink)]">Usa CRM?*</label>
                  <div className="relative">
                    <select id="usacrm" name="usacrm" required value={formData.usaCrm} onChange={e => setFormData({...formData, usaCrm: e.target.value})} className="appearance-none w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition">
                      <option value="" disabled>Selecione</option>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              {formData.usaCrm === "Sim" && (
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="qualcrm" className="text-sm font-semibold text-[color:var(--brand-ink)]">Qual CRM? (Opcional)</label>
                  <input id="qualcrm" name="qualcrm" type="text" value={formData.qualCrm} onChange={e => setFormData({...formData, qualCrm: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-[color:var(--brand-ink)]/10 bg-white text-[color:var(--brand-ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-clay)] transition" />
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] hover:opacity-90 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer border-none shadow-lg text-sm active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>ENVIANDO... <Loader2 className="w-5 h-5 animate-spin" /></>
              ) : (
                <>QUERO CONHECER <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-[color:var(--brand-teal)] selection:text-white">
      <Header />
      <main className="flex-1">
        
        {/* HERO SECTION WITH FORM */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-[color:var(--brand-clay)]/20 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-12 lg:gap-16 items-center relative z-10">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--brand-clay)]/20 text-[color:var(--brand-teal)] font-semibold text-sm mb-6 border border-[color:var(--brand-clay)]/30">
                <Gift className="w-4 h-4" />
                <span>Indicação Especial</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Tecnologia para imobiliárias que querem vender mais e operar melhor.
              </h1>
              <p className="text-lg md:text-xl text-[color:var(--brand-sand)]/80 mb-10 leading-relaxed">
                Centralize sua operação, gere mais oportunidades e automatize seu atendimento com o ecossistema Microsistec.<br/><br/>
                <strong className="text-[color:var(--brand-orange)] font-bold">Você recebeu 30% de desconto na sua implantação pela sua indicação!</strong> Preencha o formulário para falar com nossos especialistas e garantir seu benefício.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-sm md:text-base font-semibold text-[color:var(--brand-teal)] mb-10 lg:mb-0">
                <span className="flex items-center gap-2"><Database className="w-5 h-5"/> CRM</span>
                <span className="hidden sm:inline text-[color:var(--brand-sand)]/30">+</span>
                <span className="flex items-center gap-2"><Globe className="w-5 h-5"/> Site</span>
                <span className="hidden sm:inline text-[color:var(--brand-sand)]/30">+</span>
                <span className="flex items-center gap-2"><Bot className="w-5 h-5"/> Inteligência Artificial</span>
              </div>
              
              <button
                onClick={scrollToForm}
                className="lg:hidden mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-4 font-bold text-lg hover:opacity-90 transition cursor-pointer border-none shadow-[0_10px_30px_-10px_rgba(232,161,75,0.4)]"
              >
                PREENCHER FORMULÁRIO
              </button>
            </div>

            {/* FORM CARD IN HERO (Desktop) / TOP FORM */}
            <div className="hidden lg:block">
              {renderFormContent()}
            </div>
          </div>
        </section>

        {/* ECOSSISTEMA MESSAGE */}
        <section className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[color:var(--brand-clay)]/5 via-white to-white pointer-events-none" />
          <div className="container max-w-6xl mx-auto relative">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-ink)]">
                Tudo o que sua imobiliária precisa
              </h2>
              <p className="mt-4 text-lg text-slate-600 font-medium">Um ecossistema completo e integrado</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 lg:gap-8">
               {/* Step 1 */}
               <div className="flex flex-1 flex-col items-center gap-4 text-center w-full md:w-auto p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm transition hover:shadow-md">
                  <div className="w-16 h-16 rounded-2xl bg-[color:var(--brand-clay)]/10 text-[color:var(--brand-clay)] flex items-center justify-center shadow-sm">
                    <Globe className="w-8 h-8" />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold tracking-tight text-[color:var(--brand-clay)]">O Site encontra.</span>
               </div>
               
               <ArrowRight className="hidden md:block w-8 h-8 text-slate-200 shrink-0" />
               <ChevronDown className="md:hidden w-8 h-8 text-slate-200 shrink-0" />
               
               {/* Step 2 */}
               <div className="flex flex-1 flex-col items-center gap-4 text-center w-full md:w-auto p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm transition hover:shadow-md">
                  <div className="w-16 h-16 rounded-2xl bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)] flex items-center justify-center shadow-sm">
                    <Bot className="w-8 h-8" />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold tracking-tight text-[color:var(--brand-orange)]">O Albert atende.</span>
               </div>
               
               <ArrowRight className="hidden md:block w-8 h-8 text-slate-200 shrink-0" />
               <ChevronDown className="md:hidden w-8 h-8 text-slate-200 shrink-0" />

               {/* Step 3 */}
               <div className="flex flex-1 flex-col items-center gap-4 text-center w-full md:w-auto p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm transition hover:shadow-md">
                  <div className="w-16 h-16 rounded-2xl bg-[color:var(--brand-ink)]/5 text-[color:var(--brand-ink)] flex items-center justify-center shadow-sm">
                    <Database className="w-8 h-8" />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold tracking-tight text-[color:var(--brand-ink)]">O CRM organiza.</span>
               </div>
               
               <ArrowRight className="hidden md:block w-8 h-8 text-slate-200 shrink-0" />
               <ChevronDown className="md:hidden w-8 h-8 text-slate-200 shrink-0" />

               {/* Step 4 */}
               <div className="flex flex-1 flex-col items-center gap-4 text-center w-full md:w-auto p-6 rounded-3xl bg-green-50 border border-green-100 shadow-sm transition hover:shadow-md">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 text-green-600 flex items-center justify-center shadow-sm">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold tracking-tight text-green-700">Sua equipe vende.</span>
               </div>
            </div>

          </div>
        </section>

        {/* SECTIONS */}
        <section className="py-20 bg-slate-50">
          <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] flex items-center justify-center mb-2">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[color:var(--brand-ink)]">CRM Microsistec</h3>
              <p className="text-lg font-semibold text-[color:var(--brand-clay)]">Sua operação organizada em um só lugar.</p>
              <p className="text-slate-600 mb-4">Gerencie leads, imóveis, clientes, corretores e oportunidades com mais controle e produtividade.</p>
              <ul className="flex flex-col gap-3 mt-auto">
                {['Gestão de leads', 'Funil comercial', 'Controle de atendimentos', 'Gestão de imóveis', 'Integrações', 'Gestão da equipe', 'Indicadores comerciais'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[color:var(--brand-ink)] font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[color:var(--brand-teal)] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] flex items-center justify-center mb-2">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[color:var(--brand-ink)]">Site Motor V8</h3>
              <p className="text-lg font-semibold text-[color:var(--brand-clay)]">Seu site não deveria apenas mostrar imóveis. Ele deveria gerar oportunidades.</p>
              <p className="text-slate-600 mb-4">O Site Motor V8 foi desenvolvido para imobiliárias que precisam de velocidade, performance e geração de leads.</p>
              <ul className="flex flex-col gap-3 mt-auto">
                {['Alta performance', 'SEO avançado', 'Busca inteligente', 'Captação otimizada', 'Experiência moderna', 'Integração com o ecossistema'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[color:var(--brand-ink)] font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[color:var(--brand-teal)] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] flex items-center justify-center mb-2">
                <Bot className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[color:var(--brand-ink)]">Albert IA</h3>
              <p className="text-lg font-semibold text-[color:var(--brand-clay)]">Atendimento que nunca dorme.</p>
              <p className="text-slate-600 mb-4">O Albert IA conversa com seus leads pelo WhatsApp, qualifica o atendimento e ajuda sua equipe a chegar mais rápido às melhores oportunidades.</p>
              <ul className="flex flex-col gap-3 mt-auto">
                {['Atendimento automatizado', 'Qualificação de leads', 'Sugestão de visitas', 'Integração com WhatsApp', 'Integração com Meta', 'Envio automático para o CRM', 'Atualização dos imóveis'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[color:var(--brand-ink)] font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[color:var(--brand-teal)] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* BOTTOM FORM QUALIFICACAO */}
        <section id="qualificacao" className="py-24 px-4 bg-white relative border-t border-slate-100">
          <div className="container max-w-xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-ink)] mb-4">Pronto para transformar sua imobiliária?</h2>
            <p className="text-lg text-slate-600 mb-12">Nossos especialistas estão prontos para te apresentar a Microsistec.</p>
            
            {renderFormContent()}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
