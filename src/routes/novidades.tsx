import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/microsistec/MicrosistecLanding";
import {
  Sparkles,
  ArrowRight,
  ListChecks,
  BarChart3,
  Share2,
  Workflow,
  CheckCircle2,
  Building2,
  Users,
  TrendingUp,
  Target,
  FileText,
  Zap,
  SplitSquareHorizontal,
  ChevronRight,
  MessageCircle,
  Database,
  MapPin,
  FileSignature,
  FileDown,
  Radio,
} from "lucide-react";
import * as React from "react";

export const Route = createFileRoute("/novidades")({
  head: () => ({
    meta: [
      { title: "Novidades e Atualizações | Microsistec" },
      {
        name: "description",
        content:
          "Conheça os últimos lançamentos da Microsistec: Multifunil, Banco de Leads, Check-in de Plantão, Documentos Automatizados, Relatórios e Automações.",
      },
    ],
  }),
  component: NovidadesPage,
});

function NovidadesPage() {
  const funnels = [
    {
      id: "alto-padrao",
      name: "Alto Padrão",
      stage1: "Qualificação",
      stage2: "Visita Técnica",
      stage3: "Proposta",
      lead: "João Oliveira",
      prop: "Cobertura Riviera",
      tasks: ["Ficha de visita assinada", "Enviar fotos pro proprietário"],
    },
    {
      id: "locacao",
      name: "Locação",
      stage1: "Interesse",
      stage2: "Análise de Ficha",
      stage3: "Contrato",
      lead: "Maria Silva",
      prop: "Apto 2 qtos Centro",
      tasks: ["Fiador aprovado", "Vistoria inicial agendada"],
    },
    {
      id: "mcmv",
      name: "MCMV",
      stage1: "Simulação",
      stage2: "Aprovação Caixa",
      stage3: "Assinatura",
      lead: "Carlos Eduardo",
      prop: "Residencial Jardim",
      tasks: ["Documentação completa", "Simulação aprovada"],
    },
    {
      id: "lancamentos",
      name: "Lançamentos",
      stage1: "Lead Frio",
      stage2: "Apresentação",
      stage3: "Reserva",
      lead: "Ana Paula",
      prop: "Haus Studios",
      tasks: ["Tour virtual enviado", "Proposta assinada"],
    },
  ];
  const [activeFunnel, setActiveFunnel] = React.useState(funnels[0]);

  // Banco de Leads Mockup State
  const poolLeads = [
    {
      id: 1,
      name: "Fernanda Lima",
      interest: "Apt 3 dorms Gonzaga · até R$ 850k",
      origin: "VivaReal",
      inactiveDays: 14,
      score: "Alta Intenção",
    },
    {
      id: 2,
      name: "Marcelo Ribeiro",
      interest: "Casa em Condomínio · até R$ 1.4M",
      origin: "Instagram Ads",
      inactiveDays: 22,
      score: "Investidor",
    },
    {
      id: 3,
      name: "Juliana Mendes",
      interest: "Studio Ponta da Praia · R$ 390k",
      origin: "Site Próprio",
      inactiveDays: 30,
      score: "FGTS Aprovado",
    },
  ];
  const [claimedLeads, setClaimedLeads] = React.useState<number[]>([]);
  const [poolFilter, setPoolFilter] = React.useState("Todos");

  // Check-in Mockup State
  const [isCheckedIn, setIsCheckedIn] = React.useState(true);

  // Documentos Mockup State
  const docTypes = [
    {
      id: "termo",
      title: "Termo de Visita",
      subtitle: "Assinatura pré/pós visita de imóvel",
      code: "TV-2025/089",
      client: "Ricardo Alcantara",
      prop: "Rua Tolentino Filgueiras, 142 - Gonzaga",
      badge: "Obrigatório CRECI",
    },
    {
      id: "autorizacao",
      title: "Autorização de Venda",
      subtitle: "Exclusividade e termo de intermediação",
      code: "AV-2025/112",
      client: "Helena Prado (Proprietária)",
      prop: "Av. Bartolomeu de Gusmão, 45 - Santos",
      badge: "Comissão 6%",
    },
    {
      id: "proposta",
      title: "Proposta Formal",
      subtitle: "Condições de pagamento e entrada",
      code: "PF-2025/304",
      client: "Thiago & Patrícia Santos",
      prop: "Edifício Costa Marina, Apto 82",
      badge: "Validade 5 dias",
    },
    {
      id: "locacao",
      title: "Contrato de Locação",
      subtitle: "Minuta digital com garantia locatícia",
      code: "CL-2025/047",
      client: "Camila Duarte (Locatária)",
      prop: "Rua Euclides da Cunha, 88 - Pompeia",
      badge: "Garantia: Seguro",
    },
  ];
  const [activeDoc, setActiveDoc] = React.useState(docTypes[0]);
  const [docGenerated, setDocGenerated] = React.useState(false);

  const automations = [
    {
      id: "lead-ads",
      name: "Novo Lead",
      trigger: "Lead se cadastra via Facebook Ads",
      action1: "Enviar WhatsApp de boas-vindas",
      action2: "Distribuir no Rodízio (Plantão Digital)",
      triggerIcon: Building2,
      action1Icon: MessageCircle,
      action2Icon: Users,
      triggerColor: "amber",
      action1Color: "green",
      action2Color: "blue",
    },
    {
      id: "baixa-preco",
      name: "Baixou Preço",
      trigger: "Imóvel favorito baixou de preço",
      action1: "Enviar E-mail de Oportunidade",
      action2: "Criar tarefa para o corretor ligar",
      triggerIcon: TrendingUp,
      action1Icon: FileText,
      action2Icon: ListChecks,
      triggerColor: "blue",
      action1Color: "purple",
      action2Color: "orange",
    },
    {
      id: "aniversario",
      name: "Pós-Venda",
      trigger: "Aniversário de contrato de locação",
      action1: "Enviar Mensagem Automática",
      action2: "Avisar time de Relacionamento",
      triggerIcon: Target,
      action1Icon: MessageCircle,
      action2Icon: Users,
      triggerColor: "rose",
      action1Color: "green",
      action2Color: "blue",
    },
  ];
  const [activeAutomation, setActiveAutomation] = React.useState(
    automations[0],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="absolute inset-0 bg-grid opacity-15" />

          {/* Radial gradient background accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[color:var(--brand-orange)]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <Link
                title="Página Inicial"
                to="/"
                className="text-sm font-mono-ui uppercase hover:text-[color:var(--brand-orange)] transition text-[color:var(--brand-sand)]/50"
              >
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-[color:var(--brand-sand)]/30" />
              <span className="text-sm font-mono-ui uppercase text-[color:var(--brand-orange)] font-semibold">
                Novidades
              </span>
            </div>

            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[color:var(--brand-orange)]/15 text-[color:var(--brand-orange)] px-4 py-1.5 rounded-full font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                Lançamentos & Atualizações
              </div>
              <h1 className="font-extrabold tracking-[-0.045em] leading-[1.05] text-[clamp(2.4rem,5.5vw,4.5rem)]">
                O maior salto evolutivo na sua{" "}
                <span className="text-[color:var(--brand-orange)] font-serif-italic font-normal">
                  gestão imobiliária
                </span>
                .
              </h1>
              <p className="text-xl text-[color:var(--brand-sand)]/70 leading-relaxed max-w-2xl">
                Reimaginamos a forma como você gerencia seus negócios. Conheça
                as novas ferramentas da Microsistec desenhadas para dar poder
                absoluto à sua equipe.
              </p>
            </div>
          </div>
        </section>

        {/* Atalhos / Índice */}
        <div className="bg-[color:var(--brand-ink)]/95 backdrop-blur-md border-b border-[color:var(--brand-sand)]/10 sticky top-[72px] z-40 hidden md:block">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-6 py-4 overflow-x-auto scrollbar-hide">
              <span className="text-[color:var(--brand-orange)] font-mono-ui font-bold text-[10px] uppercase tracking-widest shrink-0">
                Novidades:
              </span>
              <button
                onClick={() =>
                  document
                    .getElementById("multifunil")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-[color:var(--brand-sand)]/70 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent flex items-center gap-2"
              >
                <SplitSquareHorizontal className="w-4 h-4" /> Multifunil
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("banco-de-leads")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-[color:var(--brand-sand)]/70 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent flex items-center gap-2"
              >
                <Database className="w-4 h-4" /> Banco de Leads
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("checkin")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-[color:var(--brand-sand)]/70 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" /> Check-in de Plantão
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("documentos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-[color:var(--brand-sand)]/70 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent flex items-center gap-2"
              >
                <FileSignature className="w-4 h-4" /> Documentos
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("relatorios")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-[color:var(--brand-sand)]/70 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent flex items-center gap-2"
              >
                <BarChart3 className="w-4 h-4" /> Relatórios
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("integracoes")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-[color:var(--brand-sand)]/70 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" /> Integrações
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("automacoes")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-[color:var(--brand-sand)]/70 hover:text-white font-semibold text-sm whitespace-nowrap transition-colors cursor-pointer border-none bg-transparent flex items-center gap-2"
              >
                <Zap className="w-4 h-4" /> Automações
              </button>
            </div>
          </div>
        </div>

        {/* 1. Multifunil */}
        <section
          id="multifunil"
          className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:py-28 border-b border-[color:var(--brand-ink)]/8"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center mb-4">
                <SplitSquareHorizontal className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)] flex items-center gap-3 flex-wrap">
                Multifunil
                <span className="text-sm md:text-base font-bold bg-[color:var(--brand-orange)] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                  Em breve
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada tipo de negociação exige um processo diferente. Agora você
                tem a possibilidade de <strong>criar múltiplos funis</strong>{" "}
                independentes para Lançamentos, Alto Padrão, Locação e MCMV.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Crie e personalize quantos funis precisar",
                  "Edite as etapas de acordo com seu modelo de negócio",
                  "Adicione checklists obrigatórios em cada etapa",
                  "Mova leads com facilidade e acompanhe a conversão",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                    <span className="text-base font-medium text-[color:var(--brand-ink)]/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Mockup Multifunil */}
            <div className="bg-[color:var(--brand-sand)]/40 p-6 md:p-8 rounded-3xl border border-[color:var(--brand-ink)]/10 shadow-soft">
              <div className="flex gap-2 mb-6 border-b border-[color:var(--brand-ink)]/10 pb-4 overflow-x-auto scrollbar-hide">
                {funnels.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFunnel(f)}
                    className={`px-4 py-2 font-bold rounded-lg shadow-sm border text-sm whitespace-nowrap transition-all cursor-pointer ${activeFunnel.id === f.id ? "bg-white text-[color:var(--brand-ink)] border-[color:var(--brand-ink)]/5" : "bg-transparent text-muted-foreground border-transparent hover:bg-white/50"}`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <div className="flex-1 bg-white rounded-xl border border-[color:var(--brand-ink)]/5 p-4 shadow-sm opacity-60">
                  <h4 className="font-bold text-sm mb-3">
                    {activeFunnel.stage1}
                  </h4>
                  <div className="h-16 bg-gray-50 rounded-lg mb-2" />
                  <div className="h-16 bg-gray-50 rounded-lg" />
                </div>
                <div className="flex-1 bg-white rounded-xl border border-[color:var(--brand-orange)]/40 p-4 shadow-md relative scale-105 z-10 ring-4 ring-[color:var(--brand-orange)]/10 transition-all duration-300">
                  <h4 className="font-bold text-sm mb-3 flex items-center justify-between">
                    {activeFunnel.stage2}{" "}
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                      3
                    </span>
                  </h4>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                    <p className="font-semibold text-sm">{activeFunnel.lead}</p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {activeFunnel.prop}
                    </p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-xs text-green-700 font-medium">
                        <CheckCircle2 className="w-3 h-3" />{" "}
                        {activeFunnel.tasks[0]}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-3 h-3 border border-gray-300 rounded-full" />{" "}
                        {activeFunnel.tasks[1]}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl border border-[color:var(--brand-ink)]/5 p-4 shadow-sm opacity-60 hidden md:block">
                  <h4 className="font-bold text-sm mb-3">
                    {activeFunnel.stage3}
                  </h4>
                  <div className="h-16 bg-gray-50 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Banco de Leads (Pool de Oportunidades) */}
        <section
          id="banco-de-leads"
          className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:py-28 border-b border-[color:var(--brand-ink)]/8"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Mockup Banco de Leads */}
            <div className="order-2 lg:order-1 bg-[color:var(--brand-sand)]/40 p-6 md:p-8 rounded-3xl border border-[color:var(--brand-ink)]/10 shadow-soft">
              <div className="flex items-center justify-between pb-4 border-b border-[color:var(--brand-ink)]/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-orange)]/15 text-[color:var(--brand-orange)] flex items-center justify-center font-bold">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[color:var(--brand-ink)]">
                      Pool de Leads Disponíveis
                    </h4>
                    <p className="text-[11px] text-muted-foreground font-mono-ui">
                      248 oportunidades na base da imobiliária
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono-ui font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                  Fila Livre
                </span>
              </div>

              {/* Filter pills */}
              <div className="flex gap-1.5 mb-4 overflow-x-auto scrollbar-hide pb-1">
                {[
                  "Todos",
                  "Alto Padrão",
                  "Inativos > 15d",
                  "3 Dormitórios",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setPoolFilter(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition border cursor-pointer ${poolFilter === tag ? "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] border-[color:var(--brand-ink)]" : "bg-white text-muted-foreground border-gray-200 hover:border-[color:var(--brand-orange)]"}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Pool cards list */}
              <div className="space-y-3">
                {poolLeads.map((lead) => {
                  const isClaimed = claimedLeads.includes(lead.id);
                  return (
                    <div
                      key={lead.id}
                      className={`p-4 rounded-2xl border transition-all duration-300 ${isClaimed ? "bg-emerald-50/70 border-emerald-300" : "bg-white border-[color:var(--brand-ink)]/8 hover:border-[color:var(--brand-orange)]/30 hover:shadow-md"}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-[color:var(--brand-ink)]">
                              {lead.name}
                            </span>
                            <span className="text-[10px] font-mono-ui bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md font-medium">
                              {lead.origin}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {lead.interest}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono-ui text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md shrink-0 font-semibold">
                          Sem contato há {lead.inactiveDays}d
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2.5 border-t border-gray-100 mt-2">
                        <span className="text-[11px] font-semibold text-[color:var(--brand-orange)] flex items-center gap-1">
                          ✦ {lead.score}
                        </span>

                        <button
                          onClick={() => {
                            if (isClaimed) {
                              setClaimedLeads(
                                claimedLeads.filter((id) => id !== lead.id),
                              );
                            } else {
                              setClaimedLeads([...claimedLeads, lead.id]);
                            }
                          }}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 border-none cursor-pointer ${
                            isClaimed
                              ? "bg-emerald-600 text-white shadow-sm"
                              : "bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)]"
                          }`}
                        >
                          {isClaimed ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" /> Pescado
                              por Você
                            </>
                          ) : (
                            <>🎣 Pescar Lead</>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-[color:var(--brand-ink)]/15 text-center text-[11px] text-muted-foreground font-mono-ui">
                Corretores podem resgatar leads e reaquecer vendas a qualquer
                momento.
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)] flex items-center gap-3 flex-wrap">
                Banco de Leads
                <span className="text-sm md:text-base font-bold bg-[color:var(--brand-orange)] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                  Novo
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nenhum contato é esquecido ou desperdiçado. O{" "}
                <strong>Banco de Leads</strong> cria uma pool central
                inteligente com todos os leads não atendidos, parados ou da base
                geral, permitindo que os corretores mais proativos{" "}
                <strong>pesquem oportunidades</strong> e fechem vendas no seu
                próprio ritmo.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Pool compartilhada com histórico completo de cada conversa e preferência",
                  "Filtros avançados por faixa de valor, bairros de interesse e data de entrada",
                  "Pesca em 1 clique: o corretor assume o lead na hora e transfere para o seu funil",
                  "Reativação inteligente: transforme leads frios em novos negócios sem custo extra de mídia",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                    <span className="text-base font-medium text-[color:var(--brand-ink)]/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Check-in de Plantão */}
        <section
          id="checkin"
          className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:py-28 border-b border-[color:var(--brand-ink)]/8"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)] flex items-center gap-3 flex-wrap">
                Check-in de Plantão
                <span className="text-sm md:text-base font-bold bg-[color:var(--brand-orange)] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                  Novo
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Distribuição de leads 100% justa e focada em quem está pronto
                para responder. Com o <strong>Check-in de Plantão</strong>, o
                corretor sinaliza presença pelo app ou na sede da imobiliária e
                entra imediatamente na fila do rodízio.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Check-in simples pelo smartphone com validação de presença",
                  "Entrada e saída automática da fila de rodízio de atendimento",
                  "Zero leads perdidos: contatos novos só vão para corretores 100% disponíveis",
                  "Visão em tempo real para o gestor de quem está no plantão, em visita ou folga",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                    <span className="text-base font-medium text-[color:var(--brand-ink)]/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Mockup Check-in */}
            <div className="bg-[color:var(--brand-sand)]/40 p-6 md:p-8 rounded-3xl border border-[color:var(--brand-ink)]/10 shadow-soft">
              {/* Phone app header simulation */}
              <div className="bg-white rounded-2xl border border-[color:var(--brand-ink)]/8 p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[color:var(--brand-ink)] text-white flex items-center justify-center font-bold text-sm">
                      RM
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[color:var(--brand-ink)]">
                        Rodrigo Mendes
                      </h4>
                      <p className="text-[11px] text-muted-foreground font-mono-ui">
                        Corretor de Vendas · CRECI 184920
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-mono-ui font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${isCheckedIn ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-600"}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${isCheckedIn ? "bg-emerald-500 animate-ping" : "bg-gray-400"}`}
                    />
                    {isCheckedIn ? "ONLINE NO RODÍZIO" : "OFFLINE"}
                  </span>
                </div>

                {/* Checkin Action Card */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[color:var(--brand-ink)] to-[#1c2433] text-[color:var(--brand-sand)] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-ui text-[color:var(--brand-orange)] font-bold flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5" /> Plantão Sede Gonzaga
                    </span>
                    <span className="text-[10px] font-mono-ui text-white/60">
                      GPS Validado ✓
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold text-white">
                        Sua posição na fila
                      </p>
                      <p className="text-xs text-[color:var(--brand-sand)]/70">
                        {isCheckedIn
                          ? "Você é o próximo a receber lead (#1)"
                          : "Faça check-in para entrar na fila"}
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCheckedIn(!isCheckedIn)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition shadow-sm border-none cursor-pointer ${
                        isCheckedIn
                          ? "bg-red-500/20 text-red-300 hover:bg-red-500/30 border border-red-500/30"
                          : "bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] hover:opacity-90"
                      }`}
                    >
                      {isCheckedIn ? "Pausar Plantão" : "Fazer Check-in"}
                    </button>
                  </div>
                </div>

                {/* Live queue list */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold font-mono-ui text-muted-foreground uppercase tracking-wider block">
                    Fila Ativa do Rodízio
                  </span>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200/60 text-xs">
                    <span className="font-semibold text-emerald-900 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                        1
                      </span>
                      Rodrigo Mendes (Você)
                    </span>
                    <span className="font-mono-ui text-emerald-700 font-bold">
                      Próximo da Vez
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                    <span className="font-semibold text-gray-700 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold text-[10px]">
                        2
                      </span>
                      Carla Silveira
                    </span>
                    <span className="font-mono-ui text-muted-foreground">
                      Aguardando
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs opacity-75">
                    <span className="font-semibold text-gray-700 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-bold text-[10px]">
                        3
                      </span>
                      Bruno Castro
                    </span>
                    <span className="font-mono-ui text-muted-foreground">
                      Em Atendimento
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Central de Documentos */}
        <section
          id="documentos"
          className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:py-28 border-b border-[color:var(--brand-ink)]/8"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Mockup Documentos */}
            <div className="order-2 lg:order-1 bg-[color:var(--brand-sand)]/40 p-6 md:p-8 rounded-3xl border border-[color:var(--brand-ink)]/10 shadow-soft">
              {/* Document selection tabs */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {docTypes.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => {
                      setActiveDoc(doc);
                      setDocGenerated(false);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      activeDoc.id === doc.id
                        ? "bg-white border-[color:var(--brand-orange)] shadow-md ring-2 ring-[color:var(--brand-orange)]/10"
                        : "bg-white/60 border-[color:var(--brand-ink)]/8 hover:bg-white"
                    }`}
                  >
                    <p className="font-bold text-xs text-[color:var(--brand-ink)]">
                      {doc.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {doc.subtitle}
                    </p>
                  </button>
                ))}
              </div>

              {/* Document Preview Paper */}
              <div className="bg-white rounded-2xl border border-[color:var(--brand-ink)]/10 p-6 shadow-sm relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[color:var(--brand-orange)]" />
                    <span className="font-bold text-xs text-[color:var(--brand-ink)]">
                      {activeDoc.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-ui font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                    {activeDoc.code}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-gray-700">
                  <div className="p-2.5 bg-gray-50 rounded-lg space-y-1">
                    <span className="text-[10px] font-mono-ui text-muted-foreground uppercase">
                      Cliente / Interessado
                    </span>
                    <p className="font-semibold text-gray-900">
                      {activeDoc.client}
                    </p>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded-lg space-y-1">
                    <span className="text-[10px] font-mono-ui text-muted-foreground uppercase">
                      Imóvel Vinculado
                    </span>
                    <p className="font-semibold text-gray-900">
                      {activeDoc.prop}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-[11px] font-mono-ui font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {activeDoc.badge}
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setDocGenerated(true)}
                      className="px-4 py-2 rounded-full text-xs font-bold bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] hover:bg-[color:var(--brand-orange)] hover:text-[color:var(--brand-ink)] transition flex items-center gap-1.5 border-none cursor-pointer shadow-sm"
                    >
                      <FileDown className="w-3.5 h-3.5" />{" "}
                      {docGenerated
                        ? "PDF Gerado com Sucesso ✓"
                        : "Gerar Documento"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center text-[11px] text-muted-foreground font-mono-ui">
                Campos e dados de clientes e imóveis são preenchidos de forma
                100% automática pelo CRM.
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-4">
                <FileSignature className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)] flex items-center gap-3 flex-wrap">
                Documentos Automatizados
                <span className="text-sm md:text-base font-bold bg-[color:var(--brand-orange)] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                  Novo
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chega de perder tempo preenchendo contratos e termos manualmente
                no Word. Crie, gere e envie{" "}
                <strong>
                  contratos, propostas, autorizações de venda e locação e termos
                  de visita
                </strong>{" "}
                em segundos com dados integrados ao CRM.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Geração automática com dados do cliente, imóvel, valores e comissão já preenchidos",
                  "Modelos para Termos de Visita, Autorizações de Intermediação, Propostas e Contratos de Locação",
                  "Pronto para assinatura digital ou exportação imediata em PDF padronizado",
                  "Histórico contratual arquivado automaticamente na ficha de cada negócio",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                    <span className="text-base font-medium text-[color:var(--brand-ink)]/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Relatórios */}
        <section
          id="relatorios"
          className="scroll-mt-32 bg-[color:var(--brand-ink)] text-white py-20 md:py-32 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="w-12 h-12 bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] rounded-xl flex items-center justify-center mb-6 mx-auto">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-[color:var(--brand-sand)] flex items-center justify-center gap-3 flex-wrap">
                Visão 360º em Tempo Real
                <span className="text-sm md:text-base font-bold bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-3 py-1 rounded-full uppercase tracking-wider">
                  Em breve
                </span>
              </h2>
              <p className="text-lg text-[color:var(--brand-sand)]/70 leading-relaxed">
                Novos relatórios gerenciais focados em dados analíticos e de
                desempenho. Saiba exatamente o que está acontecendo na sua
                imobiliária com clareza absoluta.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Analíticos */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[color:var(--brand-orange)]">
                  <FileText className="w-6 h-6" /> Dados Analíticos
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-lg border-b border-white/10 pb-2 mb-4 text-[color:var(--brand-sand)]">
                      Imóveis
                    </h4>
                    <ul className="grid grid-cols-2 gap-3">
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                        Desatualizados
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                        Captados
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                        Atualizados
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                        Corretores inativos
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80 col-span-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                        Cancelados / Suspensos
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg border-b border-white/10 pb-2 mb-4 text-[color:var(--brand-sand)]">
                      Negócios
                    </h4>
                    <ul className="grid grid-cols-2 gap-3">
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                        Novos (Leads)
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                        Visitas
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                        Estagnados
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                        Desatualizados
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />{" "}
                        Perdidos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Desempenho */}
              <div className="bg-[color:var(--brand-orange)]/10 border border-[color:var(--brand-orange)]/20 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[color:var(--brand-orange)]">
                  <TrendingUp className="w-6 h-6" /> Desempenho (Performance)
                </h3>

                <div className="space-y-6 mt-8">
                  {[
                    {
                      title: "Performance do Corretor",
                      desc: "Meça conversão, tempo de resposta e engajamento.",
                    },
                    {
                      title: "Performance da Equipe",
                      desc: "Visão global de metas e fechamentos do time.",
                    },
                    {
                      title: "Ranking dos Corretores",
                      desc: "Gamificação baseada em resultados reais.",
                    },
                    {
                      title: "Desempenho por Funil",
                      desc: "Identifique gargalos em Lançamentos vs Prontos.",
                    },
                    {
                      title: "Qualidade dos Leads",
                      desc: "Analise a origem que traz o melhor ROI.",
                    },
                    {
                      title: "Qualidade dos Anúncios",
                      desc: "Fotos e descrições que geram mais cliques.",
                    },
                  ].map((perf, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[color:var(--brand-orange)]/20 text-[color:var(--brand-orange)] flex items-center justify-center shrink-0">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-[color:var(--brand-sand)]">
                          {perf.title}
                        </h4>
                        <p className="text-sm text-white/60">{perf.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Integração com Portais */}
        <section
          id="integracoes"
          className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:py-32 border-b border-[color:var(--brand-ink)]/8"
        >
          {/* Integração Multi-Corretor */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-[color:var(--brand-sand)]/40 p-8 rounded-3xl border border-[color:var(--brand-ink)]/10 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[color:var(--brand-ink)]/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[color:var(--brand-ink)] rounded-full flex items-center justify-center text-white font-bold">
                      ZAP
                    </div>
                    <div>
                      <p className="font-bold text-sm">
                        Plano ZAP 500 Anúncios
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Distribuição Multi Corretor ATIVADA
                      </p>
                    </div>
                  </div>
                  <span className="text-emerald-600 bg-emerald-100 px-2 py-1 rounded text-xs font-bold">
                    Ativo
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-[color:var(--brand-ink)]/5 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-semibold text-sm">
                        Corretor A (João)
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-1">Cota</p>
                      <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[80%] h-full bg-blue-500" />
                      </div>
                      <p className="text-[10px] font-bold mt-1">
                        40 / 50 Anúncios
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[color:var(--brand-ink)]/5 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="font-semibold text-sm">
                        Corretor B (Maria)
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-1">Cota</p>
                      <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-[30%] h-full bg-purple-500" />
                      </div>
                      <p className="text-[10px] font-bold mt-1">
                        15 / 50 Anúncios
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)] flex items-center gap-3 flex-wrap">
                Integração com Portais: Multi Corretor
                <span className="text-sm md:text-base font-bold bg-[color:var(--brand-orange)] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                  Em breve
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Remodelamos a experiência de publicação em portais. Agora você
                tem a opção <strong>Multi Corretor</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quando ativado,{" "}
                <strong>cada corretor recebe a própria cota</strong> em cada
                tipo de anúncio contratado no portal (Zap, VivaReal, etc). Fim
                das brigas por destaque!
              </p>
            </div>
          </div>
        </section>

        {/* 7. Automações */}
        <section
          id="automacoes"
          className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 md:py-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)] flex items-center gap-3 flex-wrap">
                Automações de Fluxo
                <span className="text-sm md:text-base font-bold bg-[color:var(--brand-orange)] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                  Em breve
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trabalhe menos, feche mais. Cada fluxo é composto por um{" "}
                <strong>gatilho</strong> e uma sequência de{" "}
                <strong>ações</strong> que o sistema executa sozinho — sem
                ninguém precisar lembrar.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-base text-[color:var(--brand-ink)]">
                      Gatilhos Inteligentes
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      "Quando um imóvel mudar de preço", "Quando um lead chegar
                      de madrugada".
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Workflow className="w-5 h-5 text-[color:var(--brand-orange)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-base text-[color:var(--brand-ink)]">
                      Ações Sequenciais
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      "Envie um WhatsApp", "Atribua ao corretor de plantão",
                      "Adicione a tag 'Urgente'".
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Visual Automação */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-[color:var(--brand-ink)]/10 shadow-inner relative flex flex-col items-center">
              <div className="flex gap-2 mb-8 bg-white p-1.5 rounded-xl border border-[color:var(--brand-ink)]/5 shadow-sm overflow-x-auto w-full scrollbar-hide">
                {automations.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setActiveAutomation(a)}
                    className={`flex-1 min-w-[120px] px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer border-none whitespace-nowrap ${activeAutomation.id === a.id ? "bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)]" : "bg-transparent text-muted-foreground hover:bg-gray-50"}`}
                  >
                    {a.name}
                  </button>
                ))}
              </div>

              {/* Trigger */}
              <div
                className={`bg-white border-2 border-${activeAutomation.triggerColor}-400 p-4 rounded-xl shadow-md w-full max-w-sm flex items-center gap-4 z-10 transition-all duration-300`}
              >
                <div
                  className={`w-10 h-10 bg-${activeAutomation.triggerColor}-100 rounded-full flex items-center justify-center shrink-0`}
                >
                  <activeAutomation.triggerIcon
                    className={`w-5 h-5 text-${activeAutomation.triggerColor}-600`}
                  />
                </div>
                <div>
                  <p
                    className={`text-xs font-bold text-${activeAutomation.triggerColor}-600 uppercase tracking-wider mb-1`}
                  >
                    GATILHO
                  </p>
                  <p className="font-semibold text-sm">
                    {activeAutomation.trigger}
                  </p>
                </div>
              </div>

              {/* Line */}
              <div className="w-0.5 h-8 bg-gray-300 transition-all duration-300" />

              {/* Action 1 */}
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm w-full max-w-sm flex items-center gap-4 z-10 transition-all duration-300">
                <div
                  className={`w-8 h-8 bg-${activeAutomation.action1Color}-100 rounded-full flex items-center justify-center shrink-0`}
                >
                  <activeAutomation.action1Icon
                    className={`w-4 h-4 text-${activeAutomation.action1Color}-600`}
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                    AÇÃO 1
                  </p>
                  <p className="font-semibold text-sm">
                    {activeAutomation.action1}
                  </p>
                </div>
              </div>

              {/* Line */}
              <div className="w-0.5 h-8 bg-gray-300 transition-all duration-300" />

              {/* Action 2 */}
              <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm w-full max-w-sm flex items-center gap-4 z-10 transition-all duration-300">
                <div
                  className={`w-8 h-8 bg-${activeAutomation.action2Color}-100 rounded-full flex items-center justify-center shrink-0`}
                >
                  <activeAutomation.action2Icon
                    className={`w-4 h-4 text-${activeAutomation.action2Color}-600`}
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                    AÇÃO 2
                  </p>
                  <p className="font-semibold text-sm">
                    {activeAutomation.action2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] border-t border-white/5 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="mx-auto max-w-4xl px-6 relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Pronto para elevar o nível da sua imobiliária?
            </h2>
            <p className="text-xl text-[color:var(--brand-sand)]/70 max-w-2xl mx-auto">
              Todas essas novidades já estão prontas para transformar seus
              resultados. Fale conosco e veja na prática.
            </p>
            <a
              title="Falar com Especialista"
              href="https://api.whatsapp.com/send/?phone=5513997591781&text=Ol%C3%A1%2C+quero+saber+mais+sobre+as+Novidades+da+Microsistec&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-8 py-4 font-bold text-xl hover:bg-[color:var(--brand-sand)] transition shadow-elev no-underline decoration-none cursor-pointer"
            >
              Falar com um Especialista <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
