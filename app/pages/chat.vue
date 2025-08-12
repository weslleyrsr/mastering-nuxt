<script setup lang="ts">
import ChatWindow from "~/components/ChatWindow.vue";

const { chat, messages, sendMessage } = useChat();

useHead({
  title: chat.value.title || "Chat",
});
</script>

<template>
  <ChatWindow :messages :chat @send-message="sendMessage" />
</template>

<style scoped></style>
