import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: any, { params }: { params: any }) => {
    const report = await prisma.report.findUnique({ where: { id: params.id } });
    return NextResponse.json(report, { status: 200 });
}

export const PUT = async (req: any, { params }: { params: any }) => {
    const payload = await req.json();
    const updatedReport = await prisma.report.update({
        where: { id: params.id },
        data: payload,
    });
    return NextResponse.json(updatedReport, { status: 200 });
}

