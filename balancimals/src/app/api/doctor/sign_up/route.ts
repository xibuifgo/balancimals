import { generateShareCode } from '@/lib/generate_sharecode';
import { prisma } from '@/lib/prisma';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fname, lname, email, password1, password2, username } = body;

        // Generate a unique sharecode
        let unique = false;
        let sharecode = '';

        if (!fname || !lname || !email || !password1 || !password2 || !username ) {
            return NextResponse.json({ message: "Missing Required Fields " }, { status: 401 });
        }

        const existingUserByEmail = await prisma.doctor.findUnique({
            where: { email: email }
        });
        if (existingUserByEmail) {
            return NextResponse.json({ doctor: null, message: "User with this email already exists" }, { status: 409 })
        }

        if ( password1 !== password2 ) {
            return NextResponse.json({ doctor: null, message: "Passwords do not match" }, { status: 410 })
        }

        while (!unique) {
            sharecode = generateShareCode();
            const existing = await prisma.doctor.findUnique({ where: { sharecode } });
            if (!existing) unique = true;
        }

        const hashedPass = await hash(password1, 10)

        const newDoctor = await prisma.doctor.create({
            data: {
            fname,
            lname,
            email,
            username,
            password: hashedPass,
            sharecode,
            },
        });

        const { password: newDoctorPassword, ...rest } =  newDoctor;

        return NextResponse.json({ doctor: rest, message: "User created succesfully" }, { status: 201 });
    } catch(error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}
