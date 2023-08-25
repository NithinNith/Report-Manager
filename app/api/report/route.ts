import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: any) => {
    const data = await request.json();

    const { userId, fromDate, toDate, report, challengesFaced } = data;
    if (!userId || !fromDate || !toDate || !report) {
        return new NextResponse("Bad Request", { status: 400 });
    }

    const reportDto = {
        userId: userId,
        fromDate: fromDate,
        toDate: toDate,
        report: report,
        challengesFaced: challengesFaced,
        attachments: []
    };
    const reportCreated = await prisma.report.create({ data: reportDto });

    return NextResponse.json(reportCreated, { status: 201 });
}