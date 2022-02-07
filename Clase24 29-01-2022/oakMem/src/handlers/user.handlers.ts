import { Context, helpers } from "../deps.ts";
import type { User } from "../types/types.ts";

const users: User[] = [
  {
    name: "User1",
    email: "email@email.com",
    id: "ea4e335f-33e1-4bcf-a90a-333535afd352",
  },
];

export function getUser(ctx: Context) {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  let user: User | null = null;
  users.map((_user: User) => {
    if (_user.id.toString() === userId.toString()) user = _user;
  });
  try {
    if (user) {
      ctx.response.body = JSON.stringify(user);
      ctx.response.status = 200;
    }
  } catch (error) {
    console.log(error);
  }
}

export function getUsers(ctx: Context) {
  ctx.response.body = users;
  ctx.response.status = 200;
}

export async function createUser(ctx: Context) {
  const body: User = await ctx.request.body().value;
  body.id = crypto.randomUUID();
  users.push(body);
  ctx.response.body = body;
  ctx.response.status = 201;
}

export function updateUser(ctx: Context) {}

export function deleteUser(ctx: Context) {}
