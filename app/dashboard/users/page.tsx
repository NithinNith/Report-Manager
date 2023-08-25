"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Loader from '../../../components/Loader';
import { User } from '../../../types/user';
import UserCard from '../../../components/UserCard';

const Users = () => {
    const router = useRouter();
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setUsers(data);
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
                            users.map((user) =>
                                <UserCard key={user.id} user={user} onClick={() => router.push(`/dashboard/users/${user.id}/reports`)} />
                            )
                        }
                    </div>
            }
        </section>
    );
}

export default Users;