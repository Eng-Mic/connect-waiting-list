import { NextResponse } from 'next/server';
import Member from '@/models/Member';
import { connectToDatabase } from '@/lib/db';
import { ObjectId } from 'mongodb';

export async function PUT(request, { params }) {
    const { _id } = params;

    const {
        fullName,
        email,
        phoneNumber,
        joinAs,
        yourStory,
        businessName,
        feedbackOnTheProblems,
        suggestionsOrQuestions,
    } = await request.json();

    try {
        await connectToDatabase();

        // Check if valid MongoDB ObjectId
        if (!ObjectId.isValid(_id)) {
            return NextResponse.json({ error: 'Invalid member ID' }, { status: 400});
        }

        // Find member by ID and update
        const updatedMember = await Member.findByIdAndUpdate(
            _id,
            {
                fullName,
                email,
                phoneNumber,
                joinAs,
                yourStory,
                businessName,
                feedbackOnTheProblems,
                suggestionsOrQuestions,
            },
            { new: true }  // Return the updated document
        );

        if (!updatedMember) {
            return NextResponse.json({ error: 'Member not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Member updated successfully', member: updatedMember }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update member' }, { status: 500 });
    }
}
