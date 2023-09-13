
import { useQuery } from "@tanstack/react-query";
import { ChatSession } from "types";

export const useSessionHistory = () => {
  return useQuery<ChatSession[]>({
    queryKey: ["sessions"],
    queryFn: async () => {
      const res = await fetch("http://127.0.0.1:3001/sessions");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
};
