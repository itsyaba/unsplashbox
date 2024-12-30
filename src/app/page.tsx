import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-[url('/images/hero-image.png')] h-screen w-screen  bg-contain bg-center bg-no-repeat flex items-center justify-center flex-col">
      <h1 className="font-semibold text-2xl mb-4">Search</h1>
      <p className="mb-4 text-lightDark">Search high-resolution images from Unsplash</p>
      <div className="w-full flex items-center justify-center">
        <Input
          placeholder="Enter your keywords..."
          className="w-2/6 py-6 px-2 border-lightLightDark shadow-sm rounded-r-none border-r-transparent"
        />
        <Button
          className="h-full border border-lightLightDark rounded-l-none border-l-transparent"
          variant="ghost"
        >
          <Image src="images/search.svg" alt="search" width={20} height={20} />
        </Button>
      </div>
    </div>
  );
};

export default page;
