import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'

import '../styles/global.css'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
    title: 'NLW copas game calendar',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${roboto.className} bg-gray-900 bg-app bg-no-repeat bg-cover`}>{children}</body>
        </html>
    )
}