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

  async function sendMessage(content: string) {
    console.log("Sending message:", content);
    messages.value.push(createMessage("user", content));

    const data = await $fetch<ChatMessage>("/api/ai", {
      method: "POST",
      body: {
        messages: messages.value,
      },
    });

    if (data) {
      messages.value.push(data);
    }
  }

  return {
    chat,
    messages,
    sendMessage,
  };
}
