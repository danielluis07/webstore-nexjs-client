"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Qty from "./Qty";
import { useContext } from "react";
import { CartContext } from "@/app/context/CartContex";

type CartCardProps = {
  item: {
    id: string;
    attributes: {
      title: string;
      description: string;
      price: number;
      image?: {
        data: Array<{
          id: string;
          attributes: {
            url: string;
          };
        }>;
      };
    };
    amount: number;
  };
};

const CartCard: React.FC<CartCardProps> = ({ item }) => {
  const { removeFromCart } = useContext(CartContext) as RemoveFromCart;
  return (
    <div className="flex flex-row w-full justify-between px-2">
      <div className="flex flex-row items-center gap-8">
        <div className="w-[100px] h-[100px] overflow-hidden">
          <img
            className="object-cover"
            src={`http://127.0.0.1:1337${item.attributes.image?.data[0].attributes.url}`}
            alt="product"
          />
        </div>
        <div className="flex flex-col gap-3 h-auto">
          <div>{item.attributes.title}</div>
          <div className="flex flex-row items-center gap-8">
            <Qty item={item} />
            <div className="text-green-500 text-xl">
              R$ {item.attributes.price * item.amount}
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[15px] cursor-pointer hover:text-green-500"
        onClick={() => removeFromCart(item.id)}>
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default CartCard;
