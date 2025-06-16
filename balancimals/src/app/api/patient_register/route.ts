import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fname, lname, email, height, weight, bday, password1, password2 } = body

        const existingUserByEmail = await prisma.patient.findUnique({
            where: { email: email }
        });
        if (existingUserByEmail) {
            return NextResponse.json({ patient: null, message: "User with this email already exists" }, { status: 409 })
        }

        if ( password1 !== password2 ) {
            return NextResponse.json({ patient: null, message: "Passwords do not match" }, { status: 409 })
        }

        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);

        if (isNaN(heightNum) || isNaN(weightNum)) {
            return NextResponse.json({ message: "Invalid height or weight" }, { status: 400 });
        }

        const birthday = new Date(bday)

        const hashedPass = await hash(password1, 10)
        const newPatient = await prisma.patient.create({
            data: {
                fname,
                lname,
                height: heightNum,
                weight: weightNum,
                birthday,
                email,
                password: hashedPass
            }
        })

        const { password: newPatientPassword, ...rest } = newPatient;

        return NextResponse.json({ patient: rest, message: "User created succesfully" }, { status: 201 })

    } catch(error) {
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}