<template>
  <div class="nav-area">
    <div id="nav-side-bar-toggle">
      <font-awesome-icon id="toggle" icon="fa-solid fa-bars" />
    </div>
    <h1 id="title">Vue Shop</h1>

    <div class="nav-right-item">
      <div>darkMode</div>
      <div>search</div>
      <div>cart</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#title {
  font-size: large;
}

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

  #nav-side-bar-toggle {
    display: flex;
    width: 40px;
    height: 48px;
    align-items: center;
    justify-content: center;

    #toggle {
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
    margin-right: 20px;
    height: 48px;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
}
</style>
