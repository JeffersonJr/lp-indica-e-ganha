import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

export function PrivacyNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem(
      "microsistec-cookies-accepted",
    );
    if (!hasAcceptedCookies) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("microsistec-cookies-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div
        className="mx-auto max-w-4xl pointer-events-auto bg-white border border-gray-100 p-5 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          color: "var(--brand-ink, #0e1117)",
        }}
      >
        <div className="text-base leading-relaxed text-gray-600">
          <p>
            Utilizamos cookies para melhorar a sua experiência em nosso site,
            personalizar conteúdo e anúncios. Ao continuar navegando, você
            concorda com a nossa{" "}
            <Link
              title="Política de Privacidade"
              to="/politica-de-privacidade"
              className="text-[#c2410c] font-medium hover:underline underline-offset-2"
            >
              Política de Privacidade
            </Link>{" "}
            e{" "}
            <Link
              title="Política de Cookies"
              to="/politica-de-cookies"
              className="text-[#c2410c] font-medium hover:underline underline-offset-2"
            >
              Política de Cookies
            </Link>
            .
          </p>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto flex justify-end">
          <button
            onClick={acceptCookies}
            className="w-full md:w-auto px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-200"
            style={{
              backgroundColor: "var(--brand-orange, #ff6b35)",
              color: "var(--brand-ink, #0e1117)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              (e.currentTarget as HTMLButtonElement).style.transform =
                "scale(1)";
            }}
          >
            Aceitar e continuar
          </button>
        </div>
      </div>
    </div>
  );
}
