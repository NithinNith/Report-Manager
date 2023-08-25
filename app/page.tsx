"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Loader from '../components/Loader';

const Home = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        console.log(session);

        if (session.data) {
            router.push("/dashboard");
        } else {
            router.push("/login");
        }
    }, [session]);


    return (
        <main>
            <Loader />
        </main>
    )
}

export default Home