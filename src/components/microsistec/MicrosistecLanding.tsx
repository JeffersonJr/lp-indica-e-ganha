// @ts-nocheck
import * as React from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Workflow,
  Smartphone,
  Target,
  LineChart,
  Bot,
  MessageSquare,
  Building2,
  Globe,
  ShieldCheck,
  CheckCircle2,
  Quote,
  KeyRound,
  ChevronDown,
  Menu,
  X,
  Users,
  Home,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useDemoModal } from "@/hooks/use-demo-modal";
import {
  solutions,
  getIconComponent,
  blogPosts,
  testimonials,
} from "@/lib/data";

const Testimonial = React.lazy(() => import("./Testimonial"));

/* -------------------------------------------------------------------------- */
/*  NAV                                                                       */
/* -------------------------------------------------------------------------- */
type OpenMenu = "solucoes" | "planos" | null;

export function Nav() {
  const { openModal } = useDemoModal();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<OpenMenu>(null);
  const [scrolled, setScrolled] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  const toggleMenu = (menu: OpenMenu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 pointer-events-none">
      <div
        ref={navRef}
        className={`relative mx-auto max-w-7xl pointer-events-auto nav-pill ${scrolled ? "nav-pill-scrolled" : ""}`}
      >
        <div className="flex items-center justify-between px-5 py-2.5 w-full gap-4">
          {/* Logo à esquerda */}
          <Link
            to="/"
            data-gtm-cta="home_logo_header"
            data-gtm-location="header"
            className="flex flex-row items-center gap-2 font-bold text-2xl tracking-[-0.03em] hover:opacity-85 transition-opacity shrink-0"
            title="Microsistec - Marca Registrada"
            onClick={() => setOpenMenu(null)}
          >
            <img
              src="/icon.svg"
              alt="Microsistec Logo"
              title="Microsistec - Tecnologia e Inovação"
              width={32}
              height={32}
              fetchPriority="high"
              className="w-8 h-8 object-contain"
            />
            <div className="flex items-baseline gap-0.5">
              Microsistec
              <span
                className="text-[18px] text-muted-foreground self-start mt-1 select-none font-sans font-normal"
                title="Marca Registrada"
              >
                ®
              </span>
            </div>
          </Link>

          {/* Links no meio (apenas Desktop) */}
          <nav className="hidden xl:flex items-center justify-center gap-1 text-base flex-1">
            {/* Soluções */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("solucoes")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-base font-semibold transition cursor-pointer border-none bg-transparent ${openMenu === "solucoes" ? "text-[color:var(--brand-orange)] bg-[color:var(--brand-ink)]/5" : "text-muted-foreground hover:text-foreground hover:bg-[color:var(--brand-ink)]/4"}`}
              >
                Soluções
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{
                    transform:
                      openMenu === "solucoes"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>
            </div>

            {/* Planos */}
            <div className="relative">
              <button
                onClick={() => toggleMenu("planos")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-base font-semibold transition cursor-pointer border-none bg-transparent ${openMenu === "planos" ? "text-[color:var(--brand-orange)] bg-[color:var(--brand-ink)]/5" : "text-muted-foreground hover:text-foreground hover:bg-[color:var(--brand-ink)]/4"}`}
              >
                Planos
                <ChevronDown
                  className="w-3.5 h-3.5 transition-transform duration-200"
                  style={{
                    transform:
                      openMenu === "planos" ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
            </div>

            <Link
              title="Novidades e Lançamentos"
              to="/novidades"
              onClick={() => setOpenMenu(null)}
              data-gtm-cta="nav_novidades"
              data-gtm-location="header"
              className="px-3 py-2 rounded-full text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-[color:var(--brand-ink)]/4 transition"
            >
              Novidades
            </Link>
            <Link
              title="Sobre a Microsistec"
              to="/empresa"
              onClick={() => setOpenMenu(null)}
              data-gtm-cta="nav_sobre"
              data-gtm-location="header"
              className="px-3 py-2 rounded-full text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-[color:var(--brand-ink)]/4 transition"
            >
              Sobre
            </Link>
            <Link
              title="Blog da Microsistec - Conteúdos sobre Mercado Imobiliário"
              to="/blog"
              onClick={() => setOpenMenu(null)}
              data-gtm-cta="nav_blog"
              data-gtm-location="header"
              className="px-3 py-2 rounded-full text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-[color:var(--brand-ink)]/4 transition"
            >
              Blog
            </Link>
            <Link
              title="Materiais Ricos e Gratuitos"
              to="/materiais"
              onClick={() => setOpenMenu(null)}
              data-gtm-cta="nav_materiais"
              data-gtm-location="header"
              className="px-3 py-2 rounded-full text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-[color:var(--brand-ink)]/4 transition"
            >
              Materiais
            </Link>
          </nav>

          {/* CTAs à direita */}
          <div className="flex items-center justify-end gap-2 shrink-0">
            <a
              title="Acessar o Sistema Imob Online"
              href="https://imob.online/"
              target="_blank"
              rel="noreferrer"
              data-gtm-cta="entrar_imobonline_header"
              data-gtm-location="header"
              className="hidden xl:inline text-base font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-full hover:bg-[color:var(--brand-ink)]/4"
            >
              Entrar
            </a>
            <button
              title="Falar com especialista"
              onClick={openModal}
              data-gtm-cta="falar_especialista_header"
              data-gtm-location="header"
              data-gtm-modal-open="modal_demonstracao"
              className="btn-micro hidden xl:inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] text-base font-semibold px-4 py-2 hover:opacity-90 cursor-pointer border-none no-underline group"
            >
              Falar com especialista{" "}
              <ArrowUpRight className="icon-micro-nudge w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                setIsMobileOpen(!isMobileOpen);
                setOpenMenu(null);
              }}
              data-gtm-cta="menu_mobile_toggle"
              data-gtm-location="header"
              className="xl:hidden inline-flex items-center justify-center w-9 h-9 rounded-full text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-ink)]/8 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu Panels — Tesla Style */}
        {openMenu === "solucoes" && (
          <div className="absolute top-full left-0 right-0 mt-3 w-full bg-[color:var(--brand-sand)]/98 backdrop-blur-xl border border-[color:var(--brand-ink)]/12 rounded-[24px] p-8 shadow-elev animate-fadeIn z-50 pointer-events-auto">
            <div className="grid grid-cols-4 gap-8 text-left">
              {/* Col 1: Operação */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2">
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Operação & Vendas
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      slug: "crm",
                      title: "CRM Imobiliário",
                      desc: "Gestão operacional e base unificada",
                      icon: Building2,
                    },
                    {
                      slug: "app",
                      title: "App de Atendimento",
                      desc: "Mobilidade e agilidade na rua",
                      icon: Smartphone,
                    },
                    {
                      slug: "funil",
                      title: "Multi-Funil Kanban",
                      desc: "Pipelines separados por processo",
                      icon: LineChart,
                    },
                    {
                      slug: "rodizio",
                      title: "Rodízio de Leads",
                      desc: "Distribuição automática e justa",
                      icon: Users,
                    },
                  ].map((item) => (
                    <Link
                      title="Conhecer solução"
                      key={item.slug}
                      to="/solucoes/$slug"
                      params={{ slug: item.slug }}
                      onClick={() => setOpenMenu(null)}
                      className="mega-item-stagger flex items-start gap-3 p-2.5 rounded-xl hover:bg-[color:var(--brand-ink)]/4 transition group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-orange)]/10 group-hover:bg-[color:var(--brand-orange)]/20 flex items-center justify-center shrink-0 transition">
                        <item.icon className="icon-micro-rotate w-4 h-4 text-[color:var(--brand-orange)]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-[color:var(--brand-ink)] group-hover:text-[color:var(--brand-orange)] transition-colors leading-none mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 2: Presença Digital */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2">
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Presença Digital
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      slug: "sites-template",
                      title: "Sites Express",
                      desc: "Templates otimizados em 1 dia",
                      icon: Globe,
                    },
                    {
                      slug: "sites-v8",
                      title: "Sites Custom V8",
                      desc: "Design exclusivo de alta performance",
                      icon: Sparkles,
                    },
                    {
                      slug: "integracoes",
                      title: "Integrações",
                      desc: "WhatsApp API e portais integrados",
                      icon: Workflow,
                    },
                  ].map((item) => (
                    <Link
                      title="Conhecer solução"
                      key={item.slug}
                      to="/solucoes/$slug"
                      params={{ slug: item.slug }}
                      onClick={() => setOpenMenu(null)}
                      className="mega-item-stagger flex items-start gap-3 p-2.5 rounded-xl hover:bg-[color:var(--brand-ink)]/4 transition group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-orange)]/10 group-hover:bg-[color:var(--brand-orange)]/20 flex items-center justify-center shrink-0 transition">
                        <item.icon className="icon-micro-rotate w-4 h-4 text-[color:var(--brand-orange)]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-[color:var(--brand-ink)] group-hover:text-[color:var(--brand-orange)] transition-colors leading-none mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 3: Inteligência Artificial */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2">
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Inteligência Artificial
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      slug: "albert-ia",
                      title: "Albert IA (SDR)",
                      desc: "Conversa e agenda no WhatsApp 24/7",
                      icon: Bot,
                    },
                  ].map((item) => (
                    <Link
                      title="Conhecer solução"
                      key={item.slug}
                      to="/solucoes/$slug"
                      params={{ slug: item.slug }}
                      onClick={() => setOpenMenu(null)}
                      className="mega-item-stagger flex items-start gap-3 p-2.5 rounded-xl hover:bg-[color:var(--brand-ink)]/4 transition group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-orange)]/10 group-hover:bg-[color:var(--brand-orange)]/20 flex items-center justify-center shrink-0 transition">
                        <item.icon className="icon-micro-rotate w-4 h-4 text-[color:var(--brand-orange)]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-[color:var(--brand-ink)] group-hover:text-[color:var(--brand-orange)] transition-colors leading-none mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Col 4: Financeiro */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2">
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Financeiro
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-2.5 rounded-xl text-[color:var(--brand-ink)]/35 cursor-not-allowed">
                    <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-ink)]/5 flex items-center justify-center shrink-0">
                      <Home className="w-4 h-4 text-muted-foreground/45" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <h4 className="font-bold text-base leading-none">
                          Sistema de Locação
                        </h4>
                        <span className="badge-pulse text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 leading-none">
                          Em breve
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground/50 leading-normal">
                        Contratos, reajustes e repasses imobiliários digitais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-6 pt-6 border-t border-[color:var(--brand-ink)]/8 flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Tem alguma dúvida operacional ou deseja integrar canais
                específicos?
              </span>
              <button
                title="Falar com especialista"
                onClick={openModal}
                data-gtm-cta="falar_especialista_mega_menu"
                data-gtm-location="mega_menu"
                data-gtm-modal-open="modal_demonstracao"
                className="inline-flex items-center gap-1 font-bold text-[color:var(--brand-orange)] hover:underline border-none bg-transparent cursor-pointer p-0"
              >
                Falar com especialista <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {openMenu === "planos" && (
          <div className="absolute top-full left-0 right-0 mt-3 w-full bg-[color:var(--brand-sand)]/98 backdrop-blur-xl border border-[color:var(--brand-ink)]/12 rounded-[24px] p-8 shadow-elev animate-fadeIn z-50 pointer-events-auto">
            <div className="grid grid-cols-3 gap-8 text-left">
              {/* CRM */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-orange)]/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4 text-[color:var(--brand-orange)]" />
                  </div>
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    CRM Imobiliário
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  Planos desenhados para corretores independentes, imobiliárias
                  em crescimento ou grandes redes com dezenas de filiais.
                </p>
                <div>
                  <Link
                    title="Planos e Preços do CRM"
                    to="/planos"
                    onClick={() => setOpenMenu(null)}
                    data-gtm-cta="nav_ver_planos_crm"
                    data-gtm-location="mega_menu"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[color:var(--brand-orange)] hover:underline"
                  >
                    Ver tabela de preços do CRM{" "}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Albert IA */}
              <div className="space-y-4">
                <div className="border-b border-[color:var(--brand-ink)]/8 pb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[color:var(--brand-orange)]/10 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-[color:var(--brand-orange)]" />
                  </div>
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-muted-foreground/60">
                    Albert IA (SDR)
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  Automatize o primeiro contato dos portais e Meta Ads no
                  WhatsApp 24/7 com inteligência e qualificação financeira.
                </p>
                <div>
                  <Link
                    title="Planos e Preços da IA Albert"
                    to="/planos-albert"
                    onClick={() => setOpenMenu(null)}
                    data-gtm-cta="nav_ver_planos_albert"
                    data-gtm-location="mega_menu"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[color:var(--brand-orange)] hover:underline"
                  >
                    Conhecer planos do Albert IA{" "}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Promo Banner */}
              <div className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                <div>
                  <span className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-[color:var(--brand-orange)] mb-1 block">
                    Atendimento
                  </span>
                  <h4 className="font-extrabold text-lg mb-2">
                    Fale com um Especialista
                  </h4>
                  <p className="text-sm text-[color:var(--brand-sand)]/70 leading-relaxed">
                    Fale com nosso especialista agora e tire suas dúvidas ou
                    solicite uma simulação customizada para o tamanho da sua
                    imobiliária.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setOpenMenu(null);
                    openModal();
                  }}
                  data-gtm-cta="falar_especialista_promo_banner"
                  data-gtm-location="mega_menu"
                  data-gtm-modal-open="modal_demonstracao"
                  className="btn-micro w-full mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] text-sm font-bold py-2.5 cursor-pointer border-none"
                >
                  Falar com especialista agora
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu — bottom sheet pattern */}
      {isMobileOpen && (
        <>
          {/* Backdrop — tap to close */}
          <div
            className="xl:hidden fixed inset-0 bg-[color:var(--brand-ink)]/30 backdrop-blur-sm z-30 animate-fadeIn pointer-events-auto"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Bottom sheet */}
          <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 animate-fadeIn pointer-events-auto">
            <div className="bg-[color:var(--brand-sand)] rounded-t-[28px] shadow-2xl border-t border-[color:var(--brand-ink)]/8">
              {/* Header com pull bar e botão de fechar */}
              <div className="relative flex justify-center pt-3.5 pb-2">
                {/* Pull bar */}
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full flex justify-center border-none bg-transparent cursor-pointer"
                  aria-label="Fechar menu"
                >
                  <span className="w-10 h-1.5 rounded-full bg-[color:var(--brand-ink)]/20 block" />
                </button>

                {/* Close 'X' Button */}
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="absolute right-4 top-3.5 w-8 h-8 flex items-center justify-center rounded-full bg-[color:var(--brand-ink)]/5 text-[color:var(--brand-ink)]/60 hover:bg-[color:var(--brand-ink)]/10 hover:text-[color:var(--brand-ink)] transition-colors border-none cursor-pointer"
                  aria-label="Fechar menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div
                className="overflow-y-auto px-4 pb-2"
                style={{ maxHeight: "60vh" }}
              >
                {/* Soluções */}
                <p className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-[color:var(--brand-ink)]/40 px-1 mt-1 mb-0.5">
                  Soluções
                </p>
                {solutions.map((sol) => {
                  const IconComp = getIconComponent(sol.iconName);
                  if (sol.ctaText === "Em Breve") return null;
                  return (
                    <Link
                      title="Conhecer solução"
                      key={sol.slug}
                      to="/solucoes/$slug"
                      params={{ slug: sol.slug }}
                      onClick={() => setIsMobileOpen(false)}
                      data-gtm-cta={`mobile_nav_solucao_${sol.slug.replace(/-/g, "_")}`}
                      data-gtm-location="mobile_menu"
                      className="flex items-center gap-3.5 px-2 rounded-2xl hover:bg-[color:var(--brand-ink)]/5 active:bg-[color:var(--brand-ink)]/10 transition no-underline text-[color:var(--brand-ink)]"
                      style={{ minHeight: 52 }}
                    >
                      <div className="w-9 h-9 rounded-xl bg-[color:var(--brand-orange)]/10 flex items-center justify-center shrink-0">
                        <IconComp className="w-[18px] h-[18px] text-[color:var(--brand-orange)]" />
                      </div>
                      <span className="text-[15px] font-semibold flex-1">
                        {sol.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[color:var(--brand-ink)]/25 shrink-0" />
                    </Link>
                  );
                })}

                {/* Divider */}
                <div className="h-px bg-[color:var(--brand-ink)]/8 mx-1 my-2" />

                {/* Outras páginas */}
                <p className="text-[10px] font-mono-ui font-bold uppercase tracking-widest text-[color:var(--brand-ink)]/40 px-1 mb-0.5">
                  Páginas
                </p>
                {(
                  [
                    { label: "Planos CRM", to: "/planos" },
                    { label: "Albert IA", to: "/planos-albert" },
                    { label: "Novidades", to: "/novidades" },
                    { label: "Sobre nós", to: "/empresa" },
                    { label: "Blog", to: "/blog" },
                    { label: "Materiais gratuitos", to: "/materiais" },
                  ] as {
                    label: string;
                    to:
                      | "/planos"
                      | "/planos-albert"
                      | "/novidades"
                      | "/empresa"
                      | "/blog"
                      | "/materiais";
                  }[]
                ).map((item) => (
                  <Link
                    title="Acessar link"
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileOpen(false)}
                    data-gtm-cta={`mobile_nav_${item.to.replace(/\//g, "").replace(/-/g, "_")}`}
                    data-gtm-location="mobile_menu"
                    className="flex items-center gap-3.5 px-2 rounded-2xl text-[15px] font-semibold text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-ink)]/5 active:bg-[color:var(--brand-ink)]/10 transition no-underline"
                    style={{ minHeight: 52 }}
                  >
                    <span className="flex-1">{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[color:var(--brand-ink)]/25 shrink-0" />
                  </Link>
                ))}
              </div>

              {/* Sticky CTAs — always in thumb zone */}
              <div className="px-4 pt-3 pb-8 border-t border-[color:var(--brand-ink)]/8 flex flex-col gap-2.5">
                <button
                  title="Falar com especialista"
                  onClick={openModal}
                  data-gtm-cta="falar_especialista_mobile_sticky"
                  data-gtm-location="mobile_menu"
                  data-gtm-modal-open="modal_demonstracao"
                  className="btn-micro w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] text-[15px] font-bold no-underline border-none cursor-pointer group hover:opacity-90"
                  style={{ minHeight: 56 }}
                >
                  Falar com especialista{" "}
                  <ArrowUpRight className="icon-micro-nudge w-4 h-4" />
                </button>
                <div className="flex gap-2.5">
                  <a
                    title="Acessar o Sistema Imob Online"
                    href="https://imob.online/"
                    target="_blank"
                    rel="noreferrer"
                    data-gtm-cta="entrar_imobonline_mobile"
                    data-gtm-location="mobile_menu"
                    className="flex-1 inline-flex items-center justify-center rounded-2xl bg-transparent text-[color:var(--brand-ink)] text-[15px] font-semibold no-underline active:scale-[0.98] transition border border-[color:var(--brand-ink)]/15"
                    style={{ minHeight: 52 }}
                  >
                    Entrar no sistema
                  </a>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="flex-1 inline-flex items-center justify-center rounded-2xl bg-[color:var(--brand-ink)]/5 text-[color:var(--brand-ink)] text-[15px] font-semibold no-underline active:scale-[0.98] transition border border-transparent hover:bg-[color:var(--brand-ink)]/10 cursor-pointer"
                    style={{ minHeight: 52 }}
                  >
                    Fechar menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO — editorial / blueprint                                              */
/* -------------------------------------------------------------------------- */
function Hero() {
  const { openModal } = useDemoModal();

  return (
    <section
      id="hero"
      data-gtm-section="hero_dobra_1"
      className="relative overflow-hidden bg-hero min-h-screen flex flex-col justify-between lg:h-auto"
    >
      <div className="bg-grid absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-14 md:pt-36 md:pb-20 flex-grow flex flex-col justify-center">
        {/* eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-base">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-ink)]/10 bg-[color:var(--brand-ink)]/[0.03] px-3.5 py-1 text-[13px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-orange)] animate-pulse" />
              A pioneira em tecnologia imobiliária desde 1994
            </span>
          </div>
          <span className="font-serif-italic text-muted-foreground/60 hidden md:inline text-base">
            cap. 01: uma carta para quem ainda vende imóvel no caderninho
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* headline */}
          <h1 className="lg:col-span-9 font-extrabold tracking-[-0.045em] leading-[0.95] text-[clamp(2.6rem,6.5vw,5.2rem)]">
            O CRM Imobiliário
            <br />
            que muda{" "}
            <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
              o jogo
            </span>
            <br />
            Para quem já{" "}
            <span className="underline decoration-[color:var(--brand-orange)] decoration-[6px] underline-offset-[8px]">
              vive
            </span>{" "}
            o futuro
          </h1>

          {/* proof badge */}
          <div className="flex lg:col-span-3 justify-start lg:justify-end mt-8 lg:mt-0 relative z-10">
            <div className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-3xl px-6 py-5 max-w-[280px] shadow-[0_15px_40px_-10px_rgba(255,107,53,0.25)] select-none border border-[color:var(--brand-orange)]/40 -rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 cursor-default">
              <div className="font-mono-ui text-[10px] font-bold text-[color:var(--brand-orange)] uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--brand-orange)] animate-pulse"></span>
                Desde 1994
              </div>
              <p className="font-serif-italic text-2xl leading-[1.3] text-[color:var(--brand-sand)]">
                "feito por gente que conhece imobiliária de verdade"
              </p>
            </div>
          </div>
        </div>

        {/* sub + CTAs */}
        <div className="mt-8 lg:mt-12 grid md:grid-cols-12 gap-8 lg:gap-10 items-start md:items-center">
          <p className="md:col-span-7 text-lg md:text-xl text-foreground/75 leading-relaxed">
            Somos pioneiros em tecnologia imobiliária no Brasil. Hoje nossa
            empresa é focada em <strong>inteligência artificial</strong>.
            Entregamos CRM completo, site personalizado, aplicativo de
            atendimento e automações. Conheça também o{" "}
            <strong className="text-foreground">Albert IA</strong>, o seu novo
            assistente de vendas. Tenha tudo em um só lugar. Validado por 30
            anos de experiência real.
          </p>
          <div className="md:col-span-5 flex flex-col sm:flex-row flex-wrap gap-4 md:justify-end mt-2 md:mt-0">
            <button
              title="Falar com especialista"
              onClick={openModal}
              data-gtm-cta="falar_especialista_hero"
              data-gtm-location="hero_dobra_1"
              data-gtm-modal-open="modal_demonstracao"
              className="cta-shimmer btn-micro w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-5 py-3 md:px-6 md:py-3.5 font-bold hover:opacity-90 cursor-pointer border-none no-underline group"
            >
              Falar com especialista{" "}
              <ArrowRight className="icon-micro-nudge w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  TICKER                                                                    */
/* -------------------------------------------------------------------------- */
function Ticker() {
  const items = [
    "CRM imobiliário",
    "App de atendimento",
    "Site para imobiliária",
    "Albert IA · SDR",
    "Funil de vendas",
    "Automações",
    "Rodízio de leads",
    "Secretaria de vendas",
    "Integração com portais",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-[color:var(--brand-ink)]/15 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)]">
      <div className="overflow-hidden">
        <div className="marquee flex gap-10 py-3.5 whitespace-nowrap text-base">
          {row.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span className="font-serif-italic text-[color:var(--brand-orange)]">
                ✦
              </span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  STATS strip — horizontal, not numbered grid                               */
/* -------------------------------------------------------------------------- */
function StatsStrip() {
  const stats = [
    { n: "32+", label: "Anos de inovação" },
    { n: "30 mil+", label: "Corretores já atendidos" },
    { n: "5 M+", label: "Leads qualificados" },
    { n: "5 mil+", label: "Imobiliárias atendidas" },
  ];
  return (
    <section
      id="resultados"
      data-gtm-section="resultados"
      className="mx-auto max-w-7xl px-6 py-14 md:py-20"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-xl leading-snug">
          Pioneiros em trazer tecnologia para imobiliárias. Três décadas de
          estrada{" "}
          <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
            provam que sabemos
          </span>{" "}
          o que fazemos.
        </h2>
        <span className="font-mono-ui text-sm text-muted-foreground/60">
          operação · {new Date().getFullYear()}
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--brand-ink)]/8 border-y border-[color:var(--brand-ink)]/8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-background py-7 md:py-9 px-5 md:px-6 text-center md:text-left"
          >
            <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-[color:var(--brand-ink)]">
              {s.n}
            </div>
            <div className="text-sm text-muted-foreground mt-1.5 font-mono-ui">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  PILLARS                                                                   */
/* -------------------------------------------------------------------------- */
function Pillars() {
  const items = [
    {
      icon: LineChart,
      title: "Funil de vendas",
      desc: "Controle total dos atendimentos e a foto real da operação, sem planilha.",
    },
    {
      icon: Smartphone,
      title: "App de atendimento",
      desc: "Negociação na palma da mão do corretor. De casa, no trânsito, na visita.",
    },
    {
      icon: Workflow,
      title: "Automações",
      desc: "Fluxos pré-definidos para que nenhum lead caia no esquecimento.",
    },
    {
      icon: Target,
      title: "Gestão de leads",
      desc: "Do primeiro 'oi' até a escritura, toda a história do cliente em um lugar.",
    },
  ];
  return (
    <section
      id="produto"
      data-gtm-section="produto"
      className="relative bg-[color:var(--brand-sand)] border-y border-[color:var(--brand-ink)]/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-14 items-end">
          <h2 className="md:col-span-8 text-5xl md:text-7xl font-bold tracking-tight leading-[1.02]">
            Sistema, Site e App,{" "}
            <span className="font-serif-italic font-normal">
              em um único ecossistema
            </span>
          </h2>
          <p className="md:col-span-4 text-xl text-muted-foreground">
            Tudo o que a imobiliária precisa para vender mais e ter
            previsibilidade, sem amarrar cinco ferramentas com cuspe e arame.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--brand-ink)]/15 border border-[color:var(--brand-ink)]/15 rounded-3xl overflow-hidden">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="bg-background p-7 md:p-8 relative group hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <it.icon className="w-6 h-6 text-[color:var(--brand-orange)]" />
                <span className="font-mono-ui text-sm font-medium text-muted-foreground group-hover:text-[color:var(--brand-sand)]/80">
                  0{i + 1} / 04
                </span>
              </div>
              <h3 className="font-bold text-2xl tracking-tight mb-2">
                {it.title}
              </h3>
              <p className="text-base text-muted-foreground group-hover:text-[color:var(--brand-sand)]/70 leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  ALBERT — warm dark, "terminal" with personality                           */
/* -------------------------------------------------------------------------- */
function Albert() {
  const { openModal } = useDemoModal();
  const features = [
    "Clone do seu melhor SDR, treinado com seu script",
    "Atendimento omnichannel 24/7 (WhatsApp, site, portais)",
    "Qualifica e repassa o lead pro corretor certo",
    "Histórico completo conectado ao CRM Microsistec",
    "Personalizável, não é IA genérica de prateleira",
  ];
  return (
    <section
      id="albert"
      data-gtm-section="albert"
      className="relative overflow-hidden bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)]"
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 90% 10%, oklch(0.7 0.19 45 / 0.4), transparent 60%), radial-gradient(50% 50% at 10% 90%, oklch(0.55 0.1 195 / 0.35), transparent 60%)",
        }}
      />
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="stamp text-[color:var(--brand-orange)] text-sm">
            Albert IA · v2
          </span>
          <span className="font-serif-italic text-[color:var(--brand-sand)]/60">
            conheça
          </span>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-6">
                Uma IA que{" "}
                <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
                  conhece
                </span>{" "}
                imobiliária, não uma que{" "}
                <em className="font-serif-italic text-[color:var(--brand-sand)]/50">
                  finge
                </em>{" "}
                conhecer
              </h2>
              <p className="text-xl text-[color:var(--brand-sand)]/70 mb-8 max-w-xl">
                Chega de chatbot decorando frase. O{" "}
                <strong className="text-[color:var(--brand-sand)]">
                  Albert
                </strong>{" "}
                é montado sob medida para a sua imobiliária, tecnologia de ponta
                com coração humano.
              </p>
              <ul className="space-y-3 mb-8 lg:mb-0">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-[color:var(--brand-sand)]/85"
                  >
                    <CheckCircle2 className="w-5 h-5 mt-0.5 text-[color:var(--brand-orange)] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-6 lg:pt-8">
              <button
                title="Fale conosco pelo WhatsApp"
                onClick={openModal}
                data-gtm-cta="falar_especialista_albert"
                data-gtm-location="albert"
                data-gtm-modal-open="modal_demonstracao"
                className="btn-micro w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-3.5 font-semibold hover:opacity-90 decoration-none no-underline text-center border-none cursor-pointer group"
              >
                <span className="hidden sm:inline">
                  Converse com o Albert agora mesmo
                </span>
                <span className="sm:hidden">Falar com o Albert no zap</span>
                <ArrowRight className="icon-micro-nudge w-4 h-4 shrink-0" />
              </button>
              <Link
                title="Planos e Preços da IA Albert"
                to="/planos-albert"
                data-gtm-cta="ver_planos_albert"
                data-gtm-location="albert"
                className="btn-micro w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full border border-[color:var(--brand-sand)]/25 px-6 py-3.5 font-medium hover:bg-[color:var(--brand-sand)]/10"
              >
                Ver planos
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <AlbertChat />
          </div>
        </div>
      </div>
    </section>
  );
}

function AlbertChat() {
  return (
    <div className="relative tilt-r flex-1 flex flex-col h-full">
      <div className="absolute -inset-3 rounded-[28px] bg-[color:var(--brand-orange)]/15 blur-2xl pointer-events-none" />
      <div className="relative bg-[color:var(--brand-sand)] text-[color:var(--brand-ink)] rounded-3xl border border-[color:var(--brand-ink)] shadow-elev overflow-hidden flex-1 flex flex-col justify-between">
        {/* paper header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[color:var(--brand-ink)]/15 bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] flex items-center justify-center font-bold">
              A
            </div>
            <div>
              <div className="font-semibold text-base leading-tight">
                Albert
              </div>
              <div className="font-mono-ui text-sm font-medium text-[color:var(--brand-sand)]/80">
                SDR · atende agora
              </div>
            </div>
          </div>
          <span className="font-mono-ui text-sm font-medium text-[color:var(--brand-sand)]/80">
            lead #4827 · 13s
          </span>
        </div>

        <div className="p-5 space-y-3 text-base flex-1 flex flex-col justify-between">
          <div className="space-y-3 flex-1 flex flex-col justify-center">
            <Bubble who="lead">
              Oi, vi o anúncio do 2 quartos na Av. Paulista 👋
            </Bubble>
            <Bubble who="albert">
              Oi! Que bom que chegou. Posso te perguntar se é para morar ou
              investir?
            </Bubble>
            <Bubble who="lead">
              Pra morar. Ainda não fiz aprovação de crédito.
            </Bubble>
            <Bubble who="albert">
              Tranquilo. Já te passo pra <strong>Camila</strong>, especialista
              na Paulista. Sábado às 10h pra visitar funciona?
            </Bubble>
            <Bubble who="lead">Funciona 🤝</Bubble>
          </div>

          <div className="mt-4 pt-3.5 border-t border-dashed border-[color:var(--brand-ink)]/30 flex items-center justify-between font-mono-ui text-sm text-muted-foreground font-medium">
            <span>qualificado e repassado em 38s</span>
            <span className="text-[color:var(--brand-orange)] font-bold">
              + CRM ✓
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({
  who,
  children,
}: {
  who: "lead" | "albert";
  children: React.ReactNode;
}) {
  if (who === "lead") {
    return (
      <div className="flex justify-end">
        <div className="bg-[color:var(--brand-ink)]/8 text-[color:var(--brand-ink)] rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] border border-[color:var(--brand-ink)]/10">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <div className="bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  FUNNEL                                                                    */
/* -------------------------------------------------------------------------- */
function Funil() {
  const features = [
    "Histórico de atendimento completo",
    "Rodízio de atendimento e equipes",
    "Secretaria de vendas (MQL)",
    "Controle de atividades por atendimento",
    "Processo de vendas imobiliária ponta-a-ponta",
  ];
  return (
    <section
      id="funil"
      data-gtm-section="funil"
      className="mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <span className="font-serif-italic text-[#c2410c] text-2xl mb-4 block">
        sobre tempo
      </span>
      <div className="grid lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Você está perdendo lead enquanto procura ele no caderno
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Controle do atendimento + script bem executado = mais vendas. A
              gente organiza o primeiro pra você poder focar no segundo.
            </p>
          </div>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-[color:var(--brand-orange)] shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 flex flex-col">
          <FunnelVisual />
        </div>
      </div>
    </section>
  );
}

function FunnelVisual() {
  const stages = [
    { label: "Leads recebidos", value: 4820, w: "100%" },
    { label: "Qualificados pelo Albert", value: 3210, w: "67%" },
    { label: "Em atendimento", value: 1980, w: "41%" },
    { label: "Propostas enviadas", value: 740, w: "15%" },
    { label: "Vendas fechadas", value: 218, w: "5%" },
  ];
  return (
    <div className="relative rounded-3xl border border-[color:var(--brand-ink)] bg-background shadow-elev p-6 md:p-8 tilt-l flex-1 flex flex-col justify-between h-full">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-dashed border-[color:var(--brand-ink)]/30">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          <span className="font-mono-ui text-base font-medium">
            imob.online / funil{" "}
            <span className="text-xs text-muted-foreground font-normal opacity-80">
              (exemplo ilustrativo)
            </span>
          </span>
        </div>
        <span className="font-mono-ui text-base text-emerald-700 font-bold">
          +24% MoM
        </span>
      </div>
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        {stages.map((s, i) => (
          <div key={s.label}>
            <div className="flex items-center justify-between text-base mb-1.5">
              <span className="text-muted-foreground">{s.label}</span>
              <span className="font-semibold tabular-nums">
                {s.value.toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="h-9 rounded-md bg-[color:var(--brand-sand)] overflow-hidden border border-[color:var(--brand-ink)]/20">
              <div
                className={`h-full flex items-center px-3 text-base font-bold font-mono-ui transition-all ${
                  i === stages.length - 1
                    ? "text-[color:var(--brand-ink)]"
                    : "text-[color:var(--brand-sand)]"
                }`}
                style={{
                  width: s.w,
                  background:
                    i === stages.length - 1
                      ? "var(--brand-orange)"
                      : "var(--brand-ink)",
                }}
              >
                {s.w}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  ECOSYSTEM                                                                 */
/* -------------------------------------------------------------------------- */
function Ecosystem() {
  const items = [
    {
      icon: Globe,
      title: "Sites para imobiliária",
      desc: "Templates rápidos, prontos pra ranquear no Google da sua cidade.",
    },
    {
      icon: MessageSquare,
      title: "Portais e WhatsApp",
      desc: "Viva Real, ZAP, OLX e WhatsApp integrados, publica uma vez, aparece em tudo.",
    },
    {
      icon: ShieldCheck,
      title: "LGPD e segurança",
      desc: "Infra robusta, 99.9% de uptime, backups diários, você dorme tranquilo.",
    },
  ];
  return (
    <section
      id="ecosystem"
      data-gtm-section="ecosistema"
      className="border-y border-[color:var(--brand-ink)]/8"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-[color:var(--brand-sand)]/40 border border-[color:var(--brand-ink)]/7 p-7 hover:bg-background hover:border-[color:var(--brand-orange)]/20 hover:shadow-soft transition-all duration-300"
            >
              <it.icon className="w-5 h-5 text-[color:var(--brand-orange)] mb-5" />
              <h3 className="font-bold text-xl tracking-tight mb-2">
                {it.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  TESTIMONIAL                                                               */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  BLOG                                                                      */
/* -------------------------------------------------------------------------- */
export function Blog() {
  const posts = blogPosts.slice(0, 3);
  return (
    <section
      id="blog"
      data-gtm-section="blog"
      className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32"
    >
      <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-2xl">
          <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
            Leitura
          </span>{" "}
          rápida pra quem vende imóvel
        </h2>
        <Link
          title="Blog da Microsistec - Conteúdos sobre Mercado Imobiliário"
          to="/blog"
          data-gtm-cta="ver_todos_blog"
          data-gtm-location="blog"
          className="inline-flex items-center gap-1.5 text-base font-medium hover:opacity-70"
        >
          Ver todos <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link
            title="Ler artigo no Blog"
            key={p.id}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            data-gtm-cta="ler_artigo_blog"
            data-gtm-location="blog"
            className="group flex flex-col border-t border-[color:var(--brand-ink)]/20 pt-6 hover:border-[color:var(--brand-orange)] transition cursor-pointer"
          >
            <div className="flex items-center justify-between mb-6 text-sm font-mono-ui text-muted-foreground">
              <span className="uppercase tracking-wider">{p.tag}</span>
              <span>{p.date}</span>
            </div>
            <div className="aspect-[16/10] rounded-xl mb-6 overflow-hidden border border-[color:var(--brand-ink)]/10">
              <img
                src={p.imageUrl}
                alt={p.title}
                title={p.title}
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            <h3 className="font-bold text-2xl tracking-tight leading-snug group-hover:text-[color:var(--brand-orange)] transition">
              {p.title}
            </h3>
            <p className="text-base text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
              {p.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA                                                                       */
/* -------------------------------------------------------------------------- */
export function CTA() {
  const { openModal } = useDemoModal();

  return (
    <section
      id="demo"
      data-gtm-section="cta_demonstracao"
      className="mx-auto max-w-7xl px-6 pb-16 md:pb-24"
    >
      <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-[color:var(--brand-ink)] bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] p-8 md:p-16 shadow-elev">
        <div className="bg-grid absolute inset-0 opacity-25" />
        <div
          className="absolute -top-20 -right-10 w-80 h-80 rounded-full opacity-30"
          style={{ background: "var(--brand-orange)", filter: "blur(80px)" }}
        />
        <div className="relative grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <span className="stamp text-[color:var(--brand-orange)] text-sm mb-6 inline-block">
              feito por gente que conhece de imobiliária de verdade
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-6">
              Bora vender mais,{" "}
              <span className="font-serif-italic font-normal text-[color:var(--brand-orange)]">
                de verdade
              </span>
              ?
            </h2>
            <p className="text-xl text-[color:var(--brand-sand)]/70 max-w-xl leading-relaxed">
              Surpreenda-se com o atendimento da nossa Inteligência Artificial.
              Experimente na prática e decida no seu tempo como ela pode
              acelerar as vendas da sua imobiliária.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3 w-full">
            <button
              title="Falar com especialista"
              onClick={openModal}
              data-gtm-cta="falar_especialista_rodape"
              data-gtm-location="cta_demonstracao"
              data-gtm-modal-open="modal_demonstracao"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-4 font-semibold hover:bg-[color:var(--brand-sand)] transition cursor-pointer border-none no-underline"
            >
              Falar com especialista <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FOOTER                                                                    */
/* -------------------------------------------------------------------------- */
export function Footer() {
  const { openModal } = useDemoModal();
  return (
    <footer
      data-gtm-location="rodape"
      className="border-t border-[color:var(--brand-ink)]/8 bg-[color:var(--brand-sand)]/20"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-3">
            <Link
              to="/"
              data-gtm-cta="home_logo_rodape"
              data-gtm-location="rodape"
              className="flex flex-row items-center gap-2 font-bold text-2xl tracking-[-0.03em] mb-4 hover:opacity-85 transition-opacity"
              title="Microsistec - Marca Registrada"
            >
              <img
                src="/icon.svg"
                alt="Microsistec Logo"
                title="Microsistec - Soluções em Tecnologia"
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="w-8 h-8 object-contain"
              />
              <div className="flex items-baseline gap-0.5">
                microsistec
                <span
                  className="text-[18px] text-muted-foreground self-start mt-1 select-none font-sans font-normal"
                  title="Marca Registrada"
                >
                  ®
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
              Proptech brasileira desde 1994. CRM, sites, app de atendimento e
              Albert IA num ecossistema só para imobiliárias de verdade.
            </p>
            <a
              title="Acessar o Sistema Imob Online"
              href="https://imob.online/"
              target="_blank"
              rel="noreferrer"
              data-gtm-cta="entrar_imobonline_rodape"
              data-gtm-location="rodape"
              className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] font-bold text-base hover:bg-[color:var(--brand-sand)] hover:text-[color:var(--brand-ink)] transition shadow-soft no-underline decoration-none group"
            >
              <KeyRound className="w-4 h-4" />
              <span>Entrar</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <FooterCol
            className="sm:col-span-1 lg:col-span-2"
            title="Soluções"
            links={[
              {
                label: "CRM Imobiliário",
                to: "/solucoes/$slug",
                params: { slug: "crm" },
                gtmCta: "nav_rodape_crm",
              },
              {
                label: "Albert IA",
                to: "/solucoes/$slug",
                params: { slug: "albert-ia" },
                gtmCta: "nav_rodape_albert_ia",
              },
              {
                label: "Planos Albert IA",
                to: "/planos-albert",
                gtmCta: "nav_rodape_planos_albert_ia",
              },
              {
                label: "App de Atendimento",
                to: "/solucoes/$slug",
                params: { slug: "app" },
                gtmCta: "nav_rodape_app",
              },
              {
                label: "Rodízio de Atendimento",
                to: "/solucoes/$slug",
                params: { slug: "rodizio" },
                gtmCta: "nav_rodape_rodizio",
              },
              {
                label: "Sites Customizados V8",
                to: "/solucoes/$slug",
                params: { slug: "sites-v8" },
                gtmCta: "nav_rodape_sites_v8",
              },
            ]}
          />
          <FooterCol
            className="sm:col-span-1 lg:col-span-2"
            title="Empresa"
            links={[
              { label: "Sobre", to: "/empresa", gtmCta: "nav_rodape_sobre" },
              {
                label: "Novidades",
                to: "/novidades",
                gtmCta: "nav_rodape_novidades",
              },
              { label: "Planos", to: "/planos", gtmCta: "nav_rodape_planos" },
              { label: "Blog", to: "/blog", gtmCta: "nav_rodape_blog" },
              {
                label: "Materiais",
                to: "/materiais",
                gtmCta: "nav_rodape_materiais",
              },
              {
                label: "Falar no WhatsApp",
                onClick: openModal,
                gtmCta: "nav_rodape_falar_whatsapp",
              },
              {
                label: "Política de Privacidade",
                to: "/politica-de-privacidade",
                gtmCta: "nav_rodape_politica_privacidade",
              },
              {
                label: "Política de Cookies",
                to: "/politica-de-cookies",
                gtmCta: "nav_rodape_politica_cookies",
              },
              {
                label: "Termos de Uso",
                to: "/termos-de-uso",
                gtmCta: "nav_rodape_termos_uso",
              },
            ]}
          />
          <FooterCol
            className="sm:col-span-1 lg:col-span-3"
            title="Contato"
            links={[
              {
                label: "Fale Conosco",
                to: "/contato",
                gtmCta: "nav_rodape_fale_conosco",
              },
              {
                label: "financeiro@microsistec.com.br",
                to: "mailto:financeiro@microsistec.com.br",
                gtmCta: "nav_rodape_email_financeiro",
              },
              {
                label: "suporte@microsistec.com.br",
                to: "mailto:suporte@microsistec.com.br",
                gtmCta: "nav_rodape_email_suporte",
              },
            ]}
          />
          <FooterCol
            className="sm:col-span-1 lg:col-span-2"
            title="Redes sociais"
            links={[
              {
                label: (
                  <span className="flex items-center gap-2">
                    <Facebook className="w-4 h-4" /> Facebook
                  </span>
                ),
                to: "https://www.facebook.com/Microsistec/",
                gtmCta: "nav_rodape_facebook",
              },
              {
                label: (
                  <span className="flex items-center gap-2">
                    <Youtube className="w-4 h-4" /> Youtube
                  </span>
                ),
                to: "https://www.youtube.com/c/microsistec",
                gtmCta: "nav_rodape_youtube",
              },
              {
                label: (
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" /> Instagram
                  </span>
                ),
                to: "https://www.instagram.com/microsistec.com.br",
                gtmCta: "nav_rodape_instagram",
              },
            ]}
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[color:var(--brand-ink)]/8 text-sm text-muted-foreground font-mono-ui">
          <span>
            © {new Date().getFullYear()} Microsistec · feito no Brasil
          </span>
          <span className="font-serif-italic font-sans text-base">
            com Albert IA dentro
          </span>
        </div>
      </div>
      <div style={{ display: "none" }} aria-hidden="true">
        <a href="/empresa">About</a>
        <a href="/contato">Contact</a>
        <a href="/politica-de-privacidade">Privacy</a>
        <a href="/termos-de-uso">Terms</a>
      </div>
    </footer>
  );
}

function FooterCol({
  className,
  title,
  links,
}: {
  className?: string;
  title: string;
  links: {
    label: React.ReactNode;
    to?: string;
    params?: any;
    onClick?: () => void;
    gtmCta?: string;
  }[];
}) {
  return (
    <div className={className}>
      <h3 className="font-semibold mb-4 text-lg">{title}</h3>
      <ul className="space-y-2 text-muted-foreground text-base">
        {links.map((link, idx) => (
          <li key={idx}>
            {link.onClick ? (
              <button
                onClick={link.onClick}
                data-gtm-cta={link.gtmCta}
                data-gtm-location="rodape"
                className="hover:text-[color:var(--brand-orange)] transition cursor-pointer bg-transparent border-none p-0 text-left font-[inherit] text-[inherit]"
              >
                {link.label}
              </button>
            ) : link.to?.startsWith("http") ||
              link.to?.startsWith("#") ||
              link.to?.startsWith("/#") ? (
              <a
                title="Acessar link"
                href={link.to}
                data-gtm-cta={link.gtmCta}
                data-gtm-location="rodape"
                className="hover:text-[color:var(--brand-orange)] transition"
              >
                {link.label}
              </a>
            ) : link.to ? (
              <Link
                title="Acessar link"
                to={link.to}
                params={link.params}
                data-gtm-cta={link.gtmCta}
                data-gtm-location="rodape"
                className="hover:text-[color:var(--brand-orange)] transition cursor-pointer"
              >
                {link.label}
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
export function MicrosistecLanding() {
  const { openModal } = useDemoModal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <StatsStrip />
        <Pillars />
        <Albert />
        <Funil />
        <Ecosystem />
        <React.Suspense fallback={<div className="w-full h-64 md:h-96" />}>
          <Testimonial />
        </React.Suspense>
        <Blog />
        <CTA />
      </main>
      <Footer />
      <StickyCTA />
      <ExitModal openDemoModal={openModal} />
    </div>
  );
}

function StickyCTA() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { openModal } = useDemoModal();

  React.useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden animate-in slide-in-from-bottom-4 duration-300 pointer-events-auto">
      <div className="bg-background/80 backdrop-blur-md border-t border-[color:var(--brand-ink)]/10 p-4 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)] pb-8">
        <button
          title="Falar com especialista"
          onClick={openModal}
          data-gtm-cta="falar_especialista_sticky"
          data-gtm-location="sticky_mobile"
          data-gtm-modal-open="modal_demonstracao"
          className="w-full flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] px-6 py-4 text-base font-semibold hover:opacity-90 transition shadow-lg border-none cursor-pointer"
        >
          Falar com especialista
          <ArrowRight className="w-5 h-5 shrink-0" />
        </button>
      </div>
    </div>
  );
}

export function ExitModal({ openDemoModal }: { openDemoModal: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 ||
        e.clientX <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        if (!sessionStorage.getItem("exitModalShown")) {
          setIsOpen(true);
          sessionStorage.setItem("exitModalShown", "true");
        }
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[color:var(--brand-ink)]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white text-[color:var(--brand-ink)] rounded-3xl w-full max-w-lg p-8 md:p-10 relative shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors p-1 bg-transparent border-none cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="text-center">
          <div className="w-20 h-20 bg-[color:var(--brand-clay)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">👋</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-[color:var(--brand-clay)] leading-tight">
            Vai mesmo sair agora?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Continuar perdendo leads por falta de organização não é a solução.
            Fale com nosso especialista agora e descubra como o CRM definitivo pode dobrar suas vendas.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                openDemoModal();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-orange)] text-[color:var(--brand-ink)] text-lg font-bold px-6 py-4 hover:opacity-90 cursor-pointer border-none shadow-elev"
            >
              Falar com especialista agora
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground py-2 mt-2 bg-transparent border-none cursor-pointer"
            >
              Não, prefiro continuar perdendo leads
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SimpleNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-[color:var(--brand-ink)]/10">
      <div className="mx-auto max-w-7xl flex items-center justify-center py-4">
        <Link
          to="/"
          className="flex flex-row items-center gap-2 font-bold text-2xl tracking-[-0.03em] hover:opacity-85 transition-opacity"
        >
          <img
            src="/icon.svg"
            alt="Microsistec Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <div className="flex items-baseline gap-0.5 text-foreground">
            microsistec
            <span className="text-[18px] text-muted-foreground self-start mt-1 select-none font-sans font-normal">
              ®
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export function SimpleFooter() {
  return (
    <footer className="bg-background py-8 border-t border-[color:var(--brand-ink)]/10 mt-auto">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-bold text-lg text-foreground tracking-[-0.03em]">
          <img
            src="/icon.svg"
            alt="Microsistec Logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
          <div className="flex items-baseline gap-0.5">
            microsistec
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span>feito por microsistec pioneira em tecnologia imobiliária</span>
        </div>
      </div>
    </footer>
  );
}
