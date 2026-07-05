<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";

const props = defineProps<{ isDarkMode: boolean }>();
const emit = defineEmits<{
  (event: "toggle-theme"): void;
}>();
const route = useRoute();

const toggleTheme = () => emit("toggle-theme");

const pageTitles: Record<string, string> = {
  "/": "Quote generator",
  "/emoji": "Emoji generator",
};

const title = computed(() => pageTitles[route.path] ?? "App generator");

const navItems = [
  { label: "Quotes", to: "/" },
  { label: "Emoji", to: "/emoji" },
];

const isActive = (path: string) => route.path === path;
</script>

<template>
  <header class="topbar">
    <div class="brand-block">
      <div class="brand-mark">✦</div>
      <div class="brand-details">
        <p class="eyebrow">Developer Playground</p>
        <h1>{{ title }}</h1>
      </div>
    </div>

    <div class="nav-group">
      <nav class="nav-links" aria-label="Primary">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="{ active: isActive(item.to) }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <button class="theme-toggle" @click="toggleTheme">
        {{ props.isDarkMode ? "☀️ Light" : "🌙 Dark" }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 28px;
  padding: 18px 24px;
  border-radius: 28px;
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(4, 10, 27, 0.25);
  backdrop-filter: blur(22px);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  font-size: 1.2rem;
  background: linear-gradient(135deg, #8b5cf6, #38bdf8);
  color: white;
  box-shadow: 0 16px 32px rgba(56, 189, 248, 0.18);
}

.brand-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.eyebrow {
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #7dd3fc;
}

h1 {
  margin: 0;
  font-size: 1.25rem;
  color: #f8fafc;
}

.nav-group {
  display: flex;
  align-items: center;
  gap: 14px;
}

.nav-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.nav-link {
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.12);
}

.nav-link.active {
  color: #0f172a;
  background: #f8fafc;
}

.theme-toggle {
  border: 0;
  padding: 11px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

@media (max-width: 720px) {
  .topbar {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-group {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-links {
    justify-content: center;
  }

  .theme-toggle {
    width: 100%;
  }
}
</style>
