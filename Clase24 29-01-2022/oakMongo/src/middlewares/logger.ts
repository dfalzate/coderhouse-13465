import { Context } from "../deps.ts";

export async function logger(ctx: Context, next: () => void) {
  await next();
  const body = await ctx.request.body().value;
  const params = body ? `Params: ${JSON.stringify(body)}` : "";
  console.log(`${ctx.request.method} request from: ${ctx.request.url} params: ${params}`);
}
