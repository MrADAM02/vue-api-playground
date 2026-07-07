<script setup lang="ts">
import { useRouter } from "vue-router";
import Main from "@/components/Main.vue";

const router = useRouter();
const props = defineProps<{ isDarkMode: boolean }>();
</script>

<template>
  <div class="page">
    <h2>Quote Generator</h2>
    <p>Explore programming quotes and discover fun emoji inspiration.</p>

    <Main :is-dark-mode="props.isDarkMode" />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
  color: #367aae;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  border: 0;
  padding: 10px 16px;
  border-radius: 999px;
  background: #ffffff;
  color: #406473;
  cursor: pointer;
  font-weight: 700;
}

.secondary {
  background: rgba(255, 255, 255, 0.16);
  color: #f4f8fb;
}
</style>
