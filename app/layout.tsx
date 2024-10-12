import React, { ReactNode } from 'react'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import styles from '@/styles/styles'

interface RootLayoutProps {
    children : ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
        <body className='bg-neutral-950'>
            <div className="main">

            </div>

            <main className='app'>
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout