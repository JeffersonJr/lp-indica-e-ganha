import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Bot, Database, Globe, CheckCircle2, Loader2, Gift } from "lucide-react";
import { SimpleNav as Header, SimpleFooter as Footer } from "../components/microsistec/MicrosistecLanding";
import { phoneMask } from "../lib/utils";

import { sendIndicacaoToClickUp } from "../lib/clickup";

export const Route = createFileRoute("/indique/$codigo")({
  component: IndiqueLandingPage,
});

function IndiqueLandingPage() {
  const { codigo } = Route.useParams();
  
  const [formData, setFormData] = useState({
    imobiliaria: "",
    responsavel: "",
    whatsapp: "",
    email: "",
    cidade: "",
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
    
    try {
      await sendIndicacaoToClickUp({
        data: {
          indicador_nome: codigo,
          indicador_telefone: "Não informado",
          indicador_email: "Não informado",
          indicado_nome: formData.imobiliaria,
          indicado_responsavel: formData.responsavel,
          indicado_telefone: formData.whatsapp,
          indicado_email: formData.email,
          cidade: formData.cidade,
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

  const FormContent = () => (
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
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Imobiliária*</label>
                <input required type="text" value={formData.imobiliaria} onChange={e => setFormData({...formData, imobiliaria: e.target.value})} className="px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] text-[color:var(--brand-ink)]" />
              </div>
              
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Responsável*</label>
                <input required type="text" value={formData.responsavel} onChange={e => setFormData({...formData, responsavel: e.target.value})} className="px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] text-[color:var(--brand-ink)]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-700">WhatsApp*</label>
                  <input required type="tel" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: phoneMask(e.target.value)})} className="px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] text-[color:var(--brand-ink)]" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-700">E-mail*</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] text-[color:var(--brand-ink)]" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Cidade / Estado*</label>
                <input required type="text" value={formData.cidade} onChange={e => setFormData({...formData, cidade: e.target.value})} className="px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] text-[color:var(--brand-ink)]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-700">Qtd Corretores*</label>
                  <select required value={formData.corretores} onChange={e => setFormData({...formData, corretores: e.target.value})} className="px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] text-[color:var(--brand-ink)] bg-white">
                    <option value="" disabled>Selecione</option>
                    <option value="1 a 3">1 a 3</option>
                    <option value="4 a 10">4 a 10</option>
                    <option value="11 a 30">11 a 30</option>
                    <option value="31 a 50">31 a 50</option>
                    <option value="Mais de 50">Mais de 50</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-700">Usa CRM?*</label>
                  <select required value={formData.usaCrm} onChange={e => setFormData({...formData, usaCrm: e.target.value})} className="px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] text-[color:var(--brand-ink)] bg-white">
                    <option value="" disabled>Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </div>
              </div>

              {formData.usaCrm === "Sim" && (
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-700">Qual CRM? (Opcional)</label>
                  <input type="text" value={formData.qualCrm} onChange={e => setFormData({...formData, qualCrm: e.target.value})} className="px-3 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] text-[color:var(--brand-ink)]" />
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
                <strong className="text-white">Você foi indicado para conhecer nossa solução!</strong> Preencha o formulário para falar com nossos especialistas.
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
              <FormContent />
            </div>
          </div>
        </section>

        {/* ECOSSISTEMA MESSAGE */}
        <section className="py-16 md:py-24 px-4 bg-white border-b border-slate-100">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[color:var(--brand-ink)] leading-[1.2]">
              <span className="text-[color:var(--brand-clay)]">O Site encontra.</span><br/>
              <span className="text-[color:var(--brand-orange)]">O Albert atende.</span><br/>
              O CRM organiza.<br/>
              Sua equipe vende.
            </h2>
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
            
            <FormContent />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
