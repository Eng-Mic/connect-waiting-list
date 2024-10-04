import { NextResponse } from 'next/server';
import User from '@/lib/database/models/user';
import { connectToDatabase } from '@/lib/database/mongoose';
import { ObjectId } from 'mongodb';

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connectToDatabase();

    // Check if valid MongoDB ObjectId
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    // Find user by ID and delete
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}