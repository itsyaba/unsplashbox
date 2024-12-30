import { Input } from "@/components/ui/input";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Search</h1>
      <p>Search high-resolution images from Unsplash</p>
      <Input placeholder="Enter your keywords..." />
    </div>
  );
};

export default page;
