<template>
  <div class="chat-messages">
    <div class="messages-container">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message-wrapper', message.sender === 'user' ? 'user-message-wrapper' : 'character-message-wrapper']"
      >
        <div :class="['message-bubble', message.sender === 'user' ? 'user-message' : 'character-message']">
          <div class="message-text">{{ message.text }}</div>
          <div class="message-time">{{ message.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Message {
  sender: 'user' | 'character';
  text: string;
  time: string;
}

defineProps<{
  messages: Message[];
}>();
</script>

<style lang="scss" scoped>
.chat-messages {
  flex: 1;
  overflow-y: auto;
  background: #f9fafb;
  padding: 16px;
}

.messages-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message-wrapper {
  display: flex;
  width: 100%;

  &.user-message-wrapper {
    justify-content: flex-end;
  }

  &.character-message-wrapper {
    justify-content: flex-start;
  }
}

.message-bubble {
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 18px;
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.user-message {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-bottom-right-radius: 4px;
}

.character-message {
  background: #ffffff;
  color: #1f2937;
  border-bottom-left-radius: 4px;
}

.message-text {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 4px;
}

.message-time {
  font-size: 11px;
  opacity: 0.7;
  text-align: right;
}
</style>
