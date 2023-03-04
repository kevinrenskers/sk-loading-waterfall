import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.token = "ABC";
  return await resolve(event);
};
