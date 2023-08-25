import '@styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Provider from '../context/Provider';

export const metadata = {
    title: "MSS Report Manager",
    description: "Manage Reports at Ease"
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <ToastContainer autoClose={1000} />
                <Provider >
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        {children}
                    </main>
                </Provider >
            </body>
        </html>
    )
}

export default RootLayout