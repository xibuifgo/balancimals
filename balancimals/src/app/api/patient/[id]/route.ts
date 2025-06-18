// src/app/api/patient/[id]/route.ts

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ message: "Missing token" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { sharecode: string };

    const patient = await prisma.patient.findUnique({
      where: { id: params.id },
      include: { doctor: true }
    });

    if (!patient) {
      return NextResponse.json({ message: "Patient not found" }, { status: 404 });
    }

    console.log("📌 Token sharecode:", decoded.sharecode);
    console.log("📌 Patient sharecode:", patient?.sharecode);
    console.log("📌 Equal?", decoded.sharecode === patient?.sharecode);

    if (patient.sharecode !== decoded.sharecode) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json({ patient }, { status: 200 });
  } catch (err) {
    console.error("❌ JWT or DB error:", err);
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}

