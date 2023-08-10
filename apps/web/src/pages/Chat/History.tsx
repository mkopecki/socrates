import React from "react";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ChatSession } from "types";

export const History = () => {
  const { data } = useSessions();
  const { mutate } = useSessionCreator();

  return (
    <div className="flex flex-col w-60 p-4 space-y-8">
      <Button onClick={() => mutate()}>New Chat Session</Button>

      <div className="flex flex-col space-y-2">
        {data && data.map((session) => <HistoryElement session={session} />)}
      </div>
    </div>
  );
};

type HistoryElementProps = {
  session: ChatSession;
};

export const HistoryElement: React.FC<HistoryElementProps> = ({ session }) => {
  return (
    <div className="flex flex-col">
      <span>{session.name}</span>
      <span className="text-xs text-slate-300">{session.lastUpdatedAt}</span>
    </div>
  );
};

const useSessions = () => {
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

const useSessionCreator = () => {
  return useMutation({
    mutationFn: async () => fetch("http://127.0.0.1:3001/session", { method: "POST" }),
  });
};
