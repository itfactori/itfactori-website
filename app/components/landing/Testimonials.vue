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
          <p class="font-mono text-sm text-primary uppercase tracking-widest mb-4">Testimonials</p>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.1 }"
          :in-view-options="{ once: true }"
        >
          <h2 class="font-mono text-3xl sm:text-4xl font-bold tracking-tight">
            What Our Clients Say
          </h2>
        </Motion>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Motion
          v-for="(testimonial, index) in page.testimonials"
          :key="index"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.4, delay: index * 0.1 }"
          :in-view-options="{ once: true }"
          class="border border-default bg-default p-8"
        >
          <!-- Quote -->
          <blockquote class="text-foreground leading-relaxed mb-8">
            "{{ testimonial.quote }}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <img
              v-if="testimonial.author.avatar?.src"
              :src="testimonial.author.avatar.src"
              :alt="testimonial.author.name"
              class="size-12 object-cover border border-default"
            />
            <div
              v-else
              class="size-12 bg-muted border border-default flex items-center justify-center"
            >
              <span class="font-mono text-sm text-muted">{{
                testimonial.author.name.charAt(0)
              }}</span>
            </div>
            <div>
              <p class="font-mono font-semibold text-sm">{{ testimonial.author.name }}</p>
              <p class="text-sm text-muted">{{ testimonial.author.description }}</p>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>
