"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedSubscribeButtonProps {
    buttonColor?: string;
    buttonTextColor?: string;
    subscribeStatus: boolean;
    initialButtonDisable?: boolean;
    initialBtnClassName?: string;
    changedBtnClassName?: string;
    onInitialBtnClick?: () => void;
    initialText: React.ReactElement | string;
    changeText: React.ReactElement | string;
}

export const AnimatedSubscribeButton: React.FC<
    AnimatedSubscribeButtonProps
> = ({
    buttonColor,
    subscribeStatus,
    buttonTextColor,
    initialBtnClassName,
    changedBtnClassName,
    changeText,
    initialText,
    initialButtonDisable,
    onInitialBtnClick,
}) => {
    const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

    useEffect(() => {
        if (isSubscribed) {
            setTimeout(() => setIsSubscribed(false), 1000);
        }
    }, [isSubscribed]);

    return (
        <AnimatePresence mode="wait">
            {isSubscribed ? (
                <motion.button
                    className={`${changedBtnClassName} relative flex w-full items-center justify-center overflow-hidden rounded-md p-[10px] outline outline-1 outline-black`}
                    onClick={() => setIsSubscribed(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    disabled={true}
                >
                    <motion.span
                        key="action"
                        className="relative block w-fit text-base font-normal"
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                    >
                        {changeText}
                    </motion.span>
                </motion.button>
            ) : (
                <motion.button
                    className={`${initialBtnClassName} relative flex w-full cursor-pointer items-center justify-center rounded-md border-none p-[10px]`}
                    onClick={() => {
                        setIsSubscribed(true);
                        onInitialBtnClick?.();
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    disabled={initialButtonDisable}
                >
                    <motion.span
                        key="reaction"
                        className="relative block text-base font-normal"
                        initial={{ x: 0 }}
                        exit={{ x: 50, transition: { duration: 0.1 } }}
                    >
                        {initialText}
                    </motion.span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};
