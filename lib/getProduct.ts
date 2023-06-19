import useSWR from "swr";

async function fetcher(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?populate=*&filters[id][$eq]=${id}`,
    { cache: "no-cache" }
  );

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}

export const getProduct = (id: string) => {
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?populate=*&filters[id][$eq]=${id}`,
    fetcher
  );

  return { ...data };
};
