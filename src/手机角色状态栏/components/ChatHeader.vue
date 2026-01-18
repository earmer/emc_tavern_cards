<template>
  <div class="chat-header">
    <button class="header-btn">
      <i class="fas fa-chevron-left"></i>
    </button>
    <div class="header-center">
      <div class="avatar">{{ characterName.charAt(0) }}</div>
      <span class="character-name">{{ characterName }}</span>
    </div>
    <button class="header-btn">
      <i class="fas fa-ellipsis-v"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  characterName: string;
}>();
</script>

<style lang="scss" scoped>
.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.header-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.2s;

  &:hover {
    background: #f3f4f6;
  }

  i {
    font-size: 16px;
  }
}

.header-center {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  justify-content: center;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
}

.character-name {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
}
</style>
