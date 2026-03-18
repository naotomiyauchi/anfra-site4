import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company, name, email, subject, message } = body as {
      company?: string;
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    console.log("Contact form submitted:", body);

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_FROM,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("SMTP env is not fully configured");
      return new Response(JSON.stringify({ ok: false, error: "mail_not_configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const lines = [
      "Webサイトからお問い合わせがありました。",
      "",
      `会社名: ${company ?? ""}`,
      `ご担当者名: ${name ?? ""}`,
      `メールアドレス: ${email ?? ""}`,
      `件名: ${subject ?? ""}`,
      "",
      "お問い合わせ内容:",
      message ?? "",
    ];

    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: "anfra.support-honbu@anfr-in.com",
      replyTo: email || undefined,
      subject: subject || "Webサイトからのお問い合わせ",
      text: lines.join("\n"),
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

