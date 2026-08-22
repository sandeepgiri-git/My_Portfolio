"use server";

import connectDB from "../lib/db";
import { Contact } from "../lib/models/Contact";

export async function submitContactForm(formData: {name: string; email: string; description: string;}) {
  try {
    const { name, email, description } = formData;

    if (!name || !email || !description) {
      return { success: false, message: "All fields are required." };
    }

    // Connect to database
    await connectDB();

    // Save to database
    const newContact = new Contact({ name, email, description });
    await newContact.save();

    // Send email using Brevo API
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;

    if (BREVO_API_KEY && BREVO_SENDER_EMAIL) {
      const emailData = {
        sender: { name: "Portfolio Contacts", email: BREVO_SENDER_EMAIL },
        to: [{ email: BREVO_SENDER_EMAIL, name: "Sandeep Giri" }],
        subject: `New Contact Submission from ${name}`,
        htmlContent: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${description.replace(/\n/g, '<br/>')}</p>
        `,
      };

      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        console.error("Failed to send email via Brevo:", await response.text());
      }
    } else {
      console.warn("Brevo API key or sender email not found in environment variables.");
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error: any) {
    console.error("Error in submitContactForm:", error);
    return { success: false, message: "An error occurred while sending the message: " + (error.message || String(error)) };
  }
}