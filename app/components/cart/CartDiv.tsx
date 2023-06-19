"use client";

import * as React from "react";
import CartCard from "./CartCard";

import { CartContext } from "@/app/context/CartContex";
import { AiOutlineClose } from "react-icons/ai";

const CartDiv = () => {
  const { setIsOpen, cart, total, clearCart } = React.useContext(
    CartContext
  ) as CartDiv;
  return (
    <div className="w-full h-full px-4">
      <div className="w-full py-8">
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer w-4 hover:text-green-500">
          <AiOutlineClose className="text-xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-12 overflow-y-auto overflow-x-hidden h-[65vh]">
        {cart.map((item) => {
          return <CartCard item={item} key={item.id} />;
        })}
      </div>
      {cart.length >= 1 && (
        <div className="px-6 flex flex-col gap-y-4">
          <div className="flex justify-between pt-4">
            <p>Subtotal</p>
            <p>R$ {total}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-xl">Total</p>
            <p className="font-bold text-xl">R$ {total}</p>
          </div>
        </div>
      )}
      <div className="px-6 pt-4">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <button
              onClick={clearCart}
              className="p-2 shadow-xl rounded-lg transition-all hover:shadow-lg active:shadow-sm active:scale-90 w-1/3 bg-green-400 hover:bg-green-500">
              Esvaziar Carrinho
            </button>
            <button className="p-2 shadow-xl rounded-lg transition-all hover:shadow-lg active:shadow-sm active:scale-90 w-1/3 bg-green-400 hover:bg-green-500">
              Pagamento
            </button>
          </div>
        ) : (
          <div className="h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col">
            <div>Seu carrinho está vazio</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDiv;
