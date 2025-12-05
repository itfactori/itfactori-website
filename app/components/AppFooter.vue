<script setup lang="ts">
const { footer, global } = useAppConfig();
</script>

<template>
  <footer class="border-t border-default bg-default">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <NuxtLink to="/" class="inline-block">
            <span class="font-mono text-xl font-bold tracking-tight">ITFactori</span>
          </NuxtLink>
          <p class="mt-4 text-sm text-muted max-w-md">
            End-to-end software solutions. From mobile apps to cloud infrastructure,
            we build systems that scale.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-mono text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-sm text-muted hover:text-foreground transition-colors">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects" class="text-sm text-muted hover:text-foreground transition-colors">Projects</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-sm text-muted hover:text-foreground transition-colors">Contact</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-mono text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
          <ul class="space-y-2">
            <li>
              <a :href="`mailto:${global.email}`" class="text-sm text-muted hover:text-foreground transition-colors">
                {{ global.email }}
              </a>
            </li>
            <li class="flex items-center gap-3 pt-2">
              <template v-if="footer?.links">
                <a
                  v-for="(link, index) of footer?.links"
                  :key="index"
                  :href="link.to"
                  :target="link.target"
                  :aria-label="link['aria-label']"
                  class="text-muted hover:text-foreground transition-colors"
                >
                  <UIcon :name="link.icon" class="size-5" />
                </a>
              </template>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-12 pt-8 border-t border-default flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-xs text-muted">
          {{ footer.credits }}
        </p>
        <p class="text-xs text-muted font-mono">
          Built with precision.
        </p>
      </div>
    </div>
  </footer>
</template>
