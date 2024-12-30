import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b border-b-lightLightDark">
      <Image src="/images/Logo.svg" alt="Logo" width={120} height={120} />
      <div>
        <Button className="bg-lightLightDark text-darkBg p-4 hover:opacity-70 hover:bg-lightLightDark">
          Home
        </Button>
        <Button variant="ghost">Collection</Button>
      </div>
    </nav>
  );
};

export default Navbar;
