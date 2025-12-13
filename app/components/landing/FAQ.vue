<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content';

const props = defineProps<{
  page: IndexCollectionItem;
}>();

const allQuestions = computed(() => {
  return (
    props.page.faq?.categories.flatMap(category =>
      category.questions.map(q => ({ ...q, category: category.title }))
    ) || []
  );
});
</script>

<template>
  <section class="border-b border-default">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <!-- Left: Header -->
        <div class="lg:col-span-1">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5 }"
            :in-view-options="{ once: true }"
          >
            <p class="font-mono text-sm text-primary uppercase tracking-widest mb-4">FAQ</p>
          </Motion>
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 }"
            :in-view-options="{ once: true }"
          >
            <h2 class="font-mono text-3xl sm:text-4xl font-bold tracking-tight">
              {{ page.faq.title }}
            </h2>
          </Motion>
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
            :in-view-options="{ once: true }"
          >
            <p class="mt-4 text-muted">
              {{ page.faq.description }}
            </p>
          </Motion>
        </div>

        <!-- Right: Questions -->
        <div class="lg:col-span-2">
          <div class="divide-y divide-default border-t border-default">
            <Motion
              v-for="(item, index) in allQuestions"
              :key="index"
              :initial="{ opacity: 0, y: 10 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.3, delay: index * 0.05 }"
              :in-view-options="{ once: true }"
            >
              <UAccordion
                :items="[item]"
                :ui="{
                  item: 'border-none',
                  trigger: 'py-6 hover:bg-transparent font-mono text-left',
                  content: 'pb-6'
                }"
              >
                <template #body="{ item: _item }">
                  <p class="text-muted leading-relaxed">
                    {{ _item.content }}
                  </p>
                </template>
              </UAccordion>
            </Motion>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
