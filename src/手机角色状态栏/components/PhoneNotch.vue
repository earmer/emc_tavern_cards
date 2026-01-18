<template>
  <div class="phone-notch">
    <div class="notch-speaker"></div>
    <div class="notch-camera"></div>
  </div>
</template>

<script setup lang="ts">
// PhoneNotch component - creates the notch at the top of the phone screen
</script>

<style lang="scss" scoped>
.phone-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 28px;
  background: #1f2937;
  border-radius: 0 0 18px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  z-index: 50;
}

.notch-speaker {
  width: 50px;
  height: 4px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
}

.notch-camera {
  width: 8px;
  height: 8px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
}
</style>
