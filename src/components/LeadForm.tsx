import { useState, type FormEvent } from "react";
import { useLeadSubmit } from "../hooks/use-lead-submit";
import { useLocation } from "@tanstack/react-router";
import { phoneMask } from "../lib/utils";

/**
 * Formulário genérico de captura de leads.
 * Usa o hook `useLeadSubmit` para enviar dados ao ClickUp
 * e abrir o WhatsApp automaticamente.
 */
interface LeadFormProps {
  origem?: string;
}

export function LeadForm({ origem }: LeadFormProps = {}) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const { submitLead, isLoading, error } = useLeadSubmit();
  const location = useLocation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await submitLead({ nome, telefone, email: "", cnpj: "", origem: origem || `Página: ${location.pathname}` });
    // Limpa o formulário após sucesso (o WhatsApp já foi aberto pelo hook)
    if (!error) {
      setNome("");
      setTelefone("");
    }
  };

  return (
    <form
      data-gtm-form="captura_generica"
      data-form-page={location.pathname}
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md"
    >
      <h3 className="text-xl font-semibold">Fale com um especialista</h3>

      <input
        id="nome_lead"
        name="nome_lead"
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        disabled={isLoading}
        className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      />

      <input
        id="telefone_lead"
        name="telefone_lead"
        type="tel"
        placeholder="(00) 00000-0000"
        value={telefone}
        onChange={(e) => setTelefone(phoneMask(e.target.value))}
        required
        disabled={isLoading}
        className="rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      />

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        data-gtm-cta="enviar_lead_generico"
        disabled={isLoading}
        className="rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Enviando..." : "Enviar e falar no WhatsApp"}
      </button>
    </form>
  );
}
