"use client";

import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

type Props = {};

const SearchForm = (props: Props) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    setSearchTerm(target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const input = document.querySelector("input") as HTMLInputElement | null;
    e.preventDefault();
    if (searchTerm.length > 0) {
      router.push(`/search?query=${searchTerm}`);
      input!.value = "";
      setSearchTerm("");
    } else {
      console.log("type something");
    }
  };

  return (
    <form className="relative flex items-center w-full" onSubmit={handleSubmit}>
      <input
        className="w-full pl-4 py-[5px] outline-none border rounded-md border-gray-200"
        onChange={handleSearchInput}
        placeholder="Procurar"
        type="text"
      />
      <button className="absolute top-0 right-0 rounded-md rounded-tl-none rounded-bl-none bg-green-200 hover:bg-green-400 px-3 py-2">
        <AiOutlineSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
