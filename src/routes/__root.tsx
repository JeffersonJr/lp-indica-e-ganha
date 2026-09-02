import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Home, MapPin, ArrowRight, Key } from "lucide-react";
import { SeoSchema } from "@/components/seo/SeoSchema";

import appCssInline from "../styles.css?inline";

function NotFoundComponent() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden"
      style={{
        background: "var(--brand-ink, #0e1117)",
        color: "var(--brand-sand, #f5f0e8)",
      }}
    >
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,currentColor,currentColor 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,currentColor,currentColor 1px,transparent 1px,transparent 60px)",
        }}
      />

      {/* Floating house icon */}
      <div
        className="mb-8 flex items-center justify-center w-20 h-20 rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <Key
          style={{
            width: 36,
            height: 36,
            color: "var(--brand-orange, #ff6b35)",
          }}
        />
      </div>

      {/* Big 404 */}
      <div
        className="font-extrabold leading-none tracking-[-0.05em] select-none"
        style={{
          fontSize: "clamp(7rem, 20vw, 14rem)",
          background:
            "linear-gradient(135deg, var(--brand-sand, #f5f0e8) 40%, var(--brand-orange, #ff6b35) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </div>

      {/* Main heading */}
      <h1
        className="mt-4 font-extrabold tracking-tight"
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          color: "var(--brand-sand, #f5f0e8)",
        }}
      >
        Página não encontrada
      </h1>

      {/* Funny sub-copy */}
      <p
        className="mt-4 max-w-lg leading-relaxed"
        style={{ color: "rgba(245,240,232,0.65)", fontSize: "1.05rem" }}
      >
        Parece que o nosso corretor saiu para uma visita e levou a página com
        ele.{" "}
        <span
          style={{ color: "var(--brand-orange, #ff6b35)", fontStyle: "italic" }}
        >
          Mas não se preocupe
        </span>
        , vamos te guiar até o próximo lead.
      </p>

      {/* Address-style badge */}
      <div
        className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono"
        style={{
          background: "rgba(255,107,53,0.12)",
          border: "1px solid rgba(255,107,53,0.3)",
          color: "var(--brand-orange, #ff6b35)",
          letterSpacing: "0.08em",
        }}
      >
        <MapPin style={{ width: 12, height: 12 }} />
        Página não encontrada · Verifique o endereço e tente novamente
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          title="Página Inicial da Microsistec"
          to="/"
          className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all duration-200 no-underline"
          style={{
            background: "var(--brand-orange, #ff6b35)",
            color: "var(--brand-ink, #0e1117)",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.opacity = "0.88";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <Home style={{ width: 16, height: 16 }} />
          Me leva para a Home
          <ArrowRight style={{ width: 14, height: 14 }} />
        </Link>
      </div>

      {/* Footer joke */}
      <p
        className="mt-16 text-sm font-mono"
        style={{ color: "rgba(245,240,232,0.3)", letterSpacing: "0.06em" }}
      >
        © {new Date().getFullYear()} Microsistec · nem todos os endereços
        existem, mas todos os leads são bem-vindos.
      </p>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="flex items-baseline gap-0.5 font-['Poppins'] font-normal">
          microsistec
          <span
            className="text-[18px] text-muted-foreground self-start mt-1 select-none font-sans font-normal"
            title="Marca Registrada"
          >
            ®
          </span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            data-gtm-cta="error_try_again"
            className="btn-micro inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground border-none cursor-pointer"
          >
            Try again
          </button>
          <a
            title="Página Inicial da Microsistec"
            href="/"
            data-gtm-cta="error_go_home"
            className="btn-micro inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-base font-medium text-foreground hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Microsistec - CRM Imobiliário e Sistema para Imobiliárias" },
        {
          name: "description",
          content:
            "O melhor CRM imobiliário, site e app para corretores. A proptech pioneira no Brasil há + de 30 anos ajudando imobiliárias a venderem mais.",
        },
        { name: "author", content: "Microsistec" },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { name: "theme-color", content: "#0e1117" },
        // Open Graph
        {
          property: "og:title",
          content:
            "Microsistec - A proptech pioneira em tecnologia imobiliária há + de 30 anos",
        },
        {
          property: "og:description",
          content:
            "CRM imobiliário completo, site, Albert IA e integrações para imobiliárias e corretores.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://microsistec.evolves.site" },
        {
          property: "og:image",
          content: "https://microsistec.evolves.site/og-image.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "Microsistec - Tecnologia para imobiliárias",
        },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:site_name", content: "Microsistec" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@microsistec" },
        {
          name: "twitter:title",
          content: "Microsistec - Tecnologia imobiliária há + de 30 anos",
        },
        {
          name: "twitter:description",
          content:
            "CRM imobiliário completo, site, Albert IA e integrações para imobiliárias e corretores.",
        },
        {
          name: "twitter:image",
          content: "https://microsistec.evolves.site/og-image.png",
        },
      ],
      links: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "canonical",
          href: "https://microsistec.com.br",
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <SeoSchema />
        {/* Inline CSS to completely eliminate render blocking network requests */}
        <style dangerouslySetInnerHTML={{ __html: appCssInline }} />
        {/* Optimized Font Loading (Deferred to prevent render blocking) */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap"
          media="print"
          onLoad={(e: any) => {
            e.currentTarget.media = "all";
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&display=swap"
          />
        </noscript>
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { DemoModalProvider } from "@/hooks/use-demo-modal";
const DemoModal = React.lazy(() =>
  import("@/components/microsistec/DemoModal").then((m) => ({
    default: m.DemoModal,
  })),
);
import { PrivacyNotice } from "@/components/microsistec/PrivacyNotice";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <DemoModalProvider>
        <Outlet />



        <React.Suspense fallback={null}>
          <DemoModal />
        </React.Suspense>
        <PrivacyNotice />
      </DemoModalProvider>
    </QueryClientProvider>
  );
}
