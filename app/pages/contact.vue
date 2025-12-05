<script setup lang="ts">
const { global } = useAppConfig();

useSeoMeta({
  title: 'Contact Us',
  ogTitle: 'Contact Us - ITFactori',
  description: 'Get in touch with ITFactori. Let\'s discuss your next software project.',
  ogDescription: 'Get in touch with ITFactori. Let\'s discuss your next software project.'
});

// Form state
const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  companyUrl: '',
  region: '',
  services: [] as string[],
  projectDetails: ''
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref('');

const regions = [
  { label: 'Please Select', value: '' },
  { label: 'Middle East & North Africa', value: 'mena' },
  { label: 'USA', value: 'usa' },
  { label: 'Canada', value: 'canada' },
  { label: 'Kingdom of Saudi Arabia', value: 'ksa' },
  { label: 'Australia & New Zealand', value: 'aunz' },
  { label: 'Asia', value: 'asia' },
  { label: 'Europe', value: 'europe' },
  { label: 'Rest of World', value: 'row' }
];

const serviceOptions = [
  { label: 'Remote IT Resources', value: 'remote-it' },
  { label: 'Custom Software Development', value: 'custom-software' },
  { label: 'Web Development', value: 'web-dev' },
  { label: 'Mobile App Development', value: 'mobile-dev' },
  { label: 'AR/VR', value: 'ar-vr' },
  { label: 'Gaming', value: 'gaming' },
  { label: 'Cyber Security', value: 'cyber-security' },
  { label: 'Other IT Services', value: 'other' }
];

const isFormValid = computed(() => {
  return (
    form.fullName.trim() !== '' &&
    form.email.trim() !== '' &&
    form.phone.trim() !== '' &&
    form.companyName.trim() !== '' &&
    form.region !== '' &&
    form.services.length > 0 &&
    form.projectDetails.trim() !== ''
  );
});

