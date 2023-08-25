import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: any, { params }: { params: any }) => {
    const reports = await prisma.report.findMany({ where: { userId: params.id } });
    return NextResponse.json(reports, { status: 200 });
}