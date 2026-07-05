<script setup lang="ts">
import { ref } from "vue";

const currentYear = new Date().getFullYear();
const year = ref(currentYear);

const author = ref("MrADAM02");
const href = ref("https://github.com/MrADAM02");
</script>

<template>
  <footer>
    Created by
    <a :href target="_blank" rel="noopener noreferrer"
      ><span>
        {{ author }}
      </span>
    </a>
    &copy; {{ year }}
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin: 0 auto;
  padding: 18px 0 12px;
  text-align: center;
  color: #cdd6d9;
  font-size: 0.95rem;
}

span {
  font-family: cursive;
}

a {
  color: #38bdf8;
  text-decoration: none;
}

@media (max-width: 640px) {
  footer {
    padding-bottom: 14px;
    font-size: 0.9rem;
  }
}
</style>
