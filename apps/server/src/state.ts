import { ChatSession } from "types";
import * as gpt4 from "@/models/gpt4";

export const sessions: ChatSession[] = [
  {
    id: "123",
    name: "Test Session",
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
    model: gpt4.makeModel(),
    env: {
      systemPrompt: "",
    },
    messageHistory: [],
  },
];
