"use server";

import { createServerFn } from "@tanstack/react-start";
import { getDoc } from "./sheets";

const getClickUpToken = () => {
  if (typeof process !== "undefined" && process.env) {
    if (process.env["VITE_CLICKUP_API_TOKEN"]) return process.env["VITE_CLICKUP_API_TOKEN"];
    if (process.env["CLICKUP_API_TOKEN"]) return process.env["CLICKUP_API_TOKEN"];
  }
  try {
    // @ts-ignore
    if (typeof import.meta !== "undefined" && import.meta.env) {
      // @ts-ignore
      return import.meta.env.VITE_CLICKUP_API_TOKEN;
    }
  } catch (e) {}
  return undefined;
};

const CLICKUP_LIST_ID = "901328205459";

export interface LeadData {
  nome: string;
  telefone: string;
  email: string;
  cnpj?: string;
  origem?: string;
}

export const sendLeadToClickUp = createServerFn({ method: "POST" })
  .inputValidator((lead: LeadData) => lead)
  .handler(async ({ data: lead }) => {
    const CLICKUP_API_TOKEN = getClickUpToken();
    if (!CLICKUP_API_TOKEN || !CLICKUP_LIST_ID) {
      console.warn("[ClickUp] Missing VITE_CLICKUP_API_TOKEN or CLICKUP_LIST_ID");
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

export interface IndicadorData {
  imobiliaria: string;
  responsavel: string;
  telefone: string;
  email: string;
  codigo: string;
}

export const sendIndicadorToClickUp = createServerFn({ method: "POST" })
  .inputValidator((data: IndicadorData) => data)
  .handler(async ({ data }) => {
    const CLICKUP_API_TOKEN = getClickUpToken();
    if (!CLICKUP_API_TOKEN) {
      console.warn("[ClickUp] Missing CLICKUP_API_TOKEN");
      throw new Error("Configuração ausente: Token do ClickUp não encontrado.");
    }

    const taskName = `Indicador: ${data.imobiliaria} (${data.responsavel})`;
    const taskDescription = `
**Tipo:** Indicador
**Campanha:** Indique e Ganha Setembro
**Imobiliária:** ${data.imobiliaria}
**Responsável:** ${data.responsavel}
**Telefone:** ${data.telefone}
**Email:** ${data.email}
**Código de Indicação Gerado:** ${data.codigo}
    `.trim();

    try {
      // 1. Send to ClickUp
      await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
        method: "POST",
        headers: {
          "Authorization": CLICKUP_API_TOKEN,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: taskName,
          description: taskDescription,
          tags: ["indicador", "indique-e-ganha-setembro"]
        })
      });

      // 2. Send to Google Sheets
      const doc = await getDoc();
      let sheet = doc.sheetsByTitle['Indicadores'];
      if (!sheet) sheet = doc.sheetsByIndex[0];
      
      if (sheet) {
        try {
          await sheet.loadHeaderRow();
        } catch (e) {
          await sheet.setHeaderRow(["Data", "Imobiliaria", "Responsavel", "Telefone", "Email", "Codigo"]);
        }

        // Data formatada
        const date = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
        await sheet.addRow({
          "Data": date,
          "Imobiliaria": data.imobiliaria,
          "Responsavel": data.responsavel,
          "Telefone": data.telefone,
          "Email": data.email,
          "Codigo": data.codigo
        });
      }
    } catch (err) {
      console.error("Erro ao enviar Indicador:", err);
      throw err;
    }
  });

export interface IndicacaoData {
  indicador_nome: string;
  indicador_imobiliaria: string;
  indicador_telefone: string;
  indicador_email: string;
  indicado_nome: string;
  indicado_responsavel: string;
  indicado_telefone: string;
  indicado_email: string;
  cidade?: string;
  estado?: string;
  corretores?: string;
  usaCrm?: string;
  qualCrm?: string;
}

export const sendIndicacaoToClickUp = createServerFn({ method: "POST" })
  .inputValidator((data: IndicacaoData) => data)
  .handler(async ({ data }) => {
    const CLICKUP_API_TOKEN = getClickUpToken();
    const listId = "901328205459";
    if (!CLICKUP_API_TOKEN) {
      console.warn("[ClickUp] Missing CLICKUP_API_TOKEN");
      throw new Error("Configuração ausente: Token do ClickUp não encontrado.");
    }

    const taskName = `Indicado: ${data.indicado_nome} (por: ${data.indicador_nome})`;
    const taskDescription = `
Nova Indicação - Campanha Setembro Indica & Ganha

🎯 DADOS DE QUEM INDICOU (Cliente)
Nome: ${data.indicador_nome}
Imobiliária: ${data.indicador_imobiliaria}

🤝 DADOS DA IMOBILIÁRIA INDICADA
Nome da Imobiliária: ${data.indicado_nome}
Pessoa Responsável: ${data.indicado_responsavel}
Telefone: ${data.indicado_telefone}
E-mail: ${data.indicado_email}

📍 INFORMAÇÕES EXTRAS
Estado: ${data.estado || "Não informado"}
Cidade: ${data.cidade || "Não informado"}
Corretores: ${data.corretores || "Não informado"}
Usa CRM: ${data.usaCrm || "Não informado"}
Qual CRM: ${data.qualCrm || "Não informado"}
    `.trim();

    try {
      // 1. Send to ClickUp
      await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
        method: "POST",
        headers: {
          "Authorization": CLICKUP_API_TOKEN,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: taskName,
          description: taskDescription,
          tags: ["indicado", "indique-e-ganha-setembro"]
        })
      });

      // 2. Send to Google Sheets
      const doc = await getDoc();
      let sheet = doc.sheetsByTitle['Indicados'];
      if (!sheet) sheet = doc.sheetsByIndex[1] || doc.sheetsByIndex[0];
      
      if (sheet) {
        try {
          await sheet.loadHeaderRow();
        } catch (e) {
          await sheet.setHeaderRow([
            "Data", "Nome Indicador", "Imob Indicador", "ImobiliariaIndicada", "Responsavel", 
            "Telefone", "Email", "Estado", "Cidade", "Corretores", "UsaCRM", "QualCRM"
          ]);
        }

        const date = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
        await sheet.addRow({
          "Data": date,
          "Nome Indicador": data.indicador_nome,
          "Imob Indicador": data.indicador_imobiliaria,
          "ImobiliariaIndicada": data.indicado_nome,
          "Responsavel": data.indicado_responsavel,
          "Telefone": data.indicado_telefone,
          "Email": data.indicado_email,
          "Estado": data.estado || "",
          "Cidade": data.cidade || "",
          "Corretores": data.corretores || "",
          "UsaCRM": data.usaCrm || "",
          "QualCRM": data.qualCrm || ""
        });
      }
    } catch (err) {
      console.error("Erro ao enviar Indicação:", err);
      throw err;
    }
    
    return { success: true };
  });
