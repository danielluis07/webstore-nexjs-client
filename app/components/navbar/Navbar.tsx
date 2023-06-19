"use client";

import * as React from "react";
import Logo from "./Logo";

import Link from "next/link";

import { useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import SignInMenuMobile from "./SignInMenuMobile";
import MenuMobile from "./MenuMobile";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import Avatar from "./Avatar";
import CartDiv from "../cart/CartDiv";
import SearchForm from "./SearchForm";
import { CartContext } from "@/app/context/CartContex";

const Navbar: React.FC<User> = ({ session }) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isThisOpen, setIsThisOpen] = useState(false);
  const [catNavMobile, setCatnavMobile] = useState(false);
  const { isOpen, setIsOpen, itemsAmount } = React.useContext(
    CartContext
  ) as CartIconProps;

  return (
    <div className="w-full shadow-sm">
      <div className="py-4">
        <div className="flex justify-between items-center px-6">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden sm:flex px-8 flex-row md:w-2/5 sm:w-full gap-x-8 lg:justify-between items-center gap-8">
            <Link href="/products">
              <p className="cursor-pointer hover:text-green-500 text-sm md:text-md">
                PRODUTOS
              </p>
            </Link>
            <p className="cursor-pointer hover:text-green-500 text-sm md:text-md">
              SOBRE NÓS
            </p>
            <p className="cursor-pointer hover:text-green-500 text-sm md:text-md">
              CONTATO
            </p>
          </div>
          <div className="flex flex-row gap-5 w-2/5 justify-end items-center">
            <div className="hidden md:flex w-full">
              <SearchForm />
            </div>
            {session ? (
              <div className="flex flex-row gap-5">
                <div onClick={() => setIsThisOpen(!isThisOpen)}>
                  <Avatar src={session.user?.image} />
                </div>
                {isThisOpen && (
                  <div className="absolute flex justify-center p-4 rounded-xl shadow-md w-[70px] bg-white right-36 sm:right-20 top-14 text-sm z-10">
                    <div
                      className="cursor-pointer hover:text-green-500"
                      onClick={() => signOut()}>
                      Sair
                    </div>
                  </div>
                )}
                <div
                  onClick={() => setCatnavMobile(true)}
                  className="flex md:hidden">
                  <AiOutlineMenu className="text-3xl hover:text-green-500 cursor-pointer" />
                </div>
                <div
                  className={`${
                    catNavMobile ? "right-0" : "-right-full"
                  } fixed top-0 bottom-0 bg-white z-30 w-full h-screen transition-all duration-300`}>
                  <MenuMobile setCatnavMobile={setCatnavMobile} />
                </div>
              </div>
            ) : (
              <div className="flex items-center flex-row gap-5 w-1/2">
                <div onClick={registerModal.onOpen} className="hidden sm:flex">
                  <p className="cursor-pointer hover:text-green-500">Entrar</p>
                </div>
                <div className="flex sm:hidden text-gray-500">
                  <SignInMenuMobile session={session} />
                </div>
                <div
                  onClick={() => setCatnavMobile(true)}
                  className="flex md:hidden">
                  <AiOutlineMenu className="text-3xl hover:text-green-500 cursor-pointer" />
                </div>
                <div
                  className={`${
                    catNavMobile ? "right-0" : "-right-full"
                  } fixed top-0 bottom-0 bg-white z-30 w-full h-screen transition-all duration-300`}>
                  <MenuMobile setCatnavMobile={setCatnavMobile} />
                </div>
              </div>
            )}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative cursor-pointer">
              <CiShoppingCart className="text-3xl hover:text-green-500" />
              <div className="absolute w-[16px] h-[16px] bg-green-500 rounded-full top-0 -right-1 text-[10px] flex justify-center items-center font-bold tracking-[-0.1em]">
                {itemsAmount}
              </div>
            </div>
            <div
              className={`${
                isOpen ? "right-0" : "-right-full"
              } bg-white shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}>
              <CartDiv />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full p-4">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
