import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuoteView from "@/views/QuoteView.vue";
import EmojiView from "@/views/EmojiView.vue";
import LogoView from "@/views/LogoView.vue";
import RecipeView from "@/views/RecipeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/quotes",
    name: "quotes",
    component: QuoteView,
  },
  {
    path: "/emoji",
    name: "emoji",
    component: EmojiView,
  },
  {
    path: "/logo",
    name: "logo",
    component: LogoView,
  },
  {
    path: "/recipe",
    name: "recipe",
    component: RecipeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
