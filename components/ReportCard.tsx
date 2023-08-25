import { useSession } from 'next-auth/react';
import { Report } from '../types/report';
import Moment from 'react-moment';

type ReportCardProps = {
    report: Report;
    handleEdit: (id: string) => void;
};

const ReportCard: React.FC<ReportCardProps> = ({ report, handleEdit }) => {
    const { data: session } = useSession();
    console.log(report);

    return (
        <div className='prompt_card'>
            <div className='flex justify-between items-start gap-5'>
                <div className='flex-1 flex justify-start cursor-pointer items-center gap-3'>
                    <div className='flex flex-col'>
                        <h3 className='font-satoshi font-semibold text-gray-900 border-b-2'>
                            <span>Report: </span>
                            <Moment format="DD/MM/yyyy">
                                {report.fromDate}
                            </Moment>
                            <span>{" "}to{" "}</span>
                            <Moment format="DD/MM/yyyy">
                                {report.toDate}
                            </Moment>
                        </h3>
                        <p className='font-inter text-sm text-gray-500 mt-4'>
                            {report.report}
                        </p>
                        <p className='my-4 font-satoshi text-sm text-gray-700 p-0 m-0'>
                            Challenges Faced : {" "}
                            <span className='font-inter text-sm text-gray-500 p-0 m-0'>
                                {report.challengesFaced && report.challengesFaced.length > 0 ? report.challengesFaced : "-"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {
                session?.user?.id === report?.userId
                && (
                    <div className='mt-2 flex-center gap-4 border-t border-gray-200 pt-3'>
                        <p
                            className='font-inter text-sm orange_gradient cursor-pointer'
                            onClick={() => handleEdit(report.id!)}>
                            Edit
                        </p>
                    </div>
                )
            }
        </div >
    )
}

export default ReportCard