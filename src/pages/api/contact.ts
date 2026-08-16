// src/pages/api/contact.ts
import type { APIRoute } from "astro";
import { Resend } from "resend";
import { site } from "../../i18n/site";

// این روت باید on-demand رندر بشه، نه در build time
export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!EMAIL_REGEX.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email address" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (message.length > 5000) {
    return new Response(JSON.stringify({ error: "Message too long" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { error } = await resend.emails.send({
      // تا وقتی دامنه‌ی itzomidreza.ir رو در Resend وریفای نکردی، فقط از آدرس تست resend.dev می‌تونی بفرستی
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: site.contact.email,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};