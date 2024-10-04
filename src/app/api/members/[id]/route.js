import { NextResponse } from 'next/server';
import Member from '@/lib/database/models/member.model';
import { connectToDatabase } from '@/lib/database/mongoose';
import { ObjectId } from 'mongodb';

export async function GET(request, { params })  {
  const { _id } = params;

  try {
    await connectToDatabase();

    // Check if valid MongoDB ObjectId
    if (!ObjectId.isValid(_id)) {
      return NextResponse.json({ error: 'Invalid member ID' }, { status: 400 });
    }

    const member = await Member.findById(_id);
    if (!member) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }

    return NextResponse.json({ member }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch member' }, { status: 500});
  }
}
