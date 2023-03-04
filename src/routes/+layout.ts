import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ fetch, data }) => {
  const a = async () => {
    console.log("Starting A", Date.now());
    return await fetch(`https://dummyjson.com/products?token=${data.token}`);
  };

  return {
    ...data,
    a: a(),
  };
};
