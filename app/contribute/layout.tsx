"use client";
import { useRouter } from "next/navigation";

import Footer from "@/components/component/Footer";
import Navbar from "@/components/component/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col items-center justify-center h-full">
                <Navbar
                    ShimmerButtonProps={{
                        text: "Learn More",
                        background: "#E5E5E5",
                        onClick: () => router.push('/learn-more')
                    }}
                />
                <main className="container mx-auto px-6 flex-grow">
                    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
                        <div className="inline-block text-center justify-center h-full">
                            {children}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
