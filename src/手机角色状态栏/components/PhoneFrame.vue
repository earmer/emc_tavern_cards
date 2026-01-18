<template>
  <div class="phone-frame">
    <div class="phone-screen">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// PhoneFrame component - provides the mobile phone outer frame
</script>

<style lang="scss" scoped>
.phone-frame {
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  aspect-ratio: 9 / 19.5;
  background: #1f2937;
  border-radius: 36px;
  padding: 12px;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  position: relative;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
