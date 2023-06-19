export default async function getProductByCategory(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?populate=*&filters[categories][id][$eq]=${id}`,
    { cache: "no-cache" }
  );

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
