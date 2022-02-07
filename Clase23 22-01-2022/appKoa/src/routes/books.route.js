import Router from "koa-router";

const router = new Router({
  prefix: "/books",
});

const books = [
  {
    id: 1,
    name: "Name1",
    price: 1,
    category: "Category1",
    author: "Author 1",
    description: "Description 1",
  },
  {
    id: 2,
    name: "Name2",
    price: 2,
    category: "Category2",
    author: "Author 2",
    description: "Description 2",
  },
];

router.get("/", (ctx, next) => {
  ctx.body = {
    status: "success",
    code: 200,
    message: books,
  };
  next();
});

router.get("/:id", (ctx, next) => {
  const { id } = ctx.params;
  let book = books.filter((book) => book.id.toString() === id.toString());
  if (book.length === 1) {
    ctx.body = {
      status: "success",
      code: 200,
      message: book[0],
    };
  } else {
    ctx.body = {
      status: "error",
      code: 400,
      message: "Book not found",
    };
  }
});

router.post("/", (ctx, next) => {
  const { name, price, category, author, description } = ctx.request.body;
  if (!name || !price || !category | !author || !description) {
    ctx.body = {
      status: "error",
      code: 400,
      message: "Falta un parámetro",
    };
  } else {
    books.push(ctx.request.body);
    ctx.body = {
      status: "success",
      code: 200,
      message: ctx.request.body,
    };
  }
});

export default router;
