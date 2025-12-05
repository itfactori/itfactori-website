<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

defineProps<{
  links: NavigationMenuItem[];
}>();
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-default border-b border-default">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="font-mono text-lg font-bold tracking-tight">ITFactori</span>
        </NuxtLink>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            class="px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            active-class="text-foreground"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Right side -->
        <div class="flex items-center gap-2">
          <ColorModeButton />
          <UButton to="/contact" variant="solid" size="sm" class="hidden sm:inline-flex">
            Get in Touch
          </UButton>
        </div>
      </div>
    </div>
  </header>
</template>
