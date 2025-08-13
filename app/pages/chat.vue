<script setup lang="ts">
import ChatWindow from "~/components/ChatWindow.vue";

const { chat, messages, sendMessage } = useChat();

const appConfig = useAppConfig();

const title = computed(() =>
  chat.value.title
    ? `${chat.value.title} - ${appConfig.title}`
    : appConfig.title
);

useHead({
  title: title,
});
</script>

<template>
  <ChatWindow :messages :chat @send-message="sendMessage" />
</template>

<style scoped></style>
