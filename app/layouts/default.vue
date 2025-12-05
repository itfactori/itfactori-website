<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col bg-default">
    <AppHeader :links="navLinks" />
    <!-- Main content with top padding for fixed header -->
    <main class="flex-1 pt-16">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
