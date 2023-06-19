import getProductByCategory from "@/lib/getProdByCatId";
import ProductCard from "@/app/components/ProductCard";
import Container from "@/app/components/Container";
import Link from "next/link";

type Params = {
  params: {
    id: string;
  };
};

const page = async ({ params: { id } }: Params) => {
  const { data }: ProductsProps = await getProductByCategory(id);
  return (
    <>
      <Container>
        <div className="mt-10 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6">
          {data?.map((product) => {
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
};

export default page;
