import { NextResponse } from 'next/server';
import Member from "@/lib/database/models/member.model";
import { connectToDatabase } from "@/lib/database/mongoose";
import { Resend } from 'resend';



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

        // resend declaration with API key as parameter
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send email based on join type
        let emailTemplate;
        let emailSubject;

        // if (joinAs.toLowerCase() === 'entrepreneur') {
        //     emailTemplate = <EntrepreneurEmail name={fullName.split(' ')[0]} />;
        //     emailSubject = `Welcome to Connect, ${fullName.split(' ')[0]}! Let’s Bring Your Ideas to Life!`
        // } else if (joinAs.toLowerCase() === 'investor') {
        //     emailTemplate = <InvestorEmail name={fullName.split(' ')[0]} />;
        //     emailSubject = `Thank You for Joining Connect, ${fullName.split(' ')[0]}! Empower Innovation with Us!`
        // } else if (joinAs.toLowerCase() === 'partner') {
        //     emailTemplate = <PartnerEmail firstName={fullName.split(' ')[0]} />;
        //     emailSubject = `Glad to Have You with Us, ${fullName.split(' ')[0]}! Let’s Collaborate for Impact!`
        // } else {
        //     emailTemplate = <OthersEmail name={fullName.split(' ')[0]} />;
        //     emailSubject = `Welcome to the Connect Community, ${fullName.split(' ')[0]}! We’re Thrilled to Have You!`
        // }

        // Render the React email component to an HTML string
        const htmlContent = ReactDOMServer.renderToStaticMarkup(emailTemplate);

        // Send the email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Connect: Fostering Collaboration & Synergy <>',
            to: email,
            subject: emailSubject,
            html: htmlContent, // This should render the React Email component
        });

        if (error) {
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500});
        }

        return NextResponse.json({ message: 'Member created successfully', member: newMember }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Server error' }, { status: 500});
    }
}
