"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Report } from '../../../types/report';
import ReportCard from '../../../components/ReportCard';

const Reports = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const [reports, setReports] = useState<Report[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/user/${session?.user?.id}/reports`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setReports(data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <section>
            {
                isLoading ?
                    <p>Loading...</p> :
                    reports.map((report) =>
                        <ReportCard key={report.id} report={report} handleEdit={(id) => {
                            router.push(`/dashboard/report/${id}/edit`);
                        }} />
                    )
            }
        </section>
    );
}

export default Reports;