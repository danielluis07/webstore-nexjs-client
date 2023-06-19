import useSWR from "swr";

async function fetcher(searchTerm: string | null | undefined) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?populate=*&filters[title][$contains]=${searchTerm}`,
    {
      cache: "no-cache",
    }
  );

  return res.json();
}

export const getSearchProduct = (searchTerm: string | null | undefined) => {
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?populate=*&filters[title][$contains]=${searchTerm}`,
    fetcher
  );

  return { ...data };
};
