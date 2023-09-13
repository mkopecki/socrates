import { log } from "logger";
import { Message, Model } from "types";
import { Configuration, OpenAIApi } from "openai";
import * as uuid from "uuid";

export const makeModel = (): Model => {
  // create OpenAI API connector
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const client = new OpenAIApi(configuration);

  // prompt the model
  const prompt = async (messageHistory: Message[]): Promise<Message[]> => {
    try {
      // transform messages into OpenAI format
      const gptMessages = messageHistory.map((message) => ({
        role: message.owner,
        content: message.content,
      }));

      // create completion
      const completion = await client.createChatCompletion({
        model: "gpt-4",
        messages: gptMessages,
      });

      // create response message object
      const choice = completion.data.choices[0];

      const response: Message = {
        id: uuid.v4(),
        createdAt: Date.now(),
        owner: "assistant",
        content: choice?.message?.content ?? "",
      };

      return [response];
    } catch (err: any) {
      log(`failed to prompt model: ${err.stack}`);
      return [];
    }
  };

  return {
    prompt,
  };
};
