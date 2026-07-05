<script lang="ts" setup>
import { computed, ref } from "vue";
import { programmingQuotes } from "@/data/programmingQuotes";

const props = defineProps<{ isDarkMode: boolean }>();

const initialQuote = programmingQuotes[0] ?? {
  quote: "Keep coding.",
  author: "Developer",
};
const quote = ref(initialQuote.quote);
const author = ref(initialQuote.author);
const isTransitioning = ref(false);
const copied = ref(false);

const themeClass = computed(() => (props.isDarkMode ? "dark" : "light"));

const generateQuote = () => {
  isTransitioning.value = true;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * programmingQuotes.length);
    const selectedQuote = programmingQuotes[randomIndex] ?? initialQuote;

    quote.value = selectedQuote.quote;
    author.value = selectedQuote.author;
    isTransitioning.value = false;
  }, 180);
};

const copyQuote = async () => {
  const textToCopy = `"${quote.value}" - ${author.value}`;

  try {
    await navigator.clipboard.writeText(textToCopy);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 1500);
  } catch {
    copied.value = false;
  }
};

generateQuote();
</script>

<template>
  <main :class="themeClass">
    <div class="top-row">
      <div class="badge">Developer Inspiration</div>
    </div>
    <section>
      <p :class="{ transitioning: isTransitioning }">{{ quote }}</p>
      <span>{{ author }}</span>
    </section>
    <div class="footer-row">
      <div class="actions">
        <button class="secondary-btn" @click="copyQuote">
          {{ copied ? "Copied!" : "Copy" }}
        </button>
        <button @click="generateQuote">Generate</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  max-width: 760px;
  border-radius: 32px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  box-shadow: 0 28px 80px rgba(8, 15, 28, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  transition:
    background 0.3s ease,
    color 0.3s ease,
    border 0.3s ease;
}

main.light {
  background: rgba(255, 255, 255, 0.85);
  color: #102a43;
}

main.dark {
  background: rgba(8, 18, 35, 0.86);
  color: #f8fafc;
}

.top-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.badge {
  background: linear-gradient(135deg, #38bdf8, #818cf8);
  color: white;
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.secondary-btn {
  border: 0;
  padding: 12px 18px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.15);
  color: inherit;
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 26px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);
  min-height: 180px;
  justify-content: center;
}

main.dark section {
  background: rgba(15, 23, 42, 0.7);
}

p {
  font-weight: 700;
  font-style: italic;
  font-size: clamp(1.15rem, 2vw, 1.55rem);
  line-height: 1.7;
  text-align: center;
  color: inherit;
  opacity: 1;
  transition: opacity 0.2s ease;
}

p.transitioning {
  opacity: 0.4;
}

p::before {
  content: '"';
}

p::after {
  content: '"';
}

span {
  align-self: end;
  color: #406473;
  font-weight: 700;
  font-size: 0.95rem;
}

main.dark span {
  color: #9dc4d0;
}

span::before {
  content: "- ";
}

.footer-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: #56717a;
}

small {
  font-size: 0.9rem;
}

.actions {
  display: flex;
  gap: 10px;
}

.secondary-btn {
  background: rgba(64, 100, 115, 0.16);
  color: inherit;
}

button {
  background: linear-gradient(135deg, #38bdf8 0%, #6366f1 100%);
  color: white;
  border: 0;
  padding: 14px 22px;
  font-size: 1rem;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.01em;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    opacity 0.2s ease;
  box-shadow: 0 16px 34px rgba(56, 189, 248, 0.22);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 36px rgba(56, 189, 248, 0.28);
}

main.dark .theme-btn,
main.dark .secondary-btn {
  background: rgba(255, 255, 255, 0.12);
}

@media (max-width: 720px) {
  main {
    padding: 24px;
    border-radius: 24px;
  }

  .top-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-row {
    flex-direction: column;
    align-items: stretch;
  }

  .actions {
    width: 100%;
    flex-wrap: wrap;
  }

  .actions button {
    flex: 1 1 140px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>
