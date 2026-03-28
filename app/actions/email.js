"use server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  try {
    const res = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use this for testing
      to: 'anshuguptacell@gmail.com', // Where you want to receive emails
      subject: `My Portfolio Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    console.log(res);
    if (res.error) {
       return { success: false, error: res.error, message: "Failed to send email" };
    }
    return { success: true, message: "Email sent successfully" };

  } catch (error) {
    return { success: false, error: error, message: "Failed to send email" };
  }
}