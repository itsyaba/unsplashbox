import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div className="bg-[url('/images/hero-image.png')] h-screen w-screen  bg-contain bg-center bg-no-repeat flex items-center justify-center flex-col">
      <h1 >Search</h1>
      <p>Search high-resolution images from Unsplash</p>
      <Input placeholder="Enter your keywords..." />
    </div>
  );
};

export default page;
