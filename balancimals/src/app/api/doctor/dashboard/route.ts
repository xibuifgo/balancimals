import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    console.log("[DEBUG] JWT_SECRET in dashboard route:", process.env.JWT_SECRET);

    const authHeader = req.headers.get('authorization');
    console.log("[DEBUG] Raw auth header:", authHeader);

    if (!authHeader) {
      console.log("[DEBUG] No Authorization header");
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      console.log("[DEBUG] Token missing in Authorization header");
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!);
      console.log("[DEBUG] Decoded token payload:", decoded);
    } catch (err) {
      console.log("[DEBUG] JWT verification failed:", err);
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const doctor = await prisma.doctor.findUnique({
      where: { id: (decoded as any).doctorId },
      include: { patients: true },
    });

    if (!doctor) {
      console.log("[DEBUG] No doctor found with that ID");
      return NextResponse.json({ message: 'Doctor not found' }, { status: 404 });
    }

    return NextResponse.json({ doctor });
  } catch (err) {
    console.log("[DEBUG] Server error:", err);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
