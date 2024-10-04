import { NextResponse } from 'next/server';
import User from "@/lib/database/models/user.model";
import { connectToDatabase } from "@/lib/database/mongoose";
import bcrypt from 'bcryptjs';

export async function POST(req) {
    const { email, password } = await req.json();
    console.log(email, password)

    try {
        await connectToDatabase();

        // Check if user exists
        const user = await User.findOne({ email });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user?.password);
        if (!user || !isMatch) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 404 });
        }

        return NextResponse.json({
            user: {
                id: user._id,
                userName: user.userName,
                email: user.email,
                role: user.role,
                status: user.status,
            }
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}