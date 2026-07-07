<script setup lang="ts">
import { onMounted, ref } from "vue";

const logo = ref("");
const name = ref("");
const title = ref("");
const description = ref("");
const isLoading = ref(false);
const copyMessage = ref("Copy URL");

const fetchRandomLogo = async () => {
  isLoading.value = true;
  try {
    const res = await fetch("https://www.logotypes.dev/random/data");
    if (!res.ok) throw new Error("Network");
    const data = await res.json();
    // API returns an object like the example in the user's message
    logo.value = data.logo ?? data.logo ?? "";
    name.value = data.name ?? "";
    title.value = data.example_title ?? "";
    description.value = data.example_description ?? "";
  } catch (e) {
    logo.value = "";
    name.value = "Unavailable";
    title.value = "";
    description.value = "";
  } finally {
    isLoading.value = false;
  }
};

const copyUrl = async () => {
  try {
    await navigator.clipboard.writeText(logo.value);
    copyMessage.value = "Copied!";
    setTimeout(() => (copyMessage.value = "Copy URL"), 1200);
  } catch {
    copyMessage.value = "Copy failed";
  }
};

onMounted(fetchRandomLogo);
</script>

<template>
  <div class="logo-page">
    <h2>Random Logo</h2>
    <p class="muted">Generate a random brand mark for inspiration.</p>

    <div class="logo-card">
      <div class="logo-preview">
        <div v-if="isLoading" class="skeleton-card" aria-hidden="true">
          <div class="skeleton-line short"></div>
          <div class="skeleton-shape"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line"></div>
        </div>
        <img v-else-if="logo" :src="logo" :alt="name" />
        <div v-else class="placeholder">No logo</div>
      </div>

      <div class="logo-meta">
        <strong class="brand-name">{{ name }}</strong>
        <div class="brand-title">{{ title }}</div>
        <p class="brand-desc">{{ description }}</p>
      </div>

      <div class="logo-actions">
        <button @click="fetchRandomLogo" class="secondary">Another</button>
        <a :href="logo" target="_blank" rel="noreferrer" class="link-btn"
          >Open</a
        >
        <button @click="copyUrl" class="primary">{{ copyMessage }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-page {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
}
.muted {
  color: rgba(0, 0, 0, 0.45);
}
.logo-card {
  width: 100%;
  padding: 22px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  box-shadow: 0 18px 50px rgba(8, 15, 28, 0.08);
}
.logo-preview img {
  max-width: 320px;
  height: auto;
  display: block;
}
.placeholder {
  padding: 48px 20px;
  color: #667;
}

.skeleton-card {
  width: min(320px, 100%);
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 37%, #e2e8f0 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s ease infinite;
}

.skeleton-line,
.skeleton-shape {
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.35);
}

.skeleton-line {
  height: 10px;
  margin-bottom: 10px;
}

.skeleton-line.short {
  width: 45%;
  margin-bottom: 14px;
}

.skeleton-shape {
  width: 100%;
  height: 72px;
  margin: 12px 0 14px;
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.logo-meta {
  max-width: 640px;
}
.brand-name {
  display: block;
  font-size: 1.05rem;
}
.brand-title {
  color: #64748b;
  font-weight: 600;
  margin-top: 4px;
}
.brand-desc {
  color: #475569;
  margin-top: 8px;
}
.logo-actions {
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: center;
}
.logo-actions .primary {
  background: linear-gradient(135deg, #38bdf8, #6366f1);
  color: white;
  padding: 10px 18px;
  border-radius: 999px;
  border: 0;
}
.logo-actions .secondary {
  background: rgba(15, 23, 42, 0.08);
  padding: 10px 16px;
  border-radius: 999px;
  border: 0;
}
.link-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.04);
  text-decoration: none;
  color: inherit;
}

@media (max-width: 720px) {
  .logo-card {
    padding: 18px;
  }
  .logo-preview img {
    max-width: 100%;
  }
}
</style>
