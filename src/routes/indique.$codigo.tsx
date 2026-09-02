import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Bot, Database, Globe, CheckCircle2, Loader2 } from "lucide-react";
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

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-[color:var(--brand-teal)] selection:text-white">
      <Header />
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-[color:var(--brand-clay)]/20 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="container max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Tecnologia para imobiliárias que querem vender mais e operar melhor.
            </h1>
            <p className="text-xl md:text-2xl text-[color:var(--brand-sand)]/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Centralize sua operação, gere mais oportunidades e automatize seu atendimento com o ecossistema Microsistec.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base font-semibold text-[color:var(--brand-teal)] mb-12">
              <span className="flex items-center gap-2"><Database className="w-5 h-5"/> CRM</span>
              <span className="text-[color:var(--brand-sand)]/30">+</span>
              <span className="flex items-center gap-2"><Globe className="w-5 h-5"/> Site</span>
              <span className="text-[color:var(--brand-sand)]/30">+</span>
              <span className="flex items-center gap-2"><Bot className="w-5 h-5"/> Inteligência Artificial</span>
            </div>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-5 font-bold text-lg hover:opacity-90 transition cursor-pointer border-none shadow-[0_10px_30px_-10px_rgba(232,161,75,0.4)]"
            >
              QUERO CONHECER <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* ECOSSISTEMA MESSAGE */}
        <section className="py-16 md:py-24 px-4 bg-white">
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
        <section className="py-20 bg-slate-50 border-y border-slate-100">
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

        {/* FORM QUALIFICACAO */}
        <section id="qualificacao" className="py-24 px-4 bg-white relative">
          <div className="container max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-ink)] mb-4">Vamos entender melhor sua imobiliária?</h2>
              <p className="text-lg text-slate-600">Preencha os dados abaixo e nosso time apresenta a solução mais adequada para sua operação.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[color:var(--brand-teal)]" />
              
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-[color:var(--brand-ink)] mb-4">Tudo certo!</h3>
                  <p className="text-lg text-slate-600">Nosso time entrará em contato em breve para apresentar a Microsistec.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Origin hidden field */}
                  <input type="hidden" name="origem" value={`indicacao_${codigo}`} />
                  
                  <div className="space-y-5">
                    <h3 className="text-xl font-bold text-[color:var(--brand-ink)] border-b border-slate-100 pb-2">Dados Principais</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-700">Nome da imobiliária*</label>
                        <input required type="text" value={formData.imobiliaria} onChange={e => setFormData({...formData, imobiliaria: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] transition" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-700">Nome do responsável*</label>
                        <input required type="text" value={formData.responsavel} onChange={e => setFormData({...formData, responsavel: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] transition" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-700">WhatsApp*</label>
                        <input required type="tel" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: phoneMask(e.target.value)})} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] transition" />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-700">E-mail*</label>
                        <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] transition" />
                      </div>
                      <div className="flex flex-col gap-1.5 md:col-span-2">
                        <label className="text-sm font-semibold text-slate-700">Cidade / Estado*</label>
                        <input required type="text" value={formData.cidade} onChange={e => setFormData({...formData, cidade: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] transition" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <h3 className="text-xl font-bold text-[color:var(--brand-ink)] border-b border-slate-100 pb-2">Qualificação</h3>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-slate-700">Quantos corretores trabalham atualmente na imobiliária?*</label>
                      <select required value={formData.corretores} onChange={e => setFormData({...formData, corretores: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] transition bg-white">
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="1 a 3">1 a 3</option>
                        <option value="4 a 10">4 a 10</option>
                        <option value="11 a 30">11 a 30</option>
                        <option value="31 a 50">31 a 50</option>
                        <option value="Mais de 50">Mais de 50</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-slate-700">Atualmente vocês utilizam algum CRM imobiliário?*</label>
                      <select required value={formData.usaCrm} onChange={e => setFormData({...formData, usaCrm: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] transition bg-white">
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                      </select>
                    </div>

                    {formData.usaCrm === "Sim" && (
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-700">Qual CRM utilizam atualmente? (Opcional)</label>
                        <input type="text" value={formData.qualCrm} onChange={e => setFormData({...formData, qualCrm: e.target.value})} className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-teal)] transition" />
                      </div>
                    )}

                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] hover:opacity-90 font-bold py-5 rounded-2xl flex items-center justify-center gap-2 transition cursor-pointer border-none shadow-lg text-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>ENVIANDO... <Loader2 className="w-6 h-6 animate-spin" /></>
                      ) : (
                        <>QUERO CONHECER A MICROSISTEC <ArrowRight className="w-6 h-6" /></>
                      )}
                    </button>
                    <p className="text-center text-sm text-slate-500 mt-4">
                      Nosso time entrará em contato para entender sua operação e apresentar a melhor solução.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
