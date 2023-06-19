"use client";

import { getSearchProduct } from "@/lib/getSearchProduct";
import { useSearchParams } from "next/navigation";
import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

const page = () => {
  const searchParams = useSearchParams();
  const search = searchParams?.get("query");
  const { data }: ProductsProps = getSearchProduct(search);
  console.log(data);
  return (
    <>
      <Container>
        <div className="w-4/5 mx-auto mt-10">
          <p className="text-5xl font-extrabold text-gray-300">
            {data?.length > 0
              ? `${data.length} resultados para ${search}`
              : `Nenhum resultado encontrado para ${search}`}
          </p>
        </div>
        <div className="mt-10 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6">
          {data?.map((product) => {
            return (
              <div key={product.id}>
                <Link href={`/product/${product.id}`}>
                  <ProductCard
                    title={product.attributes.title}
                    image={`http://127.0.0.1:1337${product.attributes.image?.data[0].attributes.url}`}
                    price={product.attributes.price}
                    category={
                      product.attributes.categories.data[0].attributes.title
                    }
                    description=""
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default page;
