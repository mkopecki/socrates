import { Chat } from "@/types";
import { MessageView } from "./MessageView";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ChatViewProps = {
  chat: Chat;
};

export const ChatView = ({ chat }: ChatViewProps) => {
  return (
    <div className="flex flex-col space-y-4 grow">
      <div className="flex flex-col space-y-4 grow">
        {chat.messages.map((message) => (
          <MessageView message={message} />
        ))}
      </div>
      <div className="flex flex-row">
        <Textarea placeholder="Type your message here." />
        <Button>Send</Button>
      </div>
    </div>
  );
};
