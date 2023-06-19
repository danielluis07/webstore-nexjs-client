import useSWR from "swr";

const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`;

async function fetcher() {
  const res = await fetch(url, {
    cache: "no-cache",
  });

  return res.json();
}

export const getCategories = () => {
  const { data } = useSWR(url, fetcher);

  return { ...data };
};
