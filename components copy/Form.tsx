import React from 'react'
import { FormProps } from '../types/form'
import Link from 'next/link'

const Form: React.FC<FormProps> = ({
    type, userName, setUserName, email, setEmail, password, setPassword, submitting, handleSubmit
}) => {

    return (
        <section className='w-full max-w-full flex-start flex-col'>
            <h1 className='head_text text-left'>
                <span className='blue_gradient'>{type}</span>
            </h1>
            <p className='desc text-left max-w-md'>
                Please {type.toLowerCase()} to continue
            </p>

            <form
                onSubmit={handleSubmit}
                className='mt-10 w-full max-w-md flex flex-col gap-4 glassmorphism'
            >
                {
                    type === "Register"
                    && <label>
                        <span className='font-satoshi font-semibold text-base text-gray-700'>
                            Username
                        </span>
                        <input
                            value={userName}
                            onChange={(e) => setUserName!(e.target.value.toString())}
                            placeholder='John Doe'
                            required
                            className='form_input'
                        />
                    </label>
                }

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Email
                    </span>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value.toString())}
                        placeholder='johndoe@gmail.com'
                        required
                        className='form_input'
                    />
                </label>

                <label>
                    <span className='font-satoshi font-semibold text-base text-gray-700'>
                        Password
                    </span>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value.toString())}
                        placeholder='**********'
                        required
                        type='password'
                        className='form_input'
                    />
                </label>

                <div className='flex-end mx-3 mb-5 gap-4'>
                    {
                        type === "Register"
                        && <Link href="/login" className='text-gray-500 text-sm'>
                            Cancel
                        </Link>
                    }
                    <button
                        type='submit'
                        disabled={submitting}
                        className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white' >
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
                {
                    type === "Login"
                    && <Link href="/register" className='text-gray-500 text-sm text-center'>
                        New User? <span className='underline'>Register</span>
                    </Link>
                }
            </form>
        </section>
    )
}

export default Form