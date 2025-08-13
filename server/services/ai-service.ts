import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import type { LanguageModel } from "ai";

export const createOpenAIModel = (apiKey: string) => {
  const openai = createOpenAI({
    apiKey: apiKey,
  });

  return openai("gpt-4o-mini");
};

export async function generateChatResponse(
  model: LanguageModel,
  messages: unknown
) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("Invalid messages array: must be a non-empty array.");
  }

  const response = await generateText({
    model,
    messages,
  });

  return response.text.trim();
}
