"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { Report } from '../../../types/report';
import ReportCard from '../../../components/ReportCard';
import Loader from '../../../components/Loader';

const Reports: React.FC<{ userId: string }> = ({ userId }) => {
    const router = useRouter();
    const [reports, setReports] = useState<Report[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/user/${userId}/reports`, {
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
                    <Loader /> :
                    <div className='w-full flex flex-wrap flex-row gap-4'>
                        {
                            reports.length > 0 ? reports.map((report) =>
                                <ReportCard key={report.id} report={report} handleEdit={(id) => {
                                    router.push(`/dashboard/report/${id}/edit`);
                                }} />
                            ) : <p>No Reports Found</p>
                        }
                    </div>
            }
        </section>
    );
}

export default Reports;