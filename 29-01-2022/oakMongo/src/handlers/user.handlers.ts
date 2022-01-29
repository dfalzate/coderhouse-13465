import { Status, helpers, Bson } from "../deps.ts";
import type { User } from "../types/types.ts";
import { collection } from "../db.ts";

const users: User[] = [
  {
    name: "User1",
    email: "email@email.com",
  },
];

export async function getUser(ctx: any) {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const user = await collection.findOne({ _id: new Bson.ObjectId(userId) });
  ctx.response.body = user;
  ctx.response.status = 200;
}

export async function getUsers(ctx: any) {
  const response = await collection.find({}).toArray();
  ctx.response.body = response;
  ctx.response.status = 200;
}

export async function createUser(ctx: any) {
  const body = await ctx.request.body().value;
  if (!body) ctx.throw(Status.BadRequest, "información");
  const user = {
    _id: new Bson.ObjectId(),
    ...body,
  };
  await collection.insertOne(user);

  ctx.response.body = user;
  ctx.response.status = 201;
}

export async function updateUser(ctx: any) {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  const body = await ctx.request.body().value;
  collection.updateOne({ _id: new Bson.ObjectId(userId) }, body);
  ctx.response.body = "Updated";
  ctx.response.status = 200;
}

export function deleteUser(ctx: any) {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  collection.delete({ _id: new Bson.ObjectId(userId) });
  ctx.response.body = "Deleted";
  ctx.response.status = 200;
}
