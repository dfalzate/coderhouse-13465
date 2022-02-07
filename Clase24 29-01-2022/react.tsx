// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp();

let visitas: number = 0

app.handle("/coderhouse", async (req) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=utf-8",
    }),
    body: ReactDOMServer.renderToString(
      <html>
        <body>
          <h1>
            Hello servest con react!
          </h1>
          <h2 style={{ color: 'blue' }}>Visitas {++visitas}</h2>
        </body>
      </html>
    ),
  });
});

const port = 8000;
console.log(`Server change: http://localhost:${port}`);
app.listen({ port });
