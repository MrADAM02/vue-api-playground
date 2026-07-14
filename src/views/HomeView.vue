<script setup lang="ts">
import { RouterLink } from "vue-router";

const features = [
  {
    to: "/quotes",
    icon: "💬",
    title: "Quote Generator",
    description: "Explore programming quotes and discover a calmer way to browse inspiration.",
  },
  {
    to: "/emoji",
    icon: "😀",
    title: "Emoji Generator",
    description: "Fetch a fun emoji from the API, then copy it to your clipboard.",
  },
  {
    to: "/logo",
    icon: "🖼️",
    title: "Logo Generator",
    description: "Generate a random brand mark for inspiration and keep the best ideas handy.",
  },
  {
    to: "/recipe",
    icon: "🍽️",
    title: "Recipe Generator",
    description: "Fetch a random recipe for dinner inspiration, then copy it for later.",
  },
];
</script>

<template>
  <div class="page-shell home-page">
    <div class="page-heading">
      <h2 class="page-title">Vue API Playground</h2>
      <p class="page-subtitle">
        A small playground of Vue components, each pulling from a different public API. Pick a
        page to get started.
      </p>
    </div>

    <div class="feature-grid">
      <RouterLink v-for="feature in features" :key="feature.to" :to="feature.to" class="page-card feature-card">
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 960px;
  gap: 20px;
}

.feature-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 2rem;
}

.feature-title {
  margin: 0;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.feature-description {
  margin: 0;
  color: var(--text-secondary);
}

@media (max-width: 720px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>
