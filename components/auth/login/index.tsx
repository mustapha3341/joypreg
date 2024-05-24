"use client";

import {
  Form,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/password-input";
import { LoaderButtton } from "@/components/loader-button";

import { useForm } from "react-hook-form";
import type { DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "./schema";
import { useLogin } from "./mutation";

export const LoginForm = () => {
  const resolver = zodResolver(loginSchema);
  const defaultValues: DefaultValues<LoginSchema> = { email: "", password: "" };
  const form = useForm<LoginSchema>({ resolver, defaultValues });
  const { mutate, isPending } = useLogin();

  const onSubmit = (data: LoginSchema) => {
    mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input {...field} placeholder="user@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput {...field} placeholder="*********" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoaderButtton isLoading={isPending} className="mt-8">
          {isPending ? "Signing in..." : "Sign In"}
        </LoaderButtton>
      </form>
    </Form>
  );
};
