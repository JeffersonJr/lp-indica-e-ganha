import { useState, useCallback } from "react";
import { sendLeadToClickUp } from "../lib/clickup";

/**
 * Number format: country code + number, no symbols.
 * Example: "5511999999999"
 */
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";

interface LeadData {
  nome: string;
  telefone: string;
  email: string;
  cnpj?: string;
  origem?: string;
}

interface UseLeadSubmitReturn {
  /** Submits lead to ClickUp and opens WhatsApp on success */
  submitLead: (data: LeadData) => Promise<void>;
  /** True while the request is in-flight */
  isLoading: boolean;
  /** Error message if the last submission failed */
  error: string | null;
}

/**
 * Hook global para captura de leads.
 *
 * Envia dados para o ClickUp via server function e,
 * em caso de sucesso, abre o WhatsApp em uma nova aba.
 *
 * @example
 * ```tsx
 * const { submitLead, isLoading, error } = useLeadSubmit();
 *
 * const handleSubmit = (e: FormEvent) => {
 *   e.preventDefault();
 *   submitLead({ nome, telefone });
 * };
 * ```
 */
export function useLeadSubmit(): UseLeadSubmitReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = useCallback(async (data: LeadData) => {
    setIsLoading(true);
    setError(null);

    try {
      await sendLeadToClickUp({ data });

      // Abre o WhatsApp em nova aba com mensagem pré-preenchida
      const message = encodeURIComponent(
        `Olá! Meu nome é ${data.nome} e gostaria de saber mais sobre os serviços da Microsistec.`,
      );
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro ao enviar dados.";
      setError(errorMessage);
      console.error("[useLeadSubmit]", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { submitLead, isLoading, error };
}
