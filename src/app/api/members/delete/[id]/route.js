import { NextResponse } from 'next/server';
import Member from '@/lib/database/models/member.model';
import { connectToDatabase } from '@/lib/database/mongoose';
import { ObjectId } from 'mongodb';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function DELETE(request, { params }) {
    const { id } = params;

    try {
        await connectToDatabase();

        // Check if valid MongoDB ObjectId
        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ error: 'Invalid member ID' }, { status: 400 });
        }

        // Find member by ID and delete
        const deletedMember = await Member.findByIdAndDelete(id);

        if (!deletedMember) {
            return NextResponse.json({ error: 'Member not found' }, { status: 404 });
        }
        
        // Return response with Cache-Control header to prevent caching
        return NextResponse.json(
            { message: 'Member deleted successfully' },
            {
                status: 200,
                headers: {
                    'Cache-Control': 'no-store, max-age=0' // Prevent caching
                }
            }
        );
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete member' }, { status: 500 });
    }
}