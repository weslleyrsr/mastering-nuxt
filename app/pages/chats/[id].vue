<script setup lang="ts">
import ChatWindow from "~/components/ChatWindow.vue";

const route = useRoute();
console.log('route', route.params);

const { id } = route.params;
console.log('id', id);

const { chat, messages, sendMessage } = useChat();

const typing = ref(false);

const handleSendMessage = async (message: string) => {
  typing.value = true;
  await sendMessage(message);
  typing.value = false;
};

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
  <ChatWindow :messages :chat :typing @send-message="handleSendMessage" />
</template>

<style scoped></style>
