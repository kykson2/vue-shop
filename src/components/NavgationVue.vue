<template>
  <div class="nav-area">
    <div class="nav-side-bar-toggle">
      <button @click="navSidebarOnOffHandler">
        <font-awesome-icon class="icon toggle" icon="fa-solid fa-bars" />
      </button>
      <NavSideBarVue
        :nav-side-bar-on-off="navSide.onOff"
        @side-bar-off="sideBarOff"
      />
    </div>
    <h1 class="title">Vue Shop</h1>

    <div class="nav-right-item">
      <button @click="darkModeClickHandler">
        <font-awesome-icon v-if="dark" class="icon" icon="fa-solid fa-moon" />
        <font-awesome-icon v-else class="icon dark" icon="fa-solid fa-sun" />
      </button>
      <div>
        <button @click="searchBarOnOffHandler">
          <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
        </button>
        <SearchVue :search-on-off="search.onOff" />
      </div>
      <div>
        <font-awesome-icon class="icon" icon="fa-solid fa-cart-shopping" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import SearchVue from "@/components/SearchVue.vue";
import NavSideBarVue from "@/components/NavSideBarVue.vue";

const dark = ref<boolean>(true);
const search = reactive({
  onOff: false,
});
const navSide = reactive({
  onOff: false,
});

function darkModeClickHandler() {
  dark.value = !dark.value;
}

function searchBarOnOffHandler() {
  search.onOff = !search.onOff;
}

function navSidebarOnOffHandler() {
  navSide.onOff = !navSide.onOff;
}

function sideBarOff() {
  navSide.onOff = false;
}
</script>

<style lang="scss" scoped>
.nav-area {
  display: flex;
  width: 100%;
  height: 64px;
  margin: 0;
  padding: 0;
  background-color: #292929;
  color: white;
  text-align: center;
  align-items: center;
  justify-content: center;

  .title {
    font-size: large;
  }
  .nav-side-bar-toggle {
    display: flex;
    width: 40px;
    height: 48px;
    align-items: center;
    justify-content: center;

    .toggle {
      align-items: center;
      justify-content: center;
    }
  }

  .nav-left-item {
    display: flex;
    flex: none;
  }
  .nav-right-item {
    display: flex;
    margin-left: auto;
    margin-right: 25px;
    height: 100%;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
  .icon {
    width: 23px;
    height: 23px;
  }
  .dark {
    color: white;
  }
}
</style>
