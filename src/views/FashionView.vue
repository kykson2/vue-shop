<template>
  <div>패션</div>
  <ProductListVueVue :category="category" :max-list="props.maxList" />
</template>

<script setup lang="ts">
import ProductListVueVue from "@/components/ProductListVue.vue";
import { ref } from "vue";

const props = defineProps({
  maxList: Number,
});

const category = ref<string>("clothing");
</script>

<style scoped></style>
