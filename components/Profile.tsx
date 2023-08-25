import React from 'react'
import { ProfileProps } from '../types/profile'

const Profile: React.FC<ProfileProps> = ({ name, desc, data }) => {
    return (
        <section className='w-full'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{name} Profile</span>
            </h1>
            <p className='desc text-left'>{desc}</p>
            <div className='mt-10 w-full max-w-md flex flex-col gap-4 glassmorphism'>
                <label className='w-full'>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Username
                    </span>
                    <input
                        value={data?.user?.name ?? "-"}
                        readOnly
                        placeholder='John Doe'
                        required
                        className='form_input'
                    />
                </label>

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Email
                    </span>
                    <input
                        value={data?.user?.email ?? "-"}
                        readOnly
                        placeholder='John Doe'
                        required
                        className='form_input'
                    />
                </label>
            </div>
        </section>
    )
}

export default Profile