async function handleSubmit() {
  if (!isFormValid.value) return;

  isSubmitting.value = true;
  submitError.value = '';

  try {
    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    submitSuccess.value = true;
    // Reset form
    Object.assign(form, {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      companyUrl: '',
      region: '',
      services: [],
      projectDetails: ''
    });
  } catch {
    submitError.value = 'Something went wrong. Please try again or email us directly.';
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="border-b border-default">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div class="max-w-3xl">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5 }"
          >
            <p class="font-mono text-sm text-primary uppercase tracking-widest mb-4">
              Contact
            </p>
          </Motion>
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 }"
          >
            <h1 class="font-mono text-4xl sm:text-5xl font-bold tracking-tight">
              Let's Build Something Together
            </h1>
          </Motion>
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
          >
            <p class="mt-6 text-lg text-muted">
              Have a project in mind? We'd love to hear about it. Fill out the form below and let's discuss how we can help.
            </p>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="border-b border-default">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <!-- Left: Contact Info -->
          <div class="lg:col-span-1">
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5 }"
              :in-view-options="{ once: true }"
            >
              <h2 class="font-mono text-2xl font-semibold mb-8">Get in Touch</h2>
            </Motion>

            <div class="space-y-6">
              <!-- Email -->
              <Motion
                :initial="{ opacity: 0, y: 20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.4, delay: 0.1 }"
                :in-view-options="{ once: true }"
                class="border border-default p-6 hover:border-foreground transition-colors"
              >
                <div class="flex items-start gap-4">
                  <UIcon name="i-lucide-mail" class="size-6 text-primary mt-1" />
                  <div>
                    <h3 class="font-mono font-semibold mb-1">Email</h3>
                    <a
                      :href="`mailto:${global.email}`"
                      class="text-muted hover:text-foreground transition-colors"
                    >
                      {{ global.email }}
                    </a>
                  </div>
                </div>
              </Motion>

              <!-- Response Time -->
              <Motion
                :initial="{ opacity: 0, y: 20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.4, delay: 0.2 }"
                :in-view-options="{ once: true }"
                class="border border-default p-6 hover:border-foreground transition-colors"
              >
                <div class="flex items-start gap-4">
                  <UIcon name="i-lucide-clock" class="size-6 text-primary mt-1" />
                  <div>
                    <h3 class="font-mono font-semibold mb-1">Response Time</h3>
                    <p class="text-muted">We typically respond within 24 hours</p>
                  </div>
                </div>
              </Motion>

              <!-- Availability -->
              <Motion
                :initial="{ opacity: 0, y: 20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.4, delay: 0.3 }"
                :in-view-options="{ once: true }"
                class="border border-default p-6 hover:border-foreground transition-colors"
              >
                <div class="flex items-start gap-4">
                  <span class="relative flex size-6 items-center justify-center mt-1">
                    <span
                      class="absolute inline-flex size-3 rounded-full opacity-75"
                      :class="global.available ? 'bg-emerald-500 animate-ping' : 'bg-red-500'"
                    />
                    <span
                      class="relative inline-flex size-3 rounded-full"
                      :class="global.available ? 'bg-emerald-500' : 'bg-red-500'"
                    />
                  </span>
                  <div>
                    <h3 class="font-mono font-semibold mb-1">Availability</h3>
                    <p class="text-muted">
                      {{ global.available ? 'Currently accepting new projects' : 'Currently at capacity' }}
                    </p>
                  </div>
                </div>
              </Motion>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="lg:col-span-2">
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5 }"
              :in-view-options="{ once: true }"
            >
              <!-- Success Message -->
              <div v-if="submitSuccess" class="border border-emerald-500 bg-emerald-500/10 p-8 text-center">
                <UIcon name="i-lucide-check-circle" class="size-12 text-emerald-500 mx-auto mb-4" />
                <h3 class="font-mono text-xl font-semibold mb-2">Thank You!</h3>
                <p class="text-muted mb-6">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <UButton variant="outline" @click="submitSuccess = false">
                  Send Another Message
                </UButton>
              </div>

              <!-- Form -->
              <form v-else class="border border-default p-8" @submit.prevent="handleSubmit">
                <h3 class="font-mono text-xl font-semibold mb-8">Project Inquiry</h3>

                <!-- Error Message -->
                <div v-if="submitError" class="mb-6 p-4 border border-red-500 bg-red-500/10 text-red-500 text-sm">
                  {{ submitError }}
                </div>

                <div class="space-y-6">
                  <!-- Row 1: Full Name & Email -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label class="block font-mono text-sm font-medium mb-2">
                        Full Name <span class="text-primary">*</span>
                      </label>
                      <UInput
                        v-model="form.fullName"
                        placeholder="John Doe"
                        size="lg"
                        :ui="{ base: 'font-mono' }"
                      />
                    </div>
                    <div>
                      <label class="block font-mono text-sm font-medium mb-2">
                        Email <span class="text-primary">*</span>
                      </label>
                      <UInput
                        v-model="form.email"
                        type="email"
                        placeholder="john@company.com"
                        size="lg"
                        :ui="{ base: 'font-mono' }"
                      />
                    </div>
                  </div>

                  <!-- Row 2: Phone & Company Name -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label class="block font-mono text-sm font-medium mb-2">
                        Phone Number <span class="text-primary">*</span>
                      </label>
                      <UInput
                        v-model="form.phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        size="lg"
                        :ui="{ base: 'font-mono' }"
                      />
                    </div>
                    <div>
                      <label class="block font-mono text-sm font-medium mb-2">
                        Company Name <span class="text-primary">*</span>
                      </label>
                      <UInput
                        v-model="form.companyName"
                        placeholder="Acme Inc."
                        size="lg"
                        :ui="{ base: 'font-mono' }"
                      />
                    </div>
                  </div>

                  <!-- Row 3: Company URL & Region -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label class="block font-mono text-sm font-medium mb-2">
                        Company Domain / URL
                      </label>
                      <UInput
                        v-model="form.companyUrl"
                        type="url"
                        placeholder="https://company.com"
                        size="lg"
                        :ui="{ base: 'font-mono' }"
                      />
                    </div>
                    <div>
                      <label class="block font-mono text-sm font-medium mb-2">
                        Region <span class="text-primary">*</span>
                      </label>
                      <USelect
                        v-model="form.region"
                        :items="regions"
                        size="lg"
                        :ui="{ base: 'font-mono' }"
                      />
                    </div>
                  </div>

                  <!-- Services -->
                  <div>
                    <label class="block font-mono text-sm font-medium mb-4">
                      Services You're Looking For <span class="text-primary">*</span>
                    </label>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label
                        v-for="service in serviceOptions"
                        :key="service.value"
                        class="flex items-center gap-3 p-3 border border-default hover:border-foreground transition-colors cursor-pointer"
                        :class="{ 'border-primary bg-primary/5': form.services.includes(service.value) }"
                      >
                        <UCheckbox
                          :model-value="form.services.includes(service.value)"
                          @update:model-value="(checked: boolean) => {
                            if (checked) {
                              form.services.push(service.value);
                            } else {
                              form.services = form.services.filter(s => s !== service.value);
                            }
                          }"
                        />
                        <span class="text-sm">{{ service.label }}</span>
                      </label>
                    </div>
                  </div>

                  <!-- Project Details -->
                  <div>
                    <label class="block font-mono text-sm font-medium mb-2">
                      Project Details <span class="text-primary">*</span>
                    </label>
                    <UTextarea
                      v-model="form.projectDetails"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      :rows="6"
                      size="lg"
                      :ui="{ base: 'font-mono' }"
                    />
                  </div>

                  <!-- Submit Button -->
                  <div class="pt-4">
                    <UButton
                      type="submit"
                      size="lg"
                      class="w-full justify-center font-mono"
                      :loading="isSubmitting"
                      :disabled="!isFormValid || isSubmitting"
                    >
                      <UIcon v-if="!isSubmitting" name="i-lucide-send" class="size-4 mr-2" />
                      {{ isSubmitting ? 'Sending...' : 'Submit Inquiry' }}
                    </UButton>
                  </div>
                </div>
              </form>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
