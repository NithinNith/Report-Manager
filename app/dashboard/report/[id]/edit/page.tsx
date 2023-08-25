"use client";
import React, { useEffect, useState } from 'react'

import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import ReportForm from '../../../../../components/Report';
import { ReportDate } from '../../../../../types/form';
import Loader from '../../../../../components/Loader';

const page: React.FC<any> = ({ params }: { params: any }) => {
    const router = useRouter();
    const { data: session } = useSession();
    const [report, setReport] = useState<string>("");
    const [challengesFaced, setChallengesFaced] = useState<string>("");
    const [reportDate, setReportDate] = useState<ReportDate>({ from: "", to: "" });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchReport();
    }, []);

    const fetchReport = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/report/${params?.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                const { fromDate, toDate, report, challengesFaced } = data;
                setReportDate({
                    from: new Date(fromDate).toISOString().slice(0, 10),
                    to: new Date(toDate).toISOString().slice(0, 10),
                });
                setReport(report);
                setChallengesFaced(challengesFaced);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

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
            const response = await fetch(`/api/report/${params?.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                toast('Report Updated Successfully');
                router.push('/');
            } else {
                toast('Failed to Update Report');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            {
                isLoading ?
                    <Loader />
                    : <ReportForm
                        type={'Edit'}
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
            }
        </>

    );
}

export default page;