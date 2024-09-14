<script setup lang="ts">
import ChatBubble from '@/components/ChatBubble.vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'
import { nextTick, ref, watch } from 'vue'

interface MessageProps {
  messages: ChatMessage[]
}

const props = defineProps<MessageProps>()

const chatRef = ref<HTMLDivElement>()

watch(props, () => {
  nextTick(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: "smooth",
    });
  });
});
</script>

<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <chat-bubble
        v-for="message in messages"
        v-bind="message"
        :key="message.id"
      />
    </div>
  </div>
</template>

<style scoped></style>
