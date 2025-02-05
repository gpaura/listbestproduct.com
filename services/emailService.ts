// services/emailService.ts
import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY as string,
});

interface EmailMessage {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(message: EmailMessage) {
  try {
    const response = await mg.messages.create(
      process.env.MAILGUN_DOMAIN as string,
      {
        ...message,
        from: `Your Name <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      },
    );
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
