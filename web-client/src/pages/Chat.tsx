import { useStore } from "@/state/store";
import { Message, Session } from "@/types";
import React from "react";

export const Chat = () => {
  return (
    <div>
      <div className="flex justify-space">
        <span>socrates</span>
      </div>
      <ChatTab />
    </div>
  );
};

export const ChatTab: React.FC = () => {
  const { session, createSession } = useSession();

  if (!session) {
    return (
      <div>
        <button onClick={createSession}>create new session</button>
      </div>
    );
  }

  return (
    <div>
      {session.id}
      {session.messages.map((message) => (
        <MessageView message={message} />
      ))}
    </div>
  );
};

const MessageView = ({ message }) => {
  return (
    <div className="flex flex-col">
      <span>{message.owner}</span>
      <span>{message.content}</span>
    </div>
  );
};

const useSession = () => {
  const session = useStore((state) => state.session);
  const setSession = useStore((state) => state.setSession);

  const createSession = () => {
    const session: Session = {
      id: "demo-session",
      messages: [
        { owner: "user", content: "Hey. How are you?" },
        { owner: "assistant", content: "I'm good. Thanks for asking." },
        { owner: "user", content: "How old are you?" },
      ],
    };
    setSession(session);
  };

  return {
    session,
    createSession,
  };
};
