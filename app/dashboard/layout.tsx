import React from 'react'
import Nav from '../../components/Nav'

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}

export default layout