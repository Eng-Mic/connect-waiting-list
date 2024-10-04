// Get all users
import { NextResponse } from 'next/server';
import User from "@/lib/database/models/user.model";
import { connectToDatabase } from "@/lib/database/mongoose";

export async function GET() {
  try {
    await connectToDatabase();
    
    // Fetch all users
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
