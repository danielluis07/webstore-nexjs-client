"use client";

import Image from "next/image";
import placeholderLogo from "../../../public/assets/placeholder-logo.jpg";

type AvatarProps = {
  src: string | null | undefined;
};

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="avatar"
      src={src || placeholderLogo}
      priority
    />
  );
};

export default Avatar;
