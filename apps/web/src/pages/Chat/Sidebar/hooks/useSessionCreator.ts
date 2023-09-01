import { useMutation } from "@tanstack/react-query";

export const useSessionCreator = () => {
  return useMutation({
    mutationFn: async () => fetch("http://127.0.0.1:3001/session", { method: "POST" }),
  });
};
