/**
 * Client-side helper that sends lead data directly to the ClickUp API.
 *
 * Uses VITE_-prefixed env vars so they are available in the browser.
 * The ClickUp Personal API Token is used for authentication.
 */

import { createServerFn } from "@tanstack/react-start";

const CLICKUP_API_TOKEN = import.meta.env.VITE_CLICKUP_API_TOKEN ?? "";
const CLICKUP_LIST_ID = "901328205459"; // Hardcoded funnel ID requested by user

interface LeadData {
  nome: string;
  telefone: string;
  email: string;
  cnpj?: string;
  origem?: string;
}

export const sendLeadToClickUp = createServerFn({ method: "POST" })
  .inputValidator((lead: LeadData) => lead)
  .handler(async ({ data: lead }) => {
    if (!CLICKUP_API_TOKEN || !CLICKUP_LIST_ID) {
      console.warn(
        "[ClickUp] Missing VITE_CLICKUP_API_TOKEN or CLICKUP_LIST_ID",
      );
      throw new Error("Configuração ausente: Token do ClickUp não encontrado.");
    }

  const customFields = [];

  if (lead.telefone) {
    customFields.push({
      id: "18b57b65-8a2a-41e4-8114-d4a5e4945f56", // Telefone
      value: lead.telefone,
    });
  }

  if (lead.email) {
    customFields.push({
      id: "9902a72d-5372-40c6-b579-6d98801f6c49", // E-mail
      value: lead.email,
    });
  }

  if (lead.cnpj) {
    customFields.push({
      id: "41046864-b5f9-4375-bb29-ebe6752f2c03", // CNPJ/CPF
      value: lead.cnpj,
    });
  }

    const leadDescription = `
Nova Conversão pelo Site

📌 ORIGEM: ${lead.origem || "Formulário Padrão do Site"}

👤 DADOS DO LEAD:
Nome: ${lead.nome}
Telefone: ${lead.telefone}
E-mail: ${lead.email}
${lead.cnpj ? `CNPJ/CPF: ${lead.cnpj}` : ""}
    `.trim();

    const response = await fetch(
      `https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: CLICKUP_API_TOKEN,
        },
        body: JSON.stringify({
          name: `Lead: ${lead.nome} (${lead.origem || "Site"})`,
          description: leadDescription,
          custom_fields: customFields,
          tags: ["site", "lead"],
        }),
      },
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[ClickUp] API error [${response.status}]:`, errorBody);
      throw new Error("Erro ao registrar lead no ClickUp.");
    }
    
    return { success: true };
  });

export interface IndicacaoData {
  indicador_nome: string;
  indicador_telefone: string;
  indicador_email: string;
  indicado_nome: string;
  indicado_responsavel: string;
  indicado_telefone: string;
  indicado_email: string;
}

export const sendIndicacaoToClickUp = createServerFn({ method: "POST" })
  .inputValidator((data: IndicacaoData) => data)
  .handler(async ({ data }) => {
    const listId = "901328205459";
    if (!CLICKUP_API_TOKEN) {
      console.warn("[ClickUp] Missing VITE_CLICKUP_API_TOKEN");
      throw new Error("Configuração ausente: Token do ClickUp não encontrado.");
    }

    const description = `
Nova Indicação - Campanha Setembro Indica & Ganha

🎯 DADOS DE QUEM INDICOU (Cliente)
Nome/Imobiliária: ${data.indicador_nome}
Telefone: ${data.indicador_telefone}
E-mail: ${data.indicador_email}

🤝 DADOS DA IMOBILIÁRIA INDICADA
Nome da Imobiliária: ${data.indicado_nome}
Pessoa Responsável: ${data.indicado_responsavel}
Telefone: ${data.indicado_telefone}
E-mail: ${data.indicado_email}
    `.trim();

    const response = await fetch(
      `https://api.clickup.com/api/v2/list/${listId}/task`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: CLICKUP_API_TOKEN,
        },
        body: JSON.stringify({
          name: `[Campanha Indica & Ganha] Indicação: ${data.indicado_nome}`,
          description: description,
          tags: ["indica e ganha", "campanha", "indicação"],
        }),
      },
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[ClickUp] API error [${response.status}]:`, errorBody);
      throw new Error("Erro ao registrar indicação no ClickUp.");
    }
    
    return { success: true };
  });
