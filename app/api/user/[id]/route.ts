import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: any, { params }: { params: any }) => {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    return NextResponse.json(user, { status: 200 });
}