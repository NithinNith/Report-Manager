"use client";
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const Provider: React.FC<{ children: React.ReactNode, session?: any }> = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider