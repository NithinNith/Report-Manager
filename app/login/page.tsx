"use client";
import React, { useState } from 'react'
import Form from '../../components/Form'
import { signIn } from 'next-auth/react';

const Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            const payload = {
                username: email,
                password: password
            };
            signIn('credentials', {
                ...payload,
                callbackUrl: "/dashboard"
            });
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    }


    return (
        <Form
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            submitting={isSubmitting}
            type='Login'
            key={1} />
    )
}

export default Page