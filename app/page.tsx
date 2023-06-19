import Container from "./components/Container";
import { Comfortaa } from "next/font/google";
import Image from "next/image";
import oils from "../public/assets/oils-dark.jpg";
import shampoos from "../public/assets/shampoos.jpg";
import soups from "../public/assets/soups.jpg";
import getNewProducts from "@/lib/getNewProducts";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

const josefin = Comfortaa({ subsets: ["latin"] });

export default async function Home() {
  const { data }: ProductsProps = await getNewProducts();

  return (
    <>
      <div className="max-w-[2520px] mx-auto bg-gray-300 h-[200px] sm:h-[400px] md:h-[500px] xl:h-[700px] sm:bg-[url('../public/assets/banner.jpg')] bg-cover">
        <div className="w-full h-full flex justify-center sm:justify-end">
          <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
            <div
              className={`${josefin.className} text-center leading-loose sm:text-[40px] sm:text-start xl:text-[60px] hover:cursor-context-menu`}>
              Produtos <span className="text-green-600">Naturais</span> <br />{" "}
              para <br /> Cabelo e Pele
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="mt-20 mb-20 justify-center mx-auto flex flex-col sm:flex-row gap-x-10 gap-y-4">
          <div className="overflow-hidden max-w-[554px] rounded-md">
            <Image className="object-cover" src={oils} alt="oleos" />
          </div>
          <div className="overflow-hidden max-w-[554px] rounded-md">
            <Image className="object-cover" src={shampoos} alt="shampoos" />
          </div>
          <div className="overflow-hidden max-w-[554px] rounded-md">
            <Image className="object-cover" src={soups} alt="soups" />
          </div>
        </div>
        <div>
          <div className="w-full text-center text-5xl">Novidades</div>
          <div className="h-0.5 bg-green-600 w-1/6 mx-auto mt-10 mb-10" />
        </div>
        <div className="mt-10 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6">
          {data.map((product) => {
            return (
              <div key={product.id}>
                <Link href={`/product/${product.id}`}>
                  <ProductCard
                    category={
                      product.attributes.categories.data[0].attributes.title
                    }
                    title={product.attributes.title}
                    description={product.attributes.description}
                    price={product.attributes.price}
                    image={`http://127.0.0.1:1337${product.attributes.image?.data[0].attributes.url}`}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
