<template>
  <h1 class="title">액세서리</h1>
  <ProductListVueVue :category="category" :max-list="props.maxList" />
</template>

<script setup lang="ts">
import ProductListVueVue from "@/components/ProductListVue.vue";
import { ref } from "vue";

const props = defineProps({
  maxList: Number,
});

const category = ref<string>("jewelery");
</script>

<style scoped lang="scss">
.title {
  text-align: center;
  margin-top: 5rem;
  font-size: 2em;
}
</style>
