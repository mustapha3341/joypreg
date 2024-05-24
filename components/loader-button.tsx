"use client";
import { Button, type ButtonProps } from "./ui/button";
import { Loader2Icon } from "lucide-react";

interface LoaderButttonProps extends ButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export const LoaderButtton = (props: LoaderButttonProps) => {
  const { isLoading, children, ...rest } = props;
  return (
    <Button {...rest} disabled={isLoading} aria-disabled={isLoading}>
      {children}
      {isLoading ? (
        <Loader2Icon className="animate-spin duration-300 ml-2" size={18} />
      ) : null}
    </Button>
  );
};
