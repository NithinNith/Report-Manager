"use client";
import Profile from '../../../components/Profile';
import { useSession } from 'next-auth/react';

const Page = () => {
    const { data: session } = useSession();

    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={session}
        />
    )
}

export default Page