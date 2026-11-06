"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import SparklesText from "@/components/magicui/sparkles-text";

const Contribute: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-xl">
          <SparklesText
            className="md:text-5xl text-3xl h-fit font-normal text-center"
            text="Be among the first!"
          />
        </div>
        <div className="sm:text-2xl text-2xl font-bold lg:text-center text-center pb-8 pt-8">
          Your contribution will be converted into credits for your Wax/d
          services.
          <br />
          You can also choose to gift these credits to a friend or family
          member.
        </div>
      </div>
      <div className="flex md:flex-nowrap flex-wrap gap-5">
        <Button
          className={`py-6 px-16 lg:px-18 md:px-9 w-full bg-[#FFC48E] text-black`}
        >
          50
        </Button>
        <Button
          className={`py-6 px-16 lg:px-18 md:px-9 w-full bg-[#FFC48E] text-black`}
        >
          100
        </Button>
      </div>
      <Button className="bg-[#FFC48E] text-black py-6 px-16 mt-4 w-full">
        Contribute Now
      </Button>
    </div>
  );
};

export default Contribute;
