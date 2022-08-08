<template>
  <div class="product-list-area">
    <div
      v-for="(list, index) in { products }.products"
      :key="index"
      class="product-item"
    >
      <div class="product-item-img-area">
        <img :src="list.image" :alt="list.title" />
      </div>
      <div class="product-item-price-area">
        <p>{{ list.title }}</p>
        <p>$ {{ list.price }}</p>
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
      if (
        item.category.includes(String(category.category)) ||
        item.category === category.category
      ) {
        if (
          props.maxList !== undefined &&
          products.value.length < props.maxList
        )
          return products.value.push(item);
        if (props.maxList === undefined) return products.value.push(item);
      }

      return 0;
    });
  });
</script>

<style scoped lang="scss">
[data-dark="dark"] {
  .product-list-area {
    .product-item {
      border: 0;
      .product-item-price-area {
        background-color: rgb(82, 82, 82);
        color: beige;
      }
    }
  }
}
.product-list-area {
  display: flex;
  height: 28.875rem;
  gap: 1.5rem;
  padding: 1.5rem 1rem;
  overflow-x: scroll;

  .product-item {
    display: flex;
    flex-direction: column;
    min-width: 13.75rem;
    width: 13.75rem;
    border: 1px;
    border-style: solid;
    border-color: (rgb(209, 209, 209));
    border-radius: 1rem;

    .product-item-img-area {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      background-color: white;
      border-radius: 1rem 1rem 0 0;
      flex: 2;

      img {
        width: 6.813rem;
      }
    }

    .product-item-price-area {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding-bottom: 2rem;
      padding-bottom: 2rem;
      background-color: (rgb(242, 241, 241));
      border-radius: 0 0 1rem 1rem;
      padding-left: 1rem;
      padding-top: 1rem;
      font-weight: 600;
      gap: 1rem;
    }
  }
}
</style>
