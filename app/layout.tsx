import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
title: 'FindAll - Amazing Deals',
description: 'Daily flash sales and discounts',
}
export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="en">
<body className={inter.className}>{children}</body>
</html>
)
}
