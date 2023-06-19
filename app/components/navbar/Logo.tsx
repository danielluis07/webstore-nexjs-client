"use client";
import Image from "next/image";
import logo from "../../../public/assets/my-logo-P.png";

const Logo = () => {
  return (
    <div>
      <Image
        className="w-auto"
        src={logo}
        height={100}
        width={100}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
