// import { parse } from "https://deno.land/std@0.123.0/datetime/mod.ts";
import { parse } from "https://deno.land/std/datetime/mod.ts";
import { green, blue, bgYellow, bold } from "https://deno.land/std@0.123.0/fmt/colors.ts";

/* ----------------------------- primer ejemplo ----------------------------- */

function sayHelloDeno(name: string): string {
  return `Hello ${name}`;
}
console.log(sayHelloDeno("Coderhouse"));

/* --------------------------- primera importacion -------------------------- */

const myDate = parse("28-01-2021", "dd-mm-yyyy");
console.log(myDate);

console.log(bgYellow(bold(green("Colores Coderhouse"))));
console.log(bgYellow(bold(blue("Colores Coderhouse"))));

/* ------------------------------ Objeto global ----------------------------- */

// console.log(Deno);
// console.log(Deno.args);

const PORT = Number(Deno.env.get("PORT"));
console.log("Port=>", PORT, " Deno.args=>", Deno.args);

/* ---------------------------------- Files --------------------------------- */

await Deno.writeTextFile("text.txt", "Nuestro primer archivo con Deno");

const text = await Deno.readTextFile("text.txt");
console.log(text);
