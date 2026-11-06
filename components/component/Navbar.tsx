import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/icons";
import ShimmerButton from "@/components/magicui/shimmer-button";

export default function Navbar({
    ShimmerButtonProps,
}: Readonly<{ ShimmerButtonProps: ShimmerButtonPropsType }>) {
    return (
        <>
            <div className="flex justify-center">
            <div className="container flex items-center justify-between sm:px-16 px-8 py-4 backdrop-blur-lg backdrop-saturate-150 fixed top-0 w-full">
                <Link href="/">
                    <Logo />
                </Link>
                <ShimmerButton
                            className={cn(`min-h-4`, ShimmerButtonProps?.className || "")}
                            background={ShimmerButtonProps?.background || "#FFC48E"}
                            shimmerColor={ShimmerButtonProps?.shimmerColor || "black"}
                            borderRadius={ShimmerButtonProps?.borderRadius || "8px"}
                            shimmerSize={ShimmerButtonProps?.shimmerColor || "0.1em"}
                            shimmerDuration={ShimmerButtonProps?.shimmerDuration || "2s"}
                            onClick={ShimmerButtonProps.onClick}
                        >
                            <span className="whitespace-pre-wrap text-center text-base font-normal leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-base">
                                {ShimmerButtonProps.text}
                            </span>
                        </ShimmerButton>
            </div>
            </div>
        </>
    );
}

type ShimmerButtonPropsType = {
    className?: string;
    background?: string;
    shimmerColor?: string;
    borderRadius?: string;
    shimmerSize?: string;
    shimmerDuration?: string;
    onClick: () => void;
    text: string;
}
