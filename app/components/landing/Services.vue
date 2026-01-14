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

const expandedServices = ref<Set<string>>(new Set());

const TRUNCATE_LENGTH = 150;

function toggleExpand(serviceTitle: string) {
  if (expandedServices.value.has(serviceTitle)) {
    expandedServices.value.delete(serviceTitle);
  } else {
    expandedServices.value.add(serviceTitle);
  }
}

function isExpanded(serviceTitle: string): boolean {
  return expandedServices.value.has(serviceTitle);
}

function getTruncatedDescription(description: string): string {
  if (description.length <= TRUNCATE_LENGTH) {
    return description;
  }
  return description.substring(0, TRUNCATE_LENGTH) + '...';
}

function getTruncatedBullets(bullets: string[]): string[] {
  return bullets.slice(0, 2);
}

function shouldShowExpandButton(service: any): boolean {
  if (service.bullets) {
    return service.bullets.length > 2;
  }
  return service.description.length > TRUNCATE_LENGTH;
}

const services = [
  {
    icon: backendIcon,
    title: 'Regulatory Consultancy',
    description:
      'Consultancy Services (Government Affairs, B2G, B2B & B2C) - We help navigate complex regulatory landscapes & disputes with an aim to ensure that our solutions meet all necessary requirements and promote smooth business development. Expert guidance on compliance, regulatory frameworks, and industry standards. Policy formulation and regulatory compliance, with a strong focus on aligning public-sector objectives with private-sector innovation and operational needs. Policy Development & Stakeholder Engagement by playing a key role in shaping forward-looking, business-conducive regulatory policies particularly in Cyber Security, Information Technology, Digital Services, and Telecommunications. Facilitate productive collaboration between industry stakeholders and government/regulatory bodies, including regulators, Law Enforcement Agencies (LEAs), Ministry of Interior (MOI), Ministry of IT & Telecom (MoIT), and Pakistan Telecommunication Authority (PTA). Conflict/Dispute Resolution, Consensus Building to resolve complex inter-organizational conflicts and deal breaking through negotiation, mediation, and stakeholder alignment.',
    bullets: [
      'Consultancy Services (Government Affairs, B2G, B2B & B2C) - We help navigate complex regulatory landscapes & disputes with an aim to ensure that our solutions meet all necessary requirements and promote smooth business development.',
      'Expert guidance on compliance, regulatory frameworks, and industry standards. Policy formulation and regulatory compliance, with a strong focus on aligning public-sector objectives with private-sector innovation and operational needs.',
      'Policy Development & Stakeholder Engagement by playing a key role in shaping forward-looking, business-conducive regulatory policies particularly in Cyber Security, Information Technology, Digital Services, and Telecommunications.',
      'Facilitate productive collaboration between industry stakeholders and government/regulatory bodies, including regulators, Law Enforcement Agencies (LEAs), Ministry of Interior (MOI), Ministry of IT & Telecom (MoIT), and Pakistan Telecommunication Authority (PTA).',
      'Conflict/Dispute Resolution, Consensus Building to resolve complex inter-organizational conflicts and deal breaking through negotiation, mediation, and stakeholder alignment.'
    ],
    technologies: ['Government Affairs', 'B2G', 'B2B', 'B2C']
  },
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
          <div class="mb-6">
            <div class="description-container">
              <Transition name="expand">
                <div
                  v-if="service.bullets"
                  :key="`${service.title}-${isExpanded(service.title)}`"
                  class="transition-all duration-300 ease-in-out"
                >
                  <ul class="text-sm text-muted leading-relaxed space-y-2.5 pl-5">
                    <li
                      v-for="(bullet, idx) in isExpanded(service.title)
                        ? service.bullets
                        : getTruncatedBullets(service.bullets)"
                      :key="idx"
                      class="relative before:content-['•'] before:absolute before:-left-4 before:text-primary"
                    >
                      {{ bullet }}
                    </li>
                  </ul>
                </div>
                <p
                  v-else
                  class="text-sm text-muted leading-relaxed transition-all duration-300 ease-in-out"
                >
                  {{
                    isExpanded(service.title)
                      ? service.description
                      : getTruncatedDescription(service.description)
                  }}
                </p>
              </Transition>
            </div>
            <button
              v-if="shouldShowExpandButton(service)"
              @click="toggleExpand(service.title)"
              class="mt-2 font-mono text-xs text-primary hover:text-primary/80 transition-colors underline cursor-pointer"
            >
              {{ isExpanded(service.title) ? 'See less' : 'See more' }}
            </button>
          </div>

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

.expand-enter-active {
  transition: all 0.3s ease-out;
  overflow: hidden;
}

.expand-leave-active {
  transition: all 0.3s ease-in;
  overflow: hidden;
}

.expand-enter-from {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.expand-enter-to {
  opacity: 1;
  max-height: 1000px;
  transform: translateY(0);
}

.expand-leave-from {
  opacity: 1;
  max-height: 1000px;
  transform: translateY(0);
}

.expand-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}
</style>
