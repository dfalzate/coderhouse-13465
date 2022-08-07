/* ---------------------------------- HTTP ---------------------------------- */

import { serve } from "https://deno.land/std@0.123.0/http/server.ts";

serve(() => new Response("Hello World\n"));

console.log("http://localhost:8000/");

//primer ejemplo

// const port = 8000;

// const handler = (request: Request): Response => {
//   const url = new URL(request.url);
//   console.log(url);
//   // localhost:3000/123/coderhouse?param=CODERHOUSE
//   const param = url.searchParams.get("param");
//   console.log(url.searchParams);
//   return new Response(JSON.stringify({ message: "Hola coderhouse", url, param }), {
//     status: 201,
//     headers: {
//       "content-type": "application/json, charset=utf-8",
//     },
//   });

//Segundo ejemplo

  // return new Response("<h1>Hola Coderhouse</h1>", {
  //   status: 201,
  //   headers: new Headers({
  //     "content-type": "text/html",
  //   }),
  // });

//tercer ejemplo
// };

// console.log(`Server change: http://localhost:${port}`);
// await serve(handler, { port });

/* --------------------------------- SERVEST -------------------------------- */

// import { createApp } from "https://deno.land/x/servest/mod.ts";

// const app = createApp();

// app.handle("/coderhouse", async (req: any) => {
//   await req.respond({
//     status: 200,
//     headers: new Headers({
//       "content-type": "text/plain",
//       "content-type": "text/html",
//       "content-type": "application/json",
//       "content-type": "application/xml",
//     }),
//     body: "Hello servest!", //text
//     body: "<h1>Hello servest!</h1>", //application
//   });
// });

// const port = 8000;
// console.log(`Server change: http://localhost:${port}`);
// app.listen({ port });
