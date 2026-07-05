<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const props = defineProps<{ isDarkMode: boolean }>();
const themeClass = computed(() => (props.isDarkMode ? "dark" : "light"));

const emoji = ref("😀");
const isLoading = ref(false);
const copyMessage = ref("Copy emoji");

const decodeHtmlEntity = (entity: string) => {
  const parser = new DOMParser();
  const decoded = parser.parseFromString(entity, "text/html").documentElement
    .textContent;
  return decoded || entity;
};

const parseUnicodeEntry = (unicodeEntry: string) => {
  const codepoints = unicodeEntry
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.replace(/^U\+/i, ""));

  try {
    return String.fromCodePoint(
      ...codepoints.map((code) => parseInt(code, 16)),
    );
  } catch {
    return unicodeEntry;
  }
};

const selectEmojiValue = (item: any) => {
  if (!item) return "😀";
  if (item?.unicode?.length) return parseUnicodeEntry(item.unicode[0]);
  if (item?.htmlCode?.length) return decodeHtmlEntity(item.htmlCode[0]);
  if (item?.char) return item.char;
  return "😀";
};

const fetchRandomEmoji = async () => {
  isLoading.value = true;

  try {
    const response = await fetch("https://emojihub.yurace.pro/api/random");

    if (!response.ok) {
      throw new Error("Failed to load emoji");
    }

    const data = await response.json();
    emoji.value = selectEmojiValue(data);
  } catch {
    emoji.value = "😅";
  } finally {
    isLoading.value = false;
  }
};

const copyEmoji = async () => {
  try {
    await navigator.clipboard.writeText(emoji.value);
    copyMessage.value = "Copied!";
    window.setTimeout(() => {
      copyMessage.value = "Copy emoji";
    }, 1200);
  } catch {
    copyMessage.value = "Copy failed";
  }
};

onMounted(() => {
  fetchRandomEmoji();
});
</script>

<template>
  <div :class="[themeClass, 'emoji-page']">
    <h2>Random Emoji</h2>
    <p>Fetch a fun emoji from the API, then copy it to your clipboard.</p>

    <div class="emoji-card">
      <div class="emoji-display" v-if="isLoading">Loading...</div>
      <div class="emoji-display" v-else>{{ emoji }}</div>

      <div class="emoji-actions">
        <button @click="fetchRandomEmoji" class="secondary">
          Get another emoji
        </button>
        <button @click="copyEmoji" class="primary">{{ copyMessage }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.emoji-page {
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 28px;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 28px 80px rgba(8, 15, 28, 0.12);
  text-align: center;
}

.emoji-page.dark {
  background: rgba(6, 12, 28, 0.8);
}

.emoji-page.light {
  color: #102a43;
}

.emoji-page.dark {
  color: #f4f8fb;
}

.emoji-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  padding: 28px;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  min-width: min(320px, 90vw);
  border: 1px solid rgba(51, 65, 85, 0.08);
}

.emoji-page.dark .emoji-card {
  background: rgba(15, 23, 42, 0.92);
  border-color: rgba(255, 255, 255, 0.08);
}

.emoji-page.dark .emoji-card {
  background: rgba(15, 23, 42, 0.7);
}

.emoji-page.light {
  color: #0f172a;
}

.emoji-page.dark {
  color: #f4f8fb;
}

.emoji-page.dark .emoji-actions button.secondary {
  background: rgba(255, 255, 255, 0.12);
  color: #f4f8fb;
}

.emoji-display {
  font-size: clamp(4rem, 8vw, 6.5rem);
  min-height: 5rem;
  letter-spacing: 0.02em;
  transition: transform 0.2s ease;
}

.emoji-display:hover {
  transform: scale(1.08);
}

.emoji-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.emoji-actions button {
  flex: 1 1 auto;
  min-width: 140px;
  border: 0;
  padding: 10px 16px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.emoji-actions button:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.emoji-actions button.primary {
  background: linear-gradient(135deg, #38bdf8 0%, #6366f1 100%);
  color: white;
}

.emoji-actions button.secondary {
  background: rgba(15, 23, 42, 0.12);
  color: inherit;
}

.emoji-actions button.secondary:hover {
  background: rgba(15, 23, 42, 0.18);
}
</style>
