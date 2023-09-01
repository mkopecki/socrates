import { Model } from "types";
import * as gpt4 from "./gpt4";

export const modelFactories: Record<string, () => Model> = {
  "gpt4": gpt4.makeModel,
}
