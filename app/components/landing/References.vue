<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content';

defineProps<{
  page: IndexCollectionItem;
}>();
</script>

<template>
  <section class="border-b border-default bg-muted/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <!-- Section Header -->
      <div class="max-w-2xl mb-16">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
          :in-view-options="{ once: true }"
        >
          <p class="font-mono text-sm text-primary uppercase tracking-widest mb-4">References</p>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.1 }"
          :in-view-options="{ once: true }"
        >
          <h2 class="font-mono text-3xl sm:text-4xl font-bold tracking-tight">
            References on Demand
          </h2>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
          :in-view-options="{ once: true }"
        >
          <p class="mt-4 text-lg text-muted">
            We're proud of the work we've done with our clients. Contact us to request references
            from past projects and learn more about our track record of delivering successful
            solutions.
          </p>
        </Motion>
      </div>

      <!-- CTA Section -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.3 }"
        :in-view-options="{ once: true }"
        class="text-center"
      >
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 font-mono text-sm font-semibold px-6 py-3 border border-primary bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Request References
        </NuxtLink>
      </Motion>
    </div>
  </section>
</template>
