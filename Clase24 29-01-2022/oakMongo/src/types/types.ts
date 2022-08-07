import { ObjectId } from "../deps.ts";
export interface User {
  _id: ObjectId;
  name: string;
  email: string;
}
