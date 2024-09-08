import { ref } from 'vue'
import type { ChatMessage } from '@/interfaces/chat-message.interface'

const useChat = () => {
  const messages = ref<ChatMessage>([])

  const storeMessage = async (message: string): void => {
    if(message.length === 0) return

    messages.value.push({
      id: new Date().getTime(),
      message,
      itsMine: true,
      image: ''
    })

    if(!message.includes('?')) return

    const data = await fetch('https://yesno.wtf/api').then((res) => res.json())

    messages.value.push({
      id: new Date().getTime(),
      message: data.answer,
      itsMine: false,
      image: data.image
    })

  }

  return {
    messages,
    storeMessage,
  }
}


export default useChat
