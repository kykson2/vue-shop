<template>
  <div>
    <swiper
      class="swiper"
      :modules="modules"
      :pagination="{ clickable: true, dynamicBullets: true }"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
    >
      <swiper-slide v-for="imgItem in imgList" :key="imgItem.alt" class="slide">
        <img :src="imgItem.src" :alt="imgItem.alt" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Pagination, Autoplay } from "Swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// import swiper module styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { defineComponent } from "vue";
// more module style...

const imgList = [
  { src: "src/image/img_shop_fashion.jpeg", alt: "fashion" },
  { src: "src/image/img_shop_grocery.jpeg", alt: "grocery" },
  { src: "src/image/img_shop_digital.jpeg", alt: "digital" },
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
  max-height: 13rem;
  height: 100%;
  margin-top: 64px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.swiper-pagination {
  margin-top: 10px;
}
</style>
