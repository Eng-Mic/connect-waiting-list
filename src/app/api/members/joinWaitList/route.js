import { NextResponse } from 'next/server';
import Member from "@/lib/database/models/member.model";
import { connectToDatabase } from "@/lib/database/mongoose";


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
        return NextResponse.json({ message: 'Member created successfully', member: newMember }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Server error' }, { status: 500});
    }
}
