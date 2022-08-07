<template>
  <div class="product-list-area">
    <div
      v-for="(list, index) in { products }.products"
      :key="index"
      class="product-list"
    >
      <div
        v-if="list.category.includes(String(category.category))"
        class="product-item"
      >
        <div class="product-item-img-area">
          <img :src="list.image" :alt="list.title" />
        </div>
        <div class="product-item-price-area">
          <div>
            <p>{{ list.title }}</p>
            <p>{{ list.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import fetchData from "@/components/GetProductList";
import { ref } from "vue";

interface IproductList {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const props = defineProps({
  category: String,
  maxList: Number,
});
const category = props;

const products = ref<IproductList[]>([]);

if (products.value.length === 0)
  fetchData().then((response) => {
    response.map(function (item: IproductList) {
      if (props.maxList !== undefined && products.value.length < props.maxList)
        return products.value.push(item);

      if (props.maxList === undefined) return products.value.push(item);

      return 0;
    });
  });
</script>

<style scoped lang="scss">
.product-list-area {
  display: flex;
  margin-top: 3rem;
  overflow-x: scroll;
  gap: 1.5rem;
  padding: 1.5rem 1rem;

  .product-list {
    position: relative;
    display: flex;
    width: 13.75rem;
    height: 28.875rem;
    border: 1px;
    border-style: solid;
    border-radius: 1rem;
    border-color: rgb(225, 224, 224);
    .product-item-img-area {
      display: flex;
      width: 13.75rem;
      height: 70%;
      align-items: center;
      justify-content: center;
    }

    .product-item-price-area {
      width: 100%;
      height: 30%;
      border: 0px;
      border-style: solid;
      border-color: rgb(225, 224, 224);
      border-radius: 0 0 1rem 1rem;
      background: rgb(225, 224, 224);

      div {
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
        padding-top: 1rem;
        font-weight: 600;
        gap: 1rem;
      }
    }
  }

  img {
    width: 6.813rem;
  }
}
</style>
