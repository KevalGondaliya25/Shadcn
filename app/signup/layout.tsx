"use client";
import { useRouter } from "next/navigation";

import Navbar from "@/components/component/Navbar";
import Footer from "@/components/component/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <>
            <div className="flex flex-col items-center justify-center h-full">
                <Navbar
                    ShimmerButtonProps={{
                        text: "Sign In",
                        background: "#E5E5E5",
                        onClick: () => router.push("/signin"),
                    }}
                />
                <main className="container mx-auto px-6 flex-grow sm:mt-20 mt-12 h-full">
                    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
                        <div className="inline-block">
                            {children}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
