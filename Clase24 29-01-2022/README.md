### Cambiar version
curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.4.0

### Instalar version parchada
deno install -qAf --unstable https://raw.githubusercontent.com/nnmrts/denon/patch-4/denon.ts


# Clase 24
## deno.ts

deno run deno.ts 

.vscode/settings.json

{
  "deno.enable":true,
  "deno.suggest.import.hosts":{
    "https://deno.land": false
  }
}

# Objeto Global
console.log(Deno)
console.log(Deno.args)

deno run deno.ts 1 2 3 4

# .env
PORT=8080 deno run deno.ts 1 2 3 4 // no funciona
PORT=8080 deno run --allow-env deno.ts  1 2 3 4 // funciona

# Escritura
PORT=8080 deno run --allow-env --allow-write deno.ts  1 2 3 4
PORT=8080 deno run --allow-env --allow-write --allow-read deno.ts  1 2 3 4

## server.ts

## tests.ts
deno test test.ts

## fetch.js
deno run --allow-net fetch.js

## denon
third party

deno run --watch --allow-net fetch.ts

denon --init genera scripts.json

## volvemos server.ts
servest third party

## react.tsx

## deps.tsdeno 1.24.1 (release, x86_64-unknown-linux-gnu)
