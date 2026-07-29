import { app, HttpRequest, HttpResponseInit } from "@azure/functions";
import { EmailClient } from "@azure/communication-email";

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  profile?: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request: HttpRequest): Promise<HttpResponseInit> => {
    const origin = request.headers.get("origin") ?? "";
    const allowedOrigins = [
      "https://nextcommunity.pt",
      "https://www.nextcommunity.pt",
      "https://nextcommunity-gfgta6b0a4c6hra3.z03.azurefd.net",
    ];
    const corsOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
    const corsHeaders = {
      "Access-Control-Allow-Origin": corsOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return { status: 204, headers: corsHeaders };
    }

    let body: ContactForm;
    try {
      body = (await request.json()) as ContactForm;
    } catch {
      return { status: 400, headers: corsHeaders, jsonBody: { error: "Invalid JSON" } };
    }

    if (!body.name || !body.email || !body.message) {
      return { status: 400, headers: corsHeaders, jsonBody: { error: "Missing required fields" } };
    }

    const connectionString = process.env.ACS_CONNECTION_STRING;
    const recipientEmail = process.env.RECIPIENT_EMAIL ?? "geral@nextcommunity.pt";
    const senderDomain = process.env.SENDER_DOMAIN;

    if (!connectionString || !senderDomain) {
      return { status: 500, headers: corsHeaders, jsonBody: { error: "Server configuration error" } };
    }

    const senderAddress = `DoNotReply@${senderDomain}`;

    const htmlBody = `
      <h2>Nova mensagem do formulário de contacto — Comunidade</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nome</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(body.name)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;"><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td></tr>
        ${body.phone ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefone</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(body.phone)}</td></tr>` : ""}
        ${body.profile ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Perfil</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(body.profile)}</td></tr>` : ""}
        ${body.location ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Localidade</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(body.location)}</td></tr>` : ""}
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Mensagem</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap;">${escapeHtml(body.message)}</td></tr>
      </table>
    `;

    try {
      const client = new EmailClient(connectionString);
      const poller = await client.beginSend({
        senderAddress,
        recipients: {
          to: [{ address: recipientEmail }],
        },
        content: {
          subject: `Contacto Comunidade Nextenergy — ${body.name}`,
          html: htmlBody,
        },
        replyTo: [{ address: body.email, displayName: body.name }],
      });

      await poller.pollUntilDone();

      return { status: 200, headers: corsHeaders, jsonBody: { success: true } };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      return { status: 500, headers: corsHeaders, jsonBody: { error: "Failed to send email", detail: message } };
    }
  },
});
