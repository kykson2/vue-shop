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
      <button @click="storeThema.changeThemaMode">
        <font-awesome-icon
          v-if="storeThema.thema === false"
          class="icon"
          icon="fa-solid fa-moon"
        />
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
import { reactive } from "vue";
import SearchVue from "@/components/SearchVue.vue";
import NavSideBarVue from "@/components/NavSideBarVue.vue";
import { useThemaStore } from "@/store/thema";

interface Isearch {
  onOff: boolean;
}

interface InavSide {
  onOff: boolean;
}

const storeThema = useThemaStore();

const search = reactive<Isearch>({
  onOff: false,
});
const navSide = reactive<InavSide>({
  onOff: false,
});

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
[data-dark="dark"] {
  .nav-area {
    background-color: #292929;
    .title {
      color: white;
    }

    .icon {
      color: white;
    }
    .dark {
      color: white;
    }
  }
}

.nav-area {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 64px;
  margin: 0;
  padding: 0;
  background-color: white;
  color: black;
  text-align: center;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  .title {
    font-size: large;
    color: black;
  }
  .nav-side-bar-toggle {
    display: flex;
    width: 40px;
    height: 48px;
    align-items: center;
    justify-content: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
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
    color: black;
  }
  .dark {
    color: black;
  }
}
</style>
