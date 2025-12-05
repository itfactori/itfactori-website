<script setup lang="ts">
// Row 1: Frontend, Backend & Languages
const technologiesRow1 = [
  // Frontend Frameworks
  { name: 'Vue.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg', url: 'https://vuejs.org/' },
  { name: 'Nuxt', icon: 'https://nuxt.com/assets/design-kit/icon-green.svg', url: 'https://nuxt.com/' },
  { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg', url: 'https://reactjs.org/' },
  { name: 'Next.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org/' },
  { name: 'Angular', icon: 'https://angular.io/assets/images/logos/angular/angular.svg', url: 'https://angular.io' },
  { name: 'Svelte', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg', url: 'https://svelte.dev/' },
  // Styling
  { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', url: 'https://tailwindcss.com/' },
  { name: 'Sass', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg', url: 'https://sass-lang.com/' },
  // Languages
  { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
  { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', url: 'https://www.python.org' },
  { name: 'Go', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original-wordmark.svg', url: 'https://golang.org/' },
  { name: 'Rust', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg', url: 'https://www.rust-lang.org/' },
  { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', url: 'https://www.java.com' },
  { name: 'C#', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
  // Backend Frameworks
  { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', url: 'https://nodejs.org' },
  { name: 'NestJS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg', url: 'https://nestjs.com/' },
  { name: 'Express', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg', url: 'https://expressjs.com' },
  { name: 'FastAPI', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg', url: 'https://fastapi.tiangolo.com/' },
  { name: 'Django', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg', url: 'https://www.djangoproject.com/' },
  { name: 'Spring', icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg', url: 'https://spring.io/' },
  { name: '.NET', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg', url: 'https://dotnet.microsoft.com/' },
  // Mobile
  { name: 'React Native', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', url: 'https://reactnative.dev/' },
  { name: 'Flutter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg', url: 'https://flutter.dev/' },
  { name: 'Swift', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg', url: 'https://swift.org/' },
  { name: 'Kotlin', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg', url: 'https://kotlinlang.org/' },
];

// Row 2: AI/ML, Databases, Cloud & DevOps
const technologiesRow2 = [
  // AI & ML
  { name: 'LangChain', icon: 'https://avatars.githubusercontent.com/u/126733545', url: 'https://www.langchain.com/' },
  { name: 'LangGraph', icon: 'https://avatars.githubusercontent.com/u/126733545', url: 'https://langchain-ai.github.io/langgraph/' },
  { name: 'LangFuse', icon: 'https://avatars.githubusercontent.com/u/121682336', url: 'https://langfuse.com/' },
  { name: 'OpenAI', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', url: 'https://openai.com/' },
  { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg', url: 'https://huggingface.co/' },
  { name: 'TensorFlow', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg', url: 'https://www.tensorflow.org/' },
  { name: 'PyTorch', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg', url: 'https://pytorch.org/' },
  // Databases
  { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg', url: 'https://www.postgresql.org' },
  { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg', url: 'https://www.mongodb.com/' },
  { name: 'Redis', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg', url: 'https://redis.io/' },
  { name: 'Prisma', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg', url: 'https://www.prisma.io/' },
  { name: 'GraphQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg', url: 'https://graphql.org/' },
  // Cloud Providers
  { name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', url: 'https://aws.amazon.com/' },
  { name: 'GCP', icon: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg', url: 'https://cloud.google.com' },
  { name: 'Azure', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg', url: 'https://azure.microsoft.com/' },
  { name: 'Vercel', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg', url: 'https://vercel.com/' },
  { name: 'Supabase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg', url: 'https://supabase.com/' },
  { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', url: 'https://firebase.google.com/' },
  // DevOps & Infrastructure
  { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg', url: 'https://www.docker.com/' },
  { name: 'Kubernetes', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg', url: 'https://kubernetes.io/' },
  { name: 'GitHub Actions', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg', url: 'https://github.com/features/actions' },
  { name: 'Nginx', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg', url: 'https://nginx.org/' },
  { name: 'Linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', url: 'https://www.linux.org/' },
  { name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', url: 'https://git-scm.com/' },
  // Testing
  { name: 'Jest', icon: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg', url: 'https://jestjs.io' },
  { name: 'Playwright', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/playwright/playwright-original.svg', url: 'https://playwright.dev/' },
];
</script>

<template>
  <section class="border-b border-default overflow-hidden">
    <div class="py-12">
      <!-- Section Header -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p class="font-mono text-sm text-primary uppercase tracking-widest mb-2">
          Technologies
        </p>
        <h2 class="font-mono text-2xl sm:text-3xl font-bold tracking-tight">
          Our Tech Stack
        </h2>
      </div>

      <!-- Scrolling Marquee -->
      <div class="relative">
        <!-- Gradient Fade Left -->
        <div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-default to-transparent z-10 pointer-events-none" />

        <!-- Gradient Fade Right -->
        <div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-default to-transparent z-10 pointer-events-none" />

        <!-- Row 1: Frontend, Backend & Languages - Left to Right -->
        <div class="marquee-container mb-4">
          <div class="marquee-track animate-scroll-left">
            <a
              v-for="tech in technologiesRow1"
              :key="tech.name"
              :href="tech.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-shrink-0 group"
              :title="tech.name"
            >
              <div class="size-16 sm:size-20 border border-default bg-default p-3 sm:p-4 hover:border-foreground transition-colors">
                <img
                  :src="tech.icon"
                  :alt="tech.name"
                  class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </a>
            <!-- Duplicate for seamless loop -->
            <a
              v-for="tech in technologiesRow1"
              :key="`${tech.name}-dup`"
              :href="tech.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-shrink-0 group"
              :title="tech.name"
              aria-hidden="true"
            >
              <div class="size-16 sm:size-20 border border-default bg-default p-3 sm:p-4 hover:border-foreground transition-colors">
                <img
                  :src="tech.icon"
                  :alt="tech.name"
                  class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </a>
          </div>
        </div>

        <!-- Row 2: AI/ML, Databases, Cloud & DevOps - Right to Left -->
        <div class="marquee-container">
          <div class="marquee-track animate-scroll-right">
            <a
              v-for="tech in technologiesRow2"
              :key="tech.name"
              :href="tech.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-shrink-0 group"
              :title="tech.name"
            >
              <div class="size-16 sm:size-20 border border-default bg-default p-3 sm:p-4 hover:border-foreground transition-colors">
                <img
                  :src="tech.icon"
                  :alt="tech.name"
                  class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </a>
            <!-- Duplicate for seamless loop -->
            <a
              v-for="tech in technologiesRow2"
              :key="`${tech.name}-dup`"
              :href="tech.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-shrink-0 group"
              :title="tech.name"
              aria-hidden="true"
            >
              <div class="size-16 sm:size-20 border border-default bg-default p-3 sm:p-4 hover:border-foreground transition-colors">
                <img
                  :src="tech.icon"
                  :alt="tech.name"
                  class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template><style scoped>
.marquee-container {
  overflow: hidden;
  width: 100%;
}

.marquee-track {
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
  width: max-content;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-scroll-left {
  animation: scroll-left 30s linear infinite;
}

.animate-scroll-right {
  animation: scroll-right 30s linear infinite;
}

.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}
</style>
