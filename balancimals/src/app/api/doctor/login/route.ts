import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ message: "Missing username or password" }, { status: 400 });
    }

    const doctor = await prisma.doctor.findUnique({ where: { username } });

    if (!doctor) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const valid = await compare(password, doctor.password);
    if (!valid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not set");
    }

    const token = jwt.sign(
      { doctorId: doctor.id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return NextResponse.json({ 
      token,
      message: "Login successful",
      doctor: {
        id: doctor.id,
        username: doctor.username
      }
    });

  } catch (error) {
    console.error('LOGIN ERROR:', error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

