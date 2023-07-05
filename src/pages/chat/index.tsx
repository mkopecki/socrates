import { Chat } from "@/types";
import { ChatView } from "./components/ChatView";

const chat: Chat = {
  id: "abc",
  environment: {
    model: {
      id: "abc",
      name: "test",
    },
    prompts: {
      system: "Test",
    },
  },
  messages: [
    {
      id: "abc",
      createdAt: 0,
      content: "Hello, world!",
      owner: "user",
    },
    {
      id: "bcg",
      createdAt: 1,
      content: "Hello, user!",
      owner: "system",
    },
  ],
};

export const ChatPage = () => {
  return (
    <>
      <ChatView chat={chat} />
    </>
  );
};
