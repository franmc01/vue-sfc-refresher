<!-- Source: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <chat-header></chat-header>
    <chat-messages :messages="messages"></chat-messages>
    <chat-message-box @send-message="storeMessage" ></chat-message-box>
  </div>
</template>
<script setup lang="ts">
//Components
import ChatMessages from '@/components/ChatMessages.vue'
import ChatMessageBox from '@/components/ChatMessageBox.vue'
import ChatHeader from '@/components/ChatHeader.vue'

//Composable
import useChat from '@/composables/useChat'

const { messages, storeMessage } = useChat()
</script>
