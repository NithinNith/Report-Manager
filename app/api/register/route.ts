import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const primsa = new PrismaClient();

export const POST = async (request: any) => {
    const { userName, email, password } = await request.json();
    console.log(userName);

    if (!userName || !email || !password) {
        return new NextResponse("Bad Request", { status: 400 });
    }

    const userExists = await primsa.user.findUnique({
        where: {
            email: email
        }
    });

    //If user exists 
    if (userExists) {
        return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await primsa.user.create({
        data: {
            email: email,
            name: userName,
            password: hashedPassword,
        }
    });
    return NextResponse.json(user, { status: 201 });
}