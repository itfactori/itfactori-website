<script setup lang="ts">
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first();
});
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  });
}

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').order('date', 'DESC').all();
});

const { global } = useAppConfig();

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
});
</script>

<template>
  <div v-if="page">
    <!-- Hero Section -->
    <section class="border-b border-default">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div class="max-w-3xl">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5 }"
          >
            <p class="font-mono text-sm text-primary uppercase tracking-widest mb-4">Our Work</p>
          </Motion>
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 }"
          >
            <h1 class="font-mono text-4xl sm:text-5xl font-bold tracking-tight">
              {{ page.title }}
            </h1>
          </Motion>
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
          >
            <p class="mt-6 text-lg text-muted">
              {{ page.description }}
            </p>
          </Motion>
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.3 }"
          >
            <div class="mt-8 flex flex-wrap items-center gap-4">
              <UButton
                v-if="page.links?.[0]"
                v-bind="page.links[0]"
                :to="global.meetingLink"
                size="lg"
                class="font-mono"
              />
              <UButton
                v-if="page.links?.[1]"
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
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="border-b border-default">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Motion
            v-for="(project, index) in projects"
            :key="project.title"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.4, delay: index * 0.1 }"
            :in-view-options="{ once: true }"
          >
            <NuxtLink
              :to="project.url"
              class="group block border border-default hover:border-foreground transition-colors"
            >
              <!-- Image -->
              <div class="aspect-video overflow-hidden border-b border-default bg-muted">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <!-- Content -->
              <div class="p-6">
                <!-- Year -->
                <p class="font-mono text-xs text-muted uppercase tracking-widest mb-2">
                  {{ new Date(project.date).getFullYear() }}
                </p>

                <!-- Title -->
                <h2
                  class="font-mono text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
                >
                  {{ project.title }}
                </h2>

                <!-- Description -->
                <p class="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                  {{ project.description }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="font-mono text-xs px-2 py-1 border border-default text-muted"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </Motion>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="border-b border-default bg-muted/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
          :in-view-options="{ once: true }"
        >
          <h2 class="font-mono text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Have a project in mind?
          </h2>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.1 }"
          :in-view-options="{ once: true }"
        >
          <p class="text-lg text-muted mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your idea to life.
          </p>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
          :in-view-options="{ once: true }"
        >
          <UButton to="/contact" size="lg" class="font-mono"> Start a Conversation </UButton>
        </Motion>
      </div>
    </section>
  </div>
</template>
