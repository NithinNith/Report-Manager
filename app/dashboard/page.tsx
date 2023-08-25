"use client";
import { useSession } from 'next-auth/react';
import Reports from './report/page';

const page = () => {
    const { data: session, status } = useSession();

    return (
        <>
            {
                status == "authenticated" ?
                    <div className='w-full'>
                        <Reports />
                    </div> :
                    <p>Loading...</p>
            }
        </>
    )
}

export default page