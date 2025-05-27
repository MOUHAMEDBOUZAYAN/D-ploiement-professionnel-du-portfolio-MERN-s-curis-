import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import Contact from '@/app/models/Contact';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Connexion à la base de données
    await connectDB();

    // Sauvegarde du message dans la base de données
    await Contact.create({ name, email, subject, message });

    // Configuration du transporteur d'email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email pour l'administrateur
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `Nouveau message de contact de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Sujet: ${subject}
        Message: ${message}
      `,
    });

    // Email de confirmation pour l'utilisateur
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation de votre message',
      text: `
        Cher/Chère ${name},

        Merci de m'avoir contacté. J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.

        Cordialement,
        [Votre nom]
      `,
    });

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
} 