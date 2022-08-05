import { createRouter, createWebHistory } from "vue-router";

import AccessoryView from "@/views/AccessoryView.vue";
import DigitalView from "@/views/DigitalView.vue";
import FashionView from "@/views/FashionView.vue";
import MainView from "@/views/MainView.vue";
import CartView from "@/views/CartView.vue";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: MainView,
  },
  {
    path: "/fashion",
    name: "fashionPage",
    component: FashionView,
  },
  {
    path: "/accesory",
    name: "accesoryPage",
    component: AccessoryView,
  },
  {
    path: "/digital",
    name: "digitalPage",
    component: DigitalView,
  },
  {
    path: "/cart",
    name: "cartPage",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
