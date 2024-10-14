import { NextResponse } from 'next/server';
import Member from "@/lib/database/models/member.model";
import { connectToDatabase } from "@/lib/database/mongoose";
import { render } from '@react-email/components';
import nodemailer from 'nodemailer';
import { PartnerEmail } from '@/components/emails/PartnerEmail';
import { InvestorEmail } from '@/components/emails/InvestorEmail';
import { OthersEmail } from '@/components/emails/OthersEmail';
import { EntrepreneurEmail } from '@/components/emails/EntrepreneurEmail';



export async function POST(req) {
    const {
        fullName,
        email,
        phoneNumber,
        joinAs,
        yourStory,
        nameOfBusiness,
        feedbackOnTheProblems,
        suggestionsOrQuestions,
    } = await req.json();

    try {
        await connectToDatabase();

        // Check if the member already exists by email
        const existingMember = await Member.findOne({ email });
        if (existingMember) {
            return NextResponse.json({ error: 'Member already exists' }, { status: 400 });
        }

        // Create new member
        const newMember = new Member({
            fullName,
            email,
            phoneNumber,
            joinAs,
            yourStory,
            nameOfBusiness,
            feedbackOnTheProblems,
            suggestionsOrQuestions,
        });

        await newMember.save();

        // Send email based on join type
        let emailTemplate;
        let emailSubject;

        if (joinAs.toLowerCase() === 'entrepreneur') {
            emailTemplate = await render(<EntrepreneurEmail firstName={fullName.split(' ')[0]} />);
            emailSubject = `Welcome to Connect, ${fullName.split(' ')[0]}! Let’s Bring Your Ideas to Life!`
        } 
        else if (joinAs.toLowerCase() === 'investor') {
            emailTemplate = await render(<InvestorEmail firstName={fullName.split(' ')[0]} />);
            emailSubject = `Thank You for Joining Connect, ${fullName.split(' ')[0]}! Empower Innovation with Us!`
        } 
        else if (joinAs.toLowerCase() === 'partner') {
            emailTemplate = await render(<PartnerEmail firstName={fullName.split(' ')[0]} />);
            emailSubject = `Glad to Have You with Us, ${fullName.split(' ')[0]}! Let’s Collaborate for Impact!`
        } else {
            emailTemplate = await render(<OthersEmail firstName={fullName.split(' ')[0] } />); 
            emailSubject = `Welcome to the Connect Community, ${fullName.split(' ')[0]}! We’re Thrilled to Have You!`
        }

        // Render the React email component to an HTML string
        // const htmlContent = ReactDOMServer.renderToStaticMarkup(emailTemplate);
       // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 465,
            secure:   true,
            auth: {
                user: process.env.MAIL_EMAIL,
                pass: process.env.MAIL_PASSWORD,
            },
        });
        // Send the email using Resend
        const mailOptions  = {
            from: 'Connect: Fostering Collaboration & Synergy. <connectletcollaborate@gmail.com>',
            to: email,
            subject: emailSubject,
            html: emailTemplate, // This should render the React Email component
        };

        const emailResponse = await transporter.sendMail(mailOptions);

        if (!emailResponse || emailResponse.error) {
            return NextResponse.json({ error: 'Failed to send email', details: emailResponse.error }, { status: 500 });
        }

        return NextResponse.json({ message: 'Member created successfully', member: newMember, emailResponse }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Server error', details: error.message }, { status: 500 });
    }
}
