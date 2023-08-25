import React from 'react'
import Link from 'next/link'
import { ReportFormProps } from '../types/form'

const ReportForm: React.FC<ReportFormProps> = (prop) => {
    const { type, reportDate, setReportDate, report, setReport, challengesFaced, setChallengesFaced, submitting, handleSubmit } = prop;

    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type} Report</span>
            </h1>
            <p className='desc text-left max-w-md'>
                {type} your work report here
            </p>

            <form
                onSubmit={handleSubmit}
                className='mt-4 w-full max-w-md flex flex-col gap-4 glassmorphism mb-4'
            >
                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Report From Date
                    </span>
                    <input
                        value={reportDate.from ?? ""}
                        type='date'
                        onChange={(e) => {
                            setReportDate({ to: null, from: e.target.value });
                        }}
                        placeholder='John Doe'
                        required
                        className='form_input'
                    />
                </label>

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Report To Date
                    </span>
                    <input
                        value={reportDate.to ?? ""}
                        type='date'
                        onChange={(e) => {
                            if (reportDate.from && (new Date(reportDate.from) > new Date(e.target.value))) {
                                return;
                            }
                            setReportDate({ to: e.target.value, from: reportDate.from });
                        }}
                        placeholder='John Doe'
                        required
                        className='form_input'
                    />
                </label>


                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Report
                    </span>
                    <textarea
                        value={report}
                        onChange={(e) => {
                            setReport(e.target.value)
                        }}
                        placeholder='Your weekly work report'
                        required
                        className='form_input'
                    />
                </label>

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Challenges Faced
                    </span>
                    <textarea
                        value={challengesFaced}
                        onChange={(e) => {
                            setChallengesFaced(e.target.value)
                        }}
                        placeholder='If any challenges faced ?'
                        className='form_input'
                    />
                </label>

                <div className='flex-end mx-3 mb-5 gap-4'>
                    <Link href="/" className='text-gray-500 text-sm'>
                        Cancel
                    </Link>
                    <button
                        type='submit'
                        disabled={submitting}
                        className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white' >
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ReportForm