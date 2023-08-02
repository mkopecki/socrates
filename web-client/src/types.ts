export type Session = {
  id: string;
  messages: Message[];
};

export type Message = {
  owner: "user" | "assistant";
  content: string;
};
