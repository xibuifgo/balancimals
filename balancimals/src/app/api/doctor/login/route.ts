// app/api/doctor/login/route.ts  (or wherever your login is)
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const doctor = await prisma.doctor.findUnique({ where: { username } });
    if (!doctor) {
      return NextResponse.json({ message: 'User not found' }, { status: 401 });
    }

    const valid = await compare(password, doctor.password);
    if (!valid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign(
      {
        doctorId: doctor.id,
        sharecode: doctor.sharecode // ✅ Add this
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );


    return NextResponse.json({
      token,
      message: 'Login successful',
      doctor: {
        id: doctor.id,
        username: doctor.username,
        email: doctor.email,
      },
    });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

