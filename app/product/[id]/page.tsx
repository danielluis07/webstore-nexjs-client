"use client";

import Container from "@/app/components/Container";
import { CartContext } from "@/app/context/CartContex";
import { useContext } from "react";
import { getProduct } from "@/lib/getProduct";

type Params = {
  params: {
    id: string;
  };
};

const page = ({ params: { id } }: Params) => {
  const { data }: ProductsProps = getProduct(id);
  const { addToCart } = useContext(CartContext) as AddToCart;
  return (
    <>
      <Container>
        <div className="mt-10">
          {data?.map((product) => {
            return (
              <div
                className="flex flex-col md:flex-row gap-y-4 gap-x-8 w-full h-full"
                key={product.id}>
                <div className="w-full h-full rounded-lg overflow-hidden sm:max-w-lg">
                  <img
                    src={`http://127.0.0.1:1337${product.attributes.image?.data[0].attributes.url}`}
                    alt="product"
                  />
                </div>
                <div className="flex flex-col gap-y-8">
                  <div>
                    <p className="text-xl sm:text-2xl md:text-3xl">
                      {product.attributes.title}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-8">
                    <div className="flex flex-col gap-y-4">
                      <p>{product.attributes.description}</p>
                      <p className="font-bold text-xl text-green-500">
                        R$ {product.attributes.price}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => addToCart(data, id)}
                      className="p-4 shadow-xl rounded-lg transition-all hover:shadow-lg active:shadow-sm active:scale-90 md:w-2/3 lg:w-1/3 bg-green-400">
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default page;
