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
        if (session.status === "loading") {
            return;
        } else if (session.status == "unauthenticated") {
            router.push("/login");
        } else if (session.status == "authenticated") {
            router.push("/dashboard");
        }
    }, [session]);


    return (
        <main>
            <Loader />
        </main>
    )
}

export default Home