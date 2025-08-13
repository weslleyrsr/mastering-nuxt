import {
  createOpenAIModel,
  generateChatResponse,
} from "../services/ai-service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { messages } = body;

  const id = messages.length.toString();

  const apiKey = useRuntimeConfig().openaiApiKey;

  if (!apiKey) {
    throw new Error("Missing OpenAI API key");
  }

  if (typeof apiKey !== "string") {
    throw new Error("Invalid OpenAI API key");
  }

  const model = createOpenAIModel(apiKey);

  const response = await generateChatResponse(model, messages);

  return {
    id,
    role: "assistant",
    content: response,
  };
});
