/* ---------------------------------- HTTP ---------------------------------- */

// import { serve } from "https://deno.land/std@0.123.0/http/server.ts";

// // serve(() => new Response("Hello World\n"));

// // console.log("http://localhost:8000/");

// const port = 8000;

// const handler = (request: Request): Response => {
//   const url = new URL(request.url);
//   console.log(url);
//   const param = url.searchParams.get("param");
//   console.log(url.searchParams);
//   return new Response("<h1>Hola Coderhouse</h1>", {
//     status: 201,
//     // headers: {
//     //   "content-type": "application/json, charset=utf-8",
//     // },
//     headers: new Headers({
//       "content-type": "text/html",
//     }),
//   });
// };

// console.log(`Server change: http://localhost:${port}`);
// await serve(handler, { port });

/* --------------------------------- SERVEST -------------------------------- */

import { createApp } from "https://deno.land/x/servest/mod.ts";

const app = createApp();

app.handle("/coderhouse", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/xml",
    }),
    body: "<h1>Hello servest!</h1>",
  });
});

const port = 8000;
console.log(`Server change: http://localhost:${port}`);
app.listen({ port });
