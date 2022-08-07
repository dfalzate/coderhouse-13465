import { assertEquals, assertStrictEquals } from "https://deno.land/std@0.123.0/testing/asserts.ts";

Deno.test({
  name: "Ejemplo test1",
  fn(): void {
    assertEquals("world", "world");
    // assertEquals("world", "world1");
    assertEquals({ hello: "world" }, { hello: "world" });
  },
});


Deno.test("isStrictlyEqual", function (): void {
  const a = {};
  const b = a;
  assertStrictEquals(a, b);
});

// This test fails
Deno.test("isNotStrictlyEqual", function (): void {
  const a = {};
  const b = {};
  assertStrictEquals(a, b);
});
