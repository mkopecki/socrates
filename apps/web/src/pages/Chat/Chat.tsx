import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { History } from "./History";

export const Chat = () => {
  return (
    <>
      <div>
        <div className="py-2 pl-4">
          <span className="text-xl">Socrates</span>
        </div>
        <Separator />

        <div className="flex">
          <History />
          <ChatSession />
        </div>
      </div>
    </>
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
