"use client";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

const Nav = () => {
    const { data: session } = useSession();
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

    const handleSignOut = () => {
        signOut({
            callbackUrl: "/login",
        });
    }

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href="/" className='flex gap-2 flex-center' >
                <Image width={30} height={30} className='object-contain' src="/assets/images/mss_logo.png" alt='Logo' />
                <p className='logo_text'>MindStack Solutions</p>
            </Link>
            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/dashboard//report/create" className='black_btn'>
                        Create Report
                    </Link>
                    <button type='button' className='outline_btn' onClick={handleSignOut}>
                        Sign Out
                    </button>
                    <Link href="/dashboard/profile">
                        <div className='avatar-container'>
                            <div className='cursor-pointer avatar active'>
                                <span>{session?.user?.name?.[0]?.toUpperCase() ?? "-"}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                <div className='flex'>
                    <div
                        className='avatar-container'
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    >
                        <div className='cursor-pointer avatar active'>
                            <span>{session?.user?.name?.[0]?.toUpperCase() ?? "-"}</span>
                        </div>
                    </div>
                    {
                        toggleDropdown && (
                            <div className='dropdown'>
                                <Link
                                    href="/dashboard/profile"
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}>
                                    My Profile
                                </Link>
                                <Link
                                    href="/dashboard/report/create"
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}>
                                    Create Report
                                </Link>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        handleSignOut();
                                    }}
                                    className='mt-5 w-full black_btn'
                                >
                                    Sign Out
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Nav