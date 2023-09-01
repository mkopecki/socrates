import { useQuery } from "@tanstack/react-query";
import { ChatSession } from "types";

export const useSession = (sessionId: string) => {
  return useQuery<ChatSession>({
    queryKey: ["session", sessionId],
    queryFn: async () => {
      const res = await fetch(`http://127.0.0.1:3001/v1/session/${sessionId}`);
      const data = await res.json();
      return data;
    },
  });
};
