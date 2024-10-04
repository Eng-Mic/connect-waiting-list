// Get all members
import { NextResponse } from 'next/server';
import Member from "@/lib/database/models/member";
import { connectToDatabase } from "@/lib/database/mongoose";


export async function GET() {
    try {
        await connectToDatabase();

        // Fetch all members
        const members = await Member.find();
        return NextResponse.json({ members });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch members' }, { status: 500 });
    }
}
