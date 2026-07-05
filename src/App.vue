<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "@/components/Main.vue";

const route = useRoute();
const isDarkMode = ref(false);
const themeClass = computed(() =>
  isDarkMode.value ? "dark-theme" : "light-theme",
);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>

<template>
  <div :class="themeClass">
    <Header :isDarkMode="isDarkMode" @toggle-theme="toggleTheme" />
    <main class="app-shell">
      <RouterView v-if="route.path === '/emoji'" v-slot="{ Component }">
        <component :is="Component" :is-dark-mode="isDarkMode" />
      </RouterView>
      <Main v-else :is-dark-mode="isDarkMode" />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-shell {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0 24px;
}
.light-theme {
  background: linear-gradient(180deg, #e9f2f7 0%, #d4e5ec 100%);
  color: #0f172a;
}

.dark-theme {
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  color: #f8fafc;
}

.light-theme,
.dark-theme {
  min-height: 100vh;
  padding: 24px 16px 32px;
}
</style>
