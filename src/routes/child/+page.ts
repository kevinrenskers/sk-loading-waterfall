import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, parent }) => {
  const data = await parent();

  const b = async () => {
    console.log("Starting B", Date.now());
    return await fetch(`https://dummyjson.com/products?token=${data.token}`);
  };

  return {
    b: b(),
  };
};
