import { useMutation } from "@tanstack/react-query";
import { login } from "./action";

export const useLogin = () => {
  return useMutation({
    mutationKey: ["Login"],
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
