import { PrismaClient, Role } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: any) => {
    const user = await prisma.user.findMany({ where: { role: Role.USER } });
    return NextResponse.json(user, { status: 200 });
}