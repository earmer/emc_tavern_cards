<template>
  <div class="character-status">
    <div class="status-container">
      <!-- Basic Info Section -->
      <div class="status-section basic-info">
        <div class="avatar-large">{{ character.avatar }}</div>
        <h2 class="character-name">{{ character.name }}</h2>
        <p class="character-bio">{{ character.bio }}</p>
      </div>

      <!-- Emotional State Section -->
      <div class="status-section emotional-state">
        <h3 class="section-title">情感状态</h3>

        <div class="stat-item">
          <div class="stat-label">
            <span>好感度</span>
            <span class="stat-value">{{ character.favorability }}/100</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: character.favorability + '%' }"></div>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-label">
            <span>心情</span>
            <span class="stat-value">{{ character.moodIcon }} {{ character.mood }}</span>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-label">
            <span>态度</span>
            <span class="stat-value">{{ character.attitude }}</span>
          </div>
        </div>
      </div>

      <!-- Time and Location Section -->
      <div class="status-section time-location">
        <h3 class="section-title">时空信息</h3>

        <div class="info-item">
          <i class="fas fa-clock"></i>
          <span>{{ character.gameTime }}</span>
        </div>

        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>{{ character.location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CharacterData {
  name: string;
  avatar: string;
  bio: string;
  favorability: number;
  mood: string;
  moodIcon: string;
  attitude: string;
  gameTime: string;
  location: string;
}

defineProps<{
  character: CharacterData;
}>();
</script>

<style lang="scss" scoped>
.character-status {
  flex: 1;
  overflow-y: auto;
  background: #f9fafb;
  padding: 20px;
}

.status-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.status-section {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.basic-info {
  text-align: center;
}

.avatar-large {
  width: 80px;
  height: 80px;
  font-size: 48px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.character-name {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
}

.character-bio {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
}

.stat-item {
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
}

.stat-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #4b5563;
  margin-bottom: 8px;
}

.stat-value {
  font-weight: 600;
  color: #1f2937;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #4b5563;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }

  i {
    color: #9ca3af;
    width: 16px;
  }
}
</style>
