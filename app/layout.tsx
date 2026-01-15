/**
 * Root layout for the application.
 * - Loads global styles and fonts
 * - Wraps the app with global providers (React Query)
 * - Renders the background video and foreground content
*/

import React from "react";
import "./globals.css";
import Providers from "./providers";
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"]
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <div className="video-container">
                        {/* Background video */}
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="video-bg"
                        >
                            <source src="/222841_medium.mp4" type="video/mp4" />
                        </video>

                        {/* Foreground application content */}
                        <div className="content">
                            {children}
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    )
}

