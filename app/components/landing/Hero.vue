<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content';

const { global } = useAppConfig();

defineProps<{
  page: IndexCollectionItem;
}>();
</script>

<template>
  <section class="relative">
    <!-- Main Hero -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
      <div class="max-w-4xl">
        <!-- Eyebrow -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0 }"
        >
          <p class="font-mono text-sm text-muted uppercase tracking-widest mb-6">
            Software Solutions Company
          </p>
        </Motion>

        <!-- Title -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.1 }"
        >
          <h1 class="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {{ page.title }}
          </h1>
        </Motion>

        <!-- Description -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
        >
          <p class="mt-6 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
            {{ page.description }}
          </p>
        </Motion>

        <!-- CTAs -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <div class="mt-10 flex flex-wrap items-center gap-4">
            <UButton
              v-if="page.hero.links?.[0]"
              v-bind="page.hero.links[0]"
              size="lg"
              class="font-mono"
            />
            <UButton
              variant="outline"
              color="neutral"
              size="lg"
              class="font-mono"
              :to="`mailto:${global.email}`"
            >
              {{ global.email }}
            </UButton>
          </div>
        </Motion>

        <!-- Status Badge -->
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.4 }"
        >
          <div class="mt-8 inline-flex items-center gap-2 text-sm">
            <span class="relative flex size-2">
              <span
                class="absolute inline-flex size-full rounded-full opacity-75"
                :class="global.available ? 'bg-emerald-500 animate-ping' : 'bg-red-500'"
              />
              <span
                class="relative inline-flex size-2 rounded-full"
                :class="global.available ? 'bg-emerald-500' : 'bg-red-500'"
              />
            </span>
            <span class="font-mono text-muted">
              {{ global.available ? 'Available for new projects' : 'Currently at capacity' }}
            </span>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>
