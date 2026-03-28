"use server";
import { toast } from 'react-toastify';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
    console.log(formData);
 
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
    console.log("done -->", res);
    if (res.error) {
      console.error("res.error.message", res.error.message);
    }
    
  } catch (error) {
    console.log("failed -->", error);
    
  }
}