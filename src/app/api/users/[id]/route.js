// Get single user by ID

import { NextResponse } from 'next/server';
import User from '@/lib/database/models/user.model';
import { connectToDatabase } from '@/lib/database/mongoose';
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
  const { id } = params;

  try {
    await connectToDatabase();

    // Check if valid MongoDB ObjectId
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    // Find user by ID
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}
