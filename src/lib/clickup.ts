"use server";

import { createServerFn } from "@tanstack/react-start";
import { getDoc } from "./sheets";

const CLICKUP_API_TOKEN = process.env.VITE_CLICKUP_API_TOKEN || process.env.CLICKUP_API_TOKEN;
const CLICKUP_LIST_ID = "901328205459";

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
      // Tentamos achar a aba 'Indicadores', se não existir pegamos a primeira aba
      let sheet = doc.sheetsByTitle['Indicadores'];
      if (!sheet) sheet = doc.sheetsByIndex[0];
      
      if (sheet) {
        // Data formatada
        const date = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
        await sheet.addRow([
          date,
          data.imobiliaria,
          data.responsavel,
          data.telefone,
          data.email,
          data.codigo
        ]);
      }
    } catch (err) {
      console.error("Erro ao enviar Indicador:", err);
      throw err;
    }
  });

export interface IndicacaoData {
  indicador_nome: string;
  indicador_telefone: string;
  indicador_email: string;
  indicado_nome: string;
  indicado_responsavel: string;
  indicado_telefone: string;
  indicado_email: string;
  cidade?: string;
  corretores?: string;
  usaCrm?: string;
  qualCrm?: string;
}

export const sendIndicacaoToClickUp = createServerFn({ method: "POST" })
  .inputValidator((data: IndicacaoData) => data)
  .handler(async ({ data }) => {
    if (!CLICKUP_API_TOKEN) {
      console.warn("[ClickUp] Missing CLICKUP_API_TOKEN");
      throw new Error("Configuração ausente: Token do ClickUp não encontrado.");
    }

    const taskName = `Indicado: ${data.indicado_nome} (por: ${data.indicador_nome})`;
    const taskDescription = `
Nova Indicação - Campanha Setembro Indica & Ganha

🎯 DADOS DE QUEM INDICOU (Cliente)
Código de quem indicou: ${data.indicador_nome}

🤝 DADOS DA IMOBILIÁRIA INDICADA
Nome da Imobiliária: ${data.indicado_nome}
Pessoa Responsável: ${data.indicado_responsavel}
Telefone: ${data.indicado_telefone}
E-mail: ${data.indicado_email}

📍 INFORMAÇÕES EXTRAS
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
      // Tentamos achar a aba 'Indicados', se não existir pegamos a segunda aba (índice 1) ou a primeira se só tiver uma
      let sheet = doc.sheetsByTitle['Indicados'];
      if (!sheet) sheet = doc.sheetsByIndex[1] || doc.sheetsByIndex[0];
      
      if (sheet) {
        const date = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
        await sheet.addRow([
          date,
          data.indicador_nome, // código de quem indicou
          data.indicado_nome,
          data.indicado_responsavel,
          data.indicado_telefone,
          data.indicado_email,
          data.cidade || "",
          data.corretores || "",
          data.usaCrm || "",
          data.qualCrm || ""
        ]);
      }
    } catch (err) {
      console.error("Erro ao enviar Indicação:", err);
      throw err;
    }
    
    return { success: true };
  });
