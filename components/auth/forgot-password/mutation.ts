import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "./action";

export const useForgotPassword = () => {
  return useMutation({
    mutationKey: ["Forgot Password"],
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
