import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle2,
  Gift,
  Users,
  Megaphone,
  Building2,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Setembro Indica & Ganha | Microsistec" },
      {
        name: "description",
        content:
          "Indique imobiliárias e ganhe descontos na sua mensalidade Microsistec. Campanha exclusiva para clientes.",
      },
    ],
  }),
  component: IndicaEGanhaIndex,
});

function IndicaEGanhaIndex() {
  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#1A1A1A]">
      <header className="flex items-center justify-center bg-white px-4 md:px-8 py-4 shadow-sm relative z-10">
        <Link
          to="/"
          className="flex flex-row items-center gap-2 font-bold text-2xl tracking-[-0.03em] hover:opacity-85 transition-opacity"
          title="Microsistec - Marca Registrada"
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
          <div className="flex items-baseline gap-0.5 font-['Poppins'] font-normal">
            microsistec
            <span
              className="text-[18px] text-muted-foreground self-start mt-1 select-none font-sans font-normal"
              title="Marca Registrada"
            >
              ®
            </span>
          </div>
        </Link>

      </header>
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E8EDED] via-transparent to-transparent"></div>
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-[#E8EDED] px-4 py-1.5 text-sm font-semibold text-[#2B5250]">
              <Gift className="mr-2 h-4 w-4" />
              CAMPANHA | SETEMBRO INDICA & GANHA
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              Conhece uma imobiliária que{" "}
              <span className="text-[#5AA6A6]">precisa evoluir?</span> Indique e
              ganhe descontos.
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#6B7878] md:text-xl">
              Indique uma imobiliária que ainda não utiliza o CRM Microsistec e,
              se ela contratar, você ganha <strong>10% OFF</strong> em uma
              mensalidade Microsistec. <strong>Desconto cumulativo: indique 10 e ganhe 100% OFF!</strong>
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/indica-e-ganha">
                <Button
                  size="lg"
                  className="h-14 w-full bg-[#E8A14B] px-8 text-lg font-bold text-white hover:bg-[#E8A14B]/90 sm:w-auto"
                >
                  QUERO INDICAR
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-[#6B7878]">
              Campanha exclusiva para clientes ativos Microsistec. Válida até
              30/09/2026.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCO 2 | COMO FUNCIONA */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
              Como funciona
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#6B7878]">
              Indicar ficou simples. Sem sorteio, sem juntar pontos. Indicou e
              virou cliente? Ganhou.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              {
                icon: <Users className="h-8 w-8 text-[#5AA6A6]" />,
                title: "1. Você indica",
                desc: "Preencha os dados da sua imobiliária e da empresa que deseja indicar.",
              },
              {
                icon: <Megaphone className="h-8 w-8 text-[#5AA6A6]" />,
                title: "2. A Microsistec entra em contato",
                desc: "Nosso time apresenta as soluções e entende as necessidades da imobiliária indicada.",
              },
              {
                icon: <CheckCircle2 className="h-8 w-8 text-[#5AA6A6]" />,
                title: "3. Fechou? Você ganhou.",
                desc: "Se a imobiliária indicada efetivar a contratação, você recebe 10% de desconto em uma mensalidade. E o melhor: o desconto é cumulativo! Indique 10 e ganhe 100% de desconto (uma mensalidade grátis).",
              },
            ].map((step, i) => (
              <Card
                key={i}
                className="border-none bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8EDED]">
                    {step.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#2B5250]">{step.title}</h3>
                  <p className="text-[#6B7878]">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 3 | QUEM VOCÊ PODE INDICAR? */}
      <section className="bg-[#2B5250] py-20 text-white lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl text-[#F7F3EA]">
                  Quem você pode indicar?
                </h2>
                <p className="mb-8 text-lg text-[#F7F3EA]">
                  Cada cliente Microsistec poderá indicar até{" "}
                  <strong>10 imobiliárias</strong> durante a campanha. Você pode
                  indicar imobiliárias que:
                </p>
                <ul className="space-y-4">
                  {[
                    "Ainda não utilizam o CRM Microsistec.",
                    "Possuam interesse potencial em CRM, site, automação e tecnologia para o mercado imobiliário.",
                    "Tenham um responsável que possa ser contatado pelo nosso time comercial.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="mr-3 mt-1 h-5 w-5 shrink-0 text-[#E8A14B]" />
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative h-64 w-64 rounded-2xl bg-white/10 p-6 backdrop-blur-sm md:h-80 md:w-80">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <Building2 className="mb-4 h-16 w-16 text-[#E8A14B]" />
                    <p className="text-xl font-medium leading-snug text-white">
                      Transforme boas conexões em benefício para sua empresa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl lg:text-5xl">
            Já pensou em quem indicar?
          </h2>
          <div className="mx-auto mb-10 max-w-2xl text-lg text-[#6B7878]">
            <p className="mb-2">Pode ser aquela imobiliária parceira.</p>
            <p className="mb-2">
              Aquela empresa que ainda controla tudo de um jeito mais complicado
              do que deveria.
            </p>
            <p className="mb-4">
              Ou aquela imobiliária que vive dizendo que precisa organizar
              melhor a operação.
            </p>
            <p className="mt-8 text-2xl font-bold text-[#1A1A1A]">
              Indique para a Microsistec.
              <br />
              <span className="text-[#5AA6A6]">
                Se virar cliente, você ganha.
              </span>
            </p>
          </div>

          <Link to="/indica-e-ganha">
            <Button
              size="lg"
              className="h-14 bg-[#E8A14B] px-10 text-lg font-bold text-white hover:bg-[#E8A14B]/90"
            >
              QUERO INDICAR
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* REGRAS DA CAMPANHA */}
      <section className="bg-[#E8EDED] py-16 text-left">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h3 className="mb-8 text-center text-2xl font-bold text-[#2B5250]">
            Perguntas Frequentes e Regras da Campanha
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base font-semibold text-[#1A1A1A]">
                1. Período
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7878]">
                A campanha Setembro Indica & Ganha Microsistec será válida para
                indicações realizadas entre 01/09/2026 e 30/09/2026.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base font-semibold text-[#1A1A1A]">
                2. Quem pode participar e Limite
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7878]">
                A campanha é exclusiva para clientes ativos Microsistec. Cada
                imobiliária poderá realizar no máximo 10 indicações durante o
                período, considerando as indicações enviadas (independente de
                resultarem em contratação).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base font-semibold text-[#1A1A1A]">
                3. Quem pode ser indicado
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7878]">
                A empresa indicada deverá ser uma imobiliária que não utilize
                atualmente o CRM Microsistec. Clientes já ativos não poderão ser
                considerados novas indicações.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-base font-semibold text-[#1A1A1A]">
                4. Benefício para quem indica
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7878]">
                Para cada indicação elegível que resultar em contratação, a
                imobiliária receberá 10% de desconto em uma mensalidade
                Microsistec. A promoção é cumulativa: 1 indicação de sucesso = 10% de desconto, 2 indicações = 20%, e assim por diante, podendo chegar a 100% (uma mensalidade grátis) ao atingir 10 indicações convertidas. O benefício será concedido após a efetivação da
                contratação. A realização da indicação isoladamente não gera
                direito ao desconto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-base font-semibold text-[#1A1A1A]">
                5. Validação
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7878]">
                A Microsistec poderá validar os dados fornecidos. Indicações
                duplicadas, empresas já clientes ou em negociação ativa poderão
                passar por validação interna antes da concessão do benefício.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-base font-semibold text-[#1A1A1A]">
                6. O desconto é cumulativo?
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7878]">
                Sim! A cada indicação que fechar contrato, você soma 10% de desconto. Se você indicar 2 imobiliárias, ganha 20%. Se indicar 10, você atinge o limite da campanha e recebe 100% de desconto (uma mensalidade grátis).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-8 border-t border-[#E8EDED]">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#6B7878] text-sm flex justify-center items-center">
          <p>feito por microsistec pioneira em tecnologia imobiliária</p>
        </div>
      </footer>
    </div>
  );
}
