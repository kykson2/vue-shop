<template>
  <div>
    <!-- carousel -->
    <swiper
      class="swiper"
      :modules="modules"
      :pagination="{ clickable: true, dynamicBullets: true }"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
    >
      <swiper-slide v-for="imgItem in imgList" :key="imgItem.alt" class="slide">
        <img :src="imgItem.src" :alt="imgItem.title" />
        <div class="advertisement">
          <p class="imgTitle">{{ imgItem.title }}</p>
          <p class="imgContent">{{ imgItem.content }}</p>
          <RouterLink :to="imgItem.path" class="shortcutarea">
            <p class="shortcut">
              바로가기
              <font-awesome-icon icon="fa-solid fa-arrow-right" class="icon" />
            </p>
          </RouterLink>
        </div>
      </swiper-slide>
    </swiper>

    <!-- 패션페이지 -->
    <fashion-view :max-list="maxList" />
    <accessory-view :max-list="maxList" />
    <digital-view :max-list="maxList" />
  </div>
</template>

<script setup lang="ts">
import { Pagination, Autoplay } from "Swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import FashionView from "@/views/FashionView.vue";
import AccessoryView from "@/views/AccessoryView.vue";
import DigitalView from "@/views/DigitalView.vue";

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { defineComponent, ref } from "vue";
// more module style...

const maxList = ref<number>(4);

const imgList = [
  {
    src: "src/image/img_shop_fashion.jpeg",
    alt: "fashion",
    title: "물빠진 청바지!",
    content: "이제 막 도착한 패션 청바지를 구경해 보세요.",
    path: "/fashion",
  },
  {
    src: "src/image/img_shop_grocery.jpeg",
    alt: "grocery",
    title: "신선한 식품",
    content: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
    path: "",
  },
  {
    src: "src/image/img_shop_digital.jpeg",
    alt: "digital",
    title: "신속한 업무처리",
    content: "다양한 디지털 상품을 둘러보세요.",
    path: "/digital",
  },
];

defineComponent({
  Swiper,
  SwiperSlide,
});
const modules = [Pagination, Autoplay];
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
  width: 100%;
  max-height: 14.5rem;
  height: 100%;
  margin-top: 64px;

  .advertisement {
    position: absolute;
    color: white;
    top: 0;
    left: 0;
    margin-top: 4.8rem;
    margin-left: 1rem;
    text-align: left;
  }
  .shortcut {
    display: flex;
    width: 6rem;
    height: 2rem;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
    color: rgb(215, 215, 215);
    font-size: smaller;
    font-weight: 500;
    background-color: rgb(41, 41, 41);
    border-radius: 0.4rem;
    .icon {
      margin-left: 0.4rem;
    }
  }
  .imgTitle {
    font-size: x-large;
    font-weight: 600;
  }
  .imgContent {
    margin-top: 0.5rem;
    color: white;
    font-weight: 400;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
