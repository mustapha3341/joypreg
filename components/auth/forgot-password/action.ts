"use server";
import { type ForgotPasswordSchema } from "./schema";

export const forgotPassword = async (value: ForgotPasswordSchema) => {
  return await Promise.resolve(value);
};
