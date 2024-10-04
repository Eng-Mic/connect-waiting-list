import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, subject, message } = await req.json();

    // Creating email transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_EMAIL,
            pass: process.env.MAIL_PASSWORD,
        }
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.MAIL_EMAIL,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        // Attempt to send the email
        await transporter.sendMail(mailOptions);
        console.log('Contact email sent successfully 📬');
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200});
    } catch (error) {
        // Catch any error that occurred during email sending
        console.error('Error sending contact email');
        return NextResponse.json({ message: 'Failed to send contact email'}, { status: 500});
    }
}