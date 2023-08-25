"use client";
import { useSession } from 'next-auth/react';
import Reports from './report/page';
import Loader from '../../components/Loader';
import { useEffect, useState } from 'react';
import { User } from '../../types/user';
import Users from './users/page';
import { Role } from '@prisma/client';

const Page = () => {
    const { data: session, status } = useSession();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!user && status == "authenticated") {
            fetchUser();
        }
    }, [session]);


    const fetchUser = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/user/${session?.user?.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {
                isLoading || status == "loading" ? <Loader /> :
                    <div>
                        {
                            user?.role == Role.ADMIN ? <Users /> : <Reports />
                        }
                    </div>
            }
        </>
    )
}

export default Page