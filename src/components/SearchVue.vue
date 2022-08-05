<template>
  <div>
    <transition name="show">
      <input
        v-if="searchOnOff"
        class="searchBar"
        type="text"
        placeholder="검색"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  searchOnOff: Boolean,
});
</script>

<style lang="scss" scoped>
.searchBar {
  position: fixed;
  width: 100%;
  height: 30px;
  background-color: #797979;
  top: 0;
  left: 0;
  margin-top: 64px;
  color: #dfdfdf;
  font-size: large;
  padding: 12px 20px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #dfdfdf;
  opacity: 1; /* Firefox */
}

.show-enter-from {
  transform: translateY(-250%);
}

.show-enter-active,
.show-leave-active {
  transition: transform 0.3s;
}
.show-enter, .show-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-250%);
}
</style>
