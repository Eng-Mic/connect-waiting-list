// Update user

import { NextResponse } from 'next/server';
import User from '@/lib/database/models/user.model';
import { connectToDatabase } from '@/lib/database/mongoose';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';

export async function PUT(request, { params }) {
  const { id } = params;

  try {
    await connectToDatabase();

    // Check if valid MongoDB ObjectId
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    const { userName, email, password, role, status } = await request.json();
     // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Find user by ID and update
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { userName, email, password: hashedPassword, role, status },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}
