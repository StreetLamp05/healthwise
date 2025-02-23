// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from 'react';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "HealthWise",
    description: "Your Health Forecast",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" dir="ltr">
            <body className="bg-gradient-to-b from-indigo-200 to-indigo-600 text-white antialiased font-sans">
                <div className="min-h-screen">{children}</div>
            </body>
        </html>
    );
}
