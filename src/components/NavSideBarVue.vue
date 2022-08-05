<template>
  <div>
    <div>
      <transition name="show">
        <div v-if="navSideBarOnOff" class="navSideBar">side</div>
      </transition>
    </div>
    <transition name="navOff">
      <label
        v-if="navSideBarOnOff"
        role="presentation"
        class="sideBarOff"
        @click="$emit('sideBarOff', navSideBarOnOff)"
      ></label>
    </transition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  navSideBarOnOff: Boolean,
});

defineEmits({
  sideBarOff: Boolean,
});
</script>

<style lang="scss" scoped>
.navSideBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  height: 100%;
  background-color: rgb(58, 65, 68);
  z-index: 9999;
}

.sideBarOff {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
}

.show-enter-from {
  transform: translateX(-150%);
}

.show-enter-active,
.show-leave-active {
  transition: transform 0.6s;
}
.show-enter, .show-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-150%);
}

.navOff-enter-from {
  opacity: 0;
}

.navOff-enter-active,
.navOff-leave-active {
  transition: opacity 0.6s;
}
.navOff-enter, .navOff-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
