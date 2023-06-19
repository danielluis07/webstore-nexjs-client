"use client";

import { getCategories } from "@/lib/getCategories";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const MenuMobile: React.FC<SetNavMobile> = ({ setCatnavMobile }) => {
  const { data }: CategoryProps = getCategories();

  return (
    <div className="w-full h-full p-8">
      <div onClick={() => setCatnavMobile(false)}>
        <AiOutlineClose className="text-xl hover:text-green-500 cursor-pointer" />
      </div>
      <div className="mt-12 flex flex-col gap-y-8">
        {data?.map((category) => {
          return (
            <div key={category.id}>
              <Link href={`/product/category/${category.id}`}>
                <p className="cursor-pointer hover:text-green-500">
                  {category.attributes.title}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuMobile;
