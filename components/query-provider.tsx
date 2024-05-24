"use client";
import { client } from "@/lib/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
