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
    <RouterLink to="/">
      <h1 class="title">Vue Shop</h1>
    </RouterLink>

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
        <RouterLink to="/cart">
          <font-awesome-icon class="icon" icon="fa-solid fa-cart-shopping" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import SearchVue from "@/components/SearchVue.vue";
import NavSideBarVue from "@/components/NavSideBarVue.vue";

interface Isearch {
  onOff: boolean;
}

interface InavSide {
  onOff: boolean;
}

const dark = ref<boolean>(true);
const search = reactive<Isearch>({
  onOff: false,
});
const navSide = reactive<InavSide>({
  onOff: false,
});

function darkModeClickHandler(): void {
  dark.value = !dark.value;
}

function searchBarOnOffHandler(): void {
  search.onOff = !search.onOff;
}

function navSidebarOnOffHandler(): void {
  navSide.onOff = !navSide.onOff;
}

function sideBarOff(): void {
  navSide.onOff = false;
}
</script>

<style lang="scss" scoped>
.nav-area {
  position: fixed;
  top: 0;
  left: 0;
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
  z-index: 9998;
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
