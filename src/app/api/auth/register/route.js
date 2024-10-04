import { NextResponse } from 'next/server';
import User from '@/lib/database/models/user.model';
import { connectToDatabase } from '@/lib/database/mongoose';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const { userName, email, password, role, status } = await req.json();

  try {
    await connectToDatabase();
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

     // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      role,
      status,
    });
    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}