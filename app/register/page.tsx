"use client";
import React, { useState } from 'react'
import Form from '../../components/Form'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Page = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: userName,
                    email: email,
                    password: password,
                }),
            });
            if (response.ok) {
                toast('Registered Successfully');
                router.push('/login');
            } else {
                toast('Failed to Register');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form
            handleSubmit={handleSubmit}
            userName={userName}
            setUserName={setUserName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            submitting={isSubmitting}
            type='Register'
            key={1} />
    )
}

export default Page