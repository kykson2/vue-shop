<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavgationVue from "@/components/NavgationVue.vue";
</script>

<template>
  <div>
    <NavgationVue />
  </div>
  <RouterView />
</template>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
@media (prefers-color-scheme: dark) {
}
</style>
