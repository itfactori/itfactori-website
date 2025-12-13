<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content';

// Import SVG icons
import appDevIcon from '~/assets/svgs/app_dev.svg';
import webIcon from '~/assets/svgs/web.svg';
import backendIcon from '~/assets/svgs/backend.svg';
import aiIcon from '~/assets/svgs/ai.svg';
import cloudIcon from '~/assets/svgs/cloud.svg';
import devopsIcon from '~/assets/svgs/devops.svg';

defineProps<{
  page: IndexCollectionItem;
}>();

const services = [
  {
    icon: appDevIcon,
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications built with Flutter, React Native, and native iOS/Android.',
    technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift']
  },
  {
    icon: webIcon,
    title: 'Web Development',
    description:
      'Modern, responsive web applications using cutting-edge frameworks and best practices.',
    technologies: ['Vue.js', 'Nuxt', 'React', 'Next.js']
  },
  {
    icon: backendIcon,
    title: 'Backend Systems',
    description:
      'Scalable, secure backend architectures with RESTful APIs and real-time capabilities.',
    technologies: ['Node.js', 'NestJS', 'Go', 'PostgreSQL']
  },
  {
    icon: aiIcon,
    title: 'AI & Automation',
    description: 'Intelligent solutions using LLMs, agentic workflows, and custom AI integrations.',
    technologies: ['LangChain', 'LangGraph', 'OpenAI', 'Python']
  },
  {
    icon: cloudIcon,
    title: 'Cloud Infrastructure',
    description: 'Cloud-native deployments with automated scaling, monitoring, and security.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    icon: devopsIcon,
    title: 'DevOps & CI/CD',
    description: 'Streamlined development pipelines, automated testing, and continuous deployment.',
    technologies: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Nginx']
  }
];
</script>

<template>
  <section class="border-b border-default">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <!-- Section Header -->
      <div class="max-w-2xl mb-16">
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
          :in-view-options="{ once: true }"
        >
          <p class="font-mono text-sm text-primary uppercase tracking-widest mb-4">What We Do</p>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.1 }"
          :in-view-options="{ once: true }"
        >
          <h2 class="font-mono text-3xl sm:text-4xl font-bold tracking-tight">
            End-to-End Software Services
          </h2>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: 0.2 }"
          :in-view-options="{ once: true }"
        >
          <p class="mt-4 text-lg text-muted">
            From concept to deployment, we handle every layer of your software stack.
          </p>
        </Motion>
      </div>

      <!-- Services Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-default border border-default"
      >
        <Motion
          v-for="(service, index) in services"
          :key="service.title"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.4, delay: index * 0.1 }"
          :in-view-options="{ once: true }"
          class="bg-default p-8 hover:bg-muted/50 transition-colors group"
        >
          <!-- Icon -->
          <img
            :src="service.icon"
            :alt="service.title"
            class="service-icon size-10 mb-6 opacity-70 group-hover:opacity-100 transition-opacity"
          />

          <!-- Title -->
          <h3 class="font-mono text-lg font-semibold mb-3">
            {{ service.title }}
          </h3>

          <!-- Description -->
          <p class="text-sm text-muted leading-relaxed mb-6">
            {{ service.description }}
          </p>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in service.technologies"
              :key="tech"
              class="font-mono text-xs px-2 py-1 border border-default text-muted"
            >
              {{ tech }}
            </span>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-icon {
  filter: invert(0);
}

.dark .service-icon {
  filter: invert(1);
}
</style>
