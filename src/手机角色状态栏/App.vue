<template>
  <div class="w-full flex justify-center items-center p-4">
    <PhoneFrame>
      <PhoneNotch />
      <StatusBar />

      <div class="phone-content">
        <!-- Chat View -->
        <Transition name="fade" mode="out-in">
          <div v-if="currentView === 'chat'" key="chat" class="view-container">
            <ChatHeader :character-name="characterData.name" />
            <ChatMessages :messages="chatMessages" />
          </div>

          <!-- Status View -->
          <div v-else key="status" class="view-container">
            <div class="status-header">
              <button class="back-btn" @click="currentView = 'chat'">
                <i class="fas fa-chevron-left"></i>
              </button>
              <span class="header-title">角色状态喵～</span>
              <div class="placeholder"></div>
            </div>
            <CharacterStatus :character="characterData" />
          </div>
        </Transition>
      </div>

      <!-- Bottom Navigation -->
      <div class="bottom-nav">
        <button :class="['nav-btn', { active: currentView === 'chat' }]" @click="currentView = 'chat'">
          <i class="fas fa-comments"></i>
          <span>聊聊天</span>
        </button>
        <button :class="['nav-btn', { active: currentView === 'status' }]" @click="currentView = 'status'">
          <i class="fas fa-user"></i>
          <span>看看状态</span>
        </button>
      </div>
    </PhoneFrame>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CharacterStatus from './components/CharacterStatus.vue';
import ChatHeader from './components/ChatHeader.vue';
import ChatMessages from './components/ChatMessages.vue';
import PhoneFrame from './components/PhoneFrame.vue';
import PhoneNotch from './components/PhoneNotch.vue';
import StatusBar from './components/StatusBar.vue';

// View state: 'chat' or 'status'
const currentView = ref<'chat' | 'status'>('chat');

// Static character data
const characterData = {
  name: '艾莉娅',
  avatar: '👧',
  bio: '温柔善良的魔法学院学生',
  favorability: 75,
  mood: '愉快',
  moodIcon: '😊',
  attitude: '友好且信任',
  gameTime: '2024年3月15日 14:30',
  location: '咖啡厅',
};

// Static chat messages
const chatMessages = [
  { sender: 'character', text: '你好呀，今天过得怎么样？', time: '14:25' },
  { sender: 'user', text: '还不错，刚刚完成了一个任务', time: '14:26' },
  { sender: 'character', text: '太棒了！我就知道你可以的~', time: '14:27' },
  { sender: 'user', text: '谢谢你的鼓励', time: '14:28' },
  { sender: 'character', text: '要不要一起去庆祝一下？', time: '14:29' },
];
</script>

<style lang="scss" scoped>
.phone-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.view-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.status-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.back-btn {
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
}

.header-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
}

.placeholder {
  width: 32px;
}

.bottom-nav {
  display: flex;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  padding: 8px 0;
}

.nav-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: transparent;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #6b7280;
  }

  &.active {
    color: #667eea;
  }

  i {
    font-size: 20px;
  }

  span {
    font-size: 12px;
  }
}
</style>
