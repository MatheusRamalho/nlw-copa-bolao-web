import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import '../styles/globals.css'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'NLW copas game calendar',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.className} bg-gray-800 bg-app bg-no-repeat bg-cover`}
            >
                {children}
            </body>
        </html>
    )
}
