import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { History } from "./History";
import { Sidebar } from "./Sidebar/Sidebar";

export const Chat = () => {
  return (
    <div className="flex">
      <Sidebar />

      <History />
      <ChatSession />
    </div>
  );
};

export const ChatSession = () => {
  return (
    <div>
      <div className="flex flex-col p-4 space-y-4">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

      <div className="flex space-x-2">
        <Textarea />
        <Button>Send</Button>
      </div>
    </div>
  );
};

const Message = () => {
  return (
    <div className="flex space-x-4">
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <span className="text-xs text-slate-300">1 minute ago</span>
        <span>Lorem Ipsum</span>
      </div>
    </div>
  );
};
