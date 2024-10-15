// Get all members
import { NextResponse } from 'next/server';
import Member from "@/lib/database/models/member.model";
import { connectToDatabase } from "@/lib/database/mongoose";

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function GET() {
    try {
        console.log('Starting GET request');
        await connectToDatabase();
        console.log('Database connected');

        // Fetch all members
        const members = await Member.find().read('primary');
        console.log(`Fetched ${members.length} members`);
        return NextResponse.json({ members }, {
            status: 200,
            headers: {
                'Cache-Control': 'no-store, max-age=0',
            },
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch members' }, {
            status: 500,
            headers: {
                'Cache-Control': 'no-store, max-age=0',
            },
        });
    }
}
