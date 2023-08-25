"use client";
import React, { useState } from 'react'
import { ReportDate } from '../../../../types/form';
import ReportForm from '../../../../components/Report';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Page = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [report, setReport] = useState<string>("");
    const [challengesFaced, setChallengesFaced] = useState<string>("");
    const [reportDate, setReportDate] = useState<ReportDate>({ from: "", to: "" });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            const payload = {
                userId: session?.user?.id,
                fromDate: new Date(reportDate.from!),
                toDate: new Date(reportDate.to!),
                report: report,
                challengesFaced: challengesFaced,
            };
            const response = await fetch('/api/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                toast('Report Created Successfully');
                router.push('/');
            } else {
                toast('Failed to Create Report');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <ReportForm
            type={'Create'}
            reportDate={{
                from: reportDate.from,
                to: reportDate.to,
            }}
            setReportDate={function (date: { from: string | null; to: string | null; }): void {
                setReportDate({ to: date.to, from: date.from });
            }}
            report={report}
            setReport={setReport}
            challengesFaced={challengesFaced}
            setChallengesFaced={setChallengesFaced}
            submitting={isSubmitting}
            handleSubmit={handleSubmit} />
    );
}

export default Page;