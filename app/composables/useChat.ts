import type { Chat, ChatMessage } from "~/types";
import { MOCK_CHAT } from "./mockData";

export default function useChat() {
  const chat = ref<Chat>(MOCK_CHAT);
  const messages = computed<ChatMessage[]>(() => chat.value.messages);

  function createMessage(
    role: "user" | "assistant",
    content: string
  ): ChatMessage {
    return {
      id: crypto.randomUUID(),
      role,
      content,
    };
  }

  function sendMessage(content: string): void {
    console.log("Sending message:", content);
    messages.value.push(createMessage("user", content));

    // Simulate assistant response
    setTimeout(() => {
      const responseContent = `Response to: ${content}`;
      messages.value.push(createMessage("assistant", responseContent));
    }, 1000);
  }

  return {
    chat,
    messages,
    sendMessage,
  };
}
