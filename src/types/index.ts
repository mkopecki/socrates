export type Chat = {
  id: string;
  environment: Environment;
  messages: Message[];
};

export type Message = {
  id: string;
  createdAt: number;
  content: string;
  owner: "user" | "system";
};

export type Environment = {
  model: Model;
  prompts: {
    system: string;
  };
};

export type Model = {
  id: string;
  name: string;
};
