export type Model = {
  prompt: (messageHistory: Message[]) => Promise<Message[]>;
};

export type ModelEnvironment = {
  systemPrompt: string;
};

export type ChatSession = {
  id: string;

  name: string;

  createdAt: number;
  lastUpdatedAt: number;

  model: Model;
  env: ModelEnvironment;

  messageHistory: Message[];
};

export type Message = {
  id: string;
  createdAt: number;

  owner: "system" | "assistant" | "user";

  content: string;
};

// API Definitions
export type CreateMessageRequestBody = {
  sessionId: string;
  content: string;
};
