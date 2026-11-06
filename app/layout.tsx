"use client";
import "./globals.css";
import clsx from "clsx";
import { Viewport } from "next";
import { fontSans } from "@/config/fonts";
import { Providers } from "@/app/providers";
import { Toaster } from "@/components/ui/sonner";

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "black" },
        { media: "(prefers-color-scheme: light)", color: "white" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    "min-h-screen font-sans antialiased",
                    fontSans.variable
                )}
            >
                <Providers
                    themeProps={{
                        attribute: "class",
                        defaultTheme: "white",
                        children,
                    }}
                >
                    <div className="h-screen w-full">{children}</div>
                    <Toaster
                        richColors={true}
                        closeButton={true}
                        position="top-right"
                    />
                </Providers>
            </body>
        </html>
    );
}
