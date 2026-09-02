import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Copy, Send, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { SimpleNav as Header, SimpleFooter as Footer } from "../components/microsistec/MicrosistecLanding";

export const Route = createFileRoute("/indica-e-ganha/sucesso")({
  component: IndicaEGanhaSucessoPage,
});

function IndicaEGanhaSucessoPage() {
  const search = Route.useSearch() as { code?: string };
  const uniqueCode = search.code || "MS" + Math.floor(1000 + Math.random() * 9000);
  
  const [copied, setCopied] = useState(false);
  const shareLink = `microsistec.com.br/indique/${uniqueCode}`;
  
  const whatsappMessage = `Oi! Lembrei de vocês porque estou participando de uma campanha da Microsistec e achei que poderia fazer sentido para a imobiliária.\n\nEles trabalham com CRM, site de alta performance e inteligência artificial para atendimento.\n\nEstou te enviando meu link de indicação para você conhecer:\n${shareLink}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-4 bg-[color:var(--brand-ink)] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-[color:var(--brand-clay)]/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-md mx-auto">
          <Link to="/indica-e-ganha" className="inline-flex items-center gap-2 text-[color:var(--brand-sand)]/70 hover:text-[color:var(--brand-sand)] mb-8 transition decoration-none border-none">
            <ChevronLeft className="w-4 h-4" />
            Indicar outra imobiliária
          </Link>
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-center border border-[color:var(--brand-clay)]/10">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold text-[color:var(--brand-ink)] mb-4">
              Seu link está pronto 💚
            </h1>
            <p className="text-[color:var(--brand-ink)]/70 mb-8 leading-relaxed">
              Agora é só compartilhar com aquela imobiliária que deveria conhecer a Microsistec.
            </p>
            
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Seu link exclusivo:</p>
              <div className="font-mono text-[color:var(--brand-clay)] font-bold break-all text-sm sm:text-base">
                {shareLink}
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={handleCopy}
                className="w-full bg-[color:var(--brand-ink)] text-[color:var(--brand-sand)] hover:bg-[color:var(--brand-ink)]/90 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer border-none shadow-sm active:scale-[0.98]"
              >
                {copied ? (
                  <>Copiado! <CheckCircle2 className="w-5 h-5" /></>
                ) : (
                  <>COPIAR LINK <Copy className="w-5 h-5" /></>
                )}
              </button>
              
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer border-none shadow-sm active:scale-[0.98] decoration-none"
              >
                ENVIAR CONVITE PELO WHATSAPP <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
