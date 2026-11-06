"use client";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import SparklesText from "@/components/magicui/sparkles-text";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";

const LearnMore: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailInValid, setIsEmailInValid] = useState<boolean>(false);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  useMemo(() => {
    if (email === "") return;

    setIsEmailInValid(validateEmail(email) ? false : true);
  }, [email]);

  const handleSubmit = async () => {
    if (!email || email === "") {
      setIsEmailInValid(true);
      return;
    }
    console.log("email : ", email);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="max-w-4xl px-8">
          <SparklesText
            className="md:text-3xl text-[24px] h-fit font-semibold text-center md:pb-0 pt-5 pb-5 "
            text="Luxury on Your Time, Meeting You Where You Are"
          />
          <SparklesText
            className="md:text-3xl text-[24px] h-fit font-semibold text-center md:pb-0 pt-5 pb-5 "
            text="Luxury at Your Convenience"
          />
          <SparklesText
            className="md:text-3xl text-[24px] h-fit font-semibold text-center md:pb-0 pt-5 pb-5 "
            text="Your Time, Your Spa: Luxury at Your Location"
          />
          <SparklesText
            className="md:text-3xl text-[24px] h-fit font-semibold text-center md:pb-24 pt-5 pb-10 "
            text="Elegance on Your Schedule, Wherever You Are"
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center content-center">
          <div className="w-full md:h-[500px] h-[300px] flex flex-col justify-center items-center">
            <Image
              src="/media/home.png"
              className="size-full md:max-w-[500px] md:max-h-[500px] max-h-[300px] max-w-[300px] object-cover rounded-[80px]"
              width={1080}
              height={1080}
              alt="Picture of the author"
            />
          </div>
          <div className="h-full flex flex-col items-center justify-center">
            <div className="md:text-[52px] leading-none text-3xl font-semibold	text-center lg:text-left w-full md:pb-6 pb-4">
              A new experience
            </div>
            <h3 className="md:text-2xl text-xl h-fit font-normal text-left justify-items-center text-center lg:text-left md:mb-0 mb-10  content-center">
              Our specially designed van brings premium waxing treatments
              directly to your doorstep, blending convenience with excellence.
            </h3>
          </div>
        </div>

        <div className="md:grid hidden md:grid-cols-2 grid-cols-1 gap-4 justify-items-center content-center">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="md:text-[52px] leading-none text-3xl font-semibold	text-center lg:text-right w-full md:pb-6 pb-4">
              Spa on Wheels
            </div>
            <h3 className="md:text-2xl text-xl h-fit font-normal text-right justify-items-center text-center lg:text-right md:mb-0 mb-10  content-center">
              Experience luxury wherever you are! Our mobile salon features an
              interior that rivals high-end spas, complete with plush
              furnishings and state-of-the-art equipment for a truly indulgent
              experience on the go.
            </h3>
          </div>
          <div className="w-full md:h-[500px] h-[300px] flex flex-col justify-center items-center">
            <Image
              src="/media/spa.png"
              className="size-full md:max-w-[500px] md:max-h-[500px] max-h-[300px] max-w-[300px] object-cover rounded-[80px]"
              width={1080}
              height={1080}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className="md:hidden grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center content-center">
          <div className="w-full md:h-[500px] h-[300px] flex flex-col justify-center items-center">
            <Image
              src="/media/spa.png"
              className="size-full md:max-w-[500px] md:max-h-[500px] max-h-[300px] max-w-[300px] object-cover rounded-[80px]"
              width={1080}
              height={1080}
              alt="Picture of the author"
            />
          </div>
          <div className="h-full flex flex-col items-center justify-center">
            <div className="md:text-[52px] leading-none text-3xl font-semibold	text-center lg:text-right w-full md:pb-6 pb-4">
              Spa on Wheels
            </div>
            <h3 className="md:text-2xl text-xl h-fit font-normal text-left justify-items-center text-center lg:text-left md:mb-0 mb-10  content-center">
              Experience luxury wherever you are! Our mobile salon features an
              interior that rivals high-end spas, complete with plush
              furnishings and state-of-the-art equipment for a truly indulgent
              experience on the go.
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center content-center">
          <div className="w-full md:h-[500px] h-[300px] flex flex-col justify-center items-center">
            <Image
              src="/media/main.png"
              className="size-full md:max-w-[500px] md:max-h-[500px] max-h-[300px] max-w-[300px] object-cover rounded-[80px]"
              width={1080}
              height={1080}
              alt="Picture of the author"
            />
          </div>
          <div className="h-full flex flex-col items-center justify-center">
            <div className="md:text-[52px] leading-none text-3xl font-semibold	text-center lg:text-left w-full md:pb-6 pb-4">
              Effortless Booking
            </div>
            <h3 className="md:text-2xl text-xl h-fit font-normal text-left justify-items-center  text-center lg:text-left md:mb-0 mb-10 content-center">
              Perfect for those with tight schedules who value convenience and
              high-quality services.
            </h3>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:pt-10 pb-4 pt-10">
          <div className="py-5 md:text-3xl text-1xl font-semibold">
            Subscribe here to stay updated with all our <br /> latest news and
            offerings!
          </div>
          <div className="flex md:flex-nowrap flex-wrap gap-4 max-w-xl w-full justify-center items-center">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              className="h-14"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="h-full">
              <AnimatedSubscribeButton
                initialBtnClassName="dark:bg-[#E5E5E5] bg-black dark:text-black text-[#E5E5E5] min-h-14 w-full"
                changedBtnClassName="dark:bg-[#E5E5E5] bg-black dark:text-black text-[#E5E5E5] min-h-14 w-full"
                subscribeStatus={false}
                initialButtonDisable={email === "" || isEmailInValid}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
