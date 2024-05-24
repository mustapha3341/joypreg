"use server";
import { type LoginSchema } from "./schema";

export const login = async (data: LoginSchema) => {
  return await Promise.resolve(data);
};
