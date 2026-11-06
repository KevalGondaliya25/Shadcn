"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import Navbar from "@/components/component/Navbar";
import Footer from "@/components/component/Footer";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [isEmailInValid, setIsEmailInValid] = useState<boolean>(false);

    const validateEmail = (value: string) =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    useMemo(() => {
        if (email === "") return;

        setIsEmailInValid(validateEmail(email) ? false : true);
    }, [email]);

    const handleSubmit = async () => {
        if (!email || email === "") return;

        console.log("email : ", email);
    };
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Navbar
                ShimmerButtonProps={{
                    text: "Learn More",
                    background: "#E5E5E5",
                    onClick: () => router.push('/learn-more')
                }}
            />
            <main className="container mx-auto px-6 flex-grow">
                <section className="flex flex-col items-center justify-center h-full">
                    <div className="md:w-full w-screen md:grid md:grid-cols-2 md:gap-4 place-items-center justify-items-center flex flex-col">
                        <div className="w-full h-[600px] flex items-center justify-center">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                navigation={false}
                                modules={[Pagination, Navigation]}
                                className="mySwiper w-full h-full"
                            >
                                <SwiperSlide>
                                    <Image
                                        src="/media/home.png"
                                        className="w-full h-full object-cover md:rounded-[80px]"
                                        width={1080}
                                        height={1080}
                                        alt="Picture of the author"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        src="/media/home.png"
                                        className="w-full h-full object-cover md:rounded-[80px]"
                                        width={1080}
                                        height={1080}
                                        alt="Picture of the author"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="w-full md:h-full flex flex-col md:justify-center px-4 md:py-0 py-4 px-4">
                            <div className="text-base tracking-wide lg:text-xl font-normal md:text-left text-center mb-1">
                                INTRODUCING WAXD ON WHEELS
                            </div>
                            <div className="lg:text-5xl text-[34px] md:font-bold md:text-left text-center">
                                The <span className="underline">only</span>{" "}
                                luxury <br />
                                mobile waxing salon <br />
                                is launching in Austin.
                            </div>

                            <div className="pt-4 flex xl:flex-nowrap flex-wrap gap-2 w-full mt-3">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    className="h-full max-h-14"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full">
                                    <AnimatedSubscribeButton
                                        initialBtnClassName="dark:bg-[#E5E5E5] bg-black dark:text-black text-[#E5E5E5] min-h-14"
                                        changedBtnClassName="dark:bg-[#E5E5E5] bg-black dark:text-black text-[#E5E5E5] min-h-14"
                                        initialButtonDisable={
                                            email === "" || isEmailInValid
                                        }
                                        subscribeStatus={false}
                                        onInitialBtnClick={handleSubmit}
                                        initialText={
                                            <span className="group inline-flex items-center">
                                                SUBSCRIBE
                                                <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </span>
                                        }
                                        changeText={
                                            <span className="group inline-flex items-center">
                                                <CheckIcon className="mr-2 h-4 w-4" />
                                                SUBSCRIBED
                                            </span>
                                        }
                                    />
                                    <ShimmerButton
                                        className="w-full min-h-14"
                                        background="#FFC48E"
                                        shimmerColor="black"
                                        borderRadius="8px"
                                        shimmerSize="0.1em"
                                        shimmerDuration="2s"
                                        onClick={() => router.push("/contribute")}
                                    >
                                        <span className="whitespace-pre-wrap text-center text-base font-normal leading-none tracking-tight text-black dark:from-white dark:to-slate-900/10 lg:text-base">
                                            CONTRIBUTE
                                        </span>
                                    </ShimmerButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
