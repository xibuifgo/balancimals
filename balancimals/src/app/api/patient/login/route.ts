import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Missing email or password" }, { status: 400 });
    }

    const patient = await prisma.patient.findUnique({ where: { email } });

    if (!patient) {
      return NextResponse.json({ message: "Patient not found" }, { status: 401 });
    }

    const valid = await compare(password, patient.password);
    if (!valid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not defined in env");
    }

    const token = jwt.sign({ patientId: patient.id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    return NextResponse.json({
      message: "Login successful",
      token,
      patient: {
        id: patient.id,
        fname: patient.fname,
        lname: patient.lname,
        email: patient.email,
        difficulty: patient.difficulty,
      }
    });

  } catch (error: any) {
    console.error('PATIENT LOGIN ERROR:', error);
    return NextResponse.json({ message: "Internal Server Error", detail: error.message }, { status: 500 });
  }
}
