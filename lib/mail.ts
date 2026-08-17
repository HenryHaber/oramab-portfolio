import nodemailer from "nodemailer";

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("SMTP configuration is incomplete. Check your .env.local.");
  }

  return nodemailer.createTransport({
    host,
    port: Number(port),
    secure: Number(port) === 465,
    auth: { user, pass },
  });
}

export async function sendContactEmail(input: ContactMessage): Promise<void> {
  const transporter = createTransporter();

  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;
  const to = process.env.CONTACT_TO ?? process.env.SMTP_USER!;

  await transporter.sendMail({
    from: `"${input.name}" <${from}>`,
    to,
    replyTo: input.email,
    subject: `[Portfolio Contact] ${input.subject || "New message"}`,
    text: `Name: ${input.name}\nEmail: ${input.email}\nSubject: ${input.subject}\n\n${input.message}`,
    html: `
      <div style="font-family: Calibri, Arial, sans-serif; color: #212529; max-width: 600px;">
        <h2 style="color: #102C57; margin: 0 0 12px;">New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(input.name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></p>
        <p><strong>Subject:</strong> ${escapeHtml(input.subject || "—")}</p>
        <hr style="border: none; border-top: 1px solid #35598E; margin: 16px 0;" />
        <p style="white-space: pre-line;">${escapeHtml(input.message)}</p>
      </div>
    `,
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
