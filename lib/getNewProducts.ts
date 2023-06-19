export default async function getNewProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/products?populate=*&filters[isNew]=true`,
    { cache: "no-cache" }
  );

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
