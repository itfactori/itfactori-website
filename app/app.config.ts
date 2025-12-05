export default defineAppConfig({
  global: {
    picture: {
      dark: '/logo-dark.svg',
      light: '/logo-light.svg',
      alt: 'ITFactori'
    },
    meetingLink: '/contact',
    email: 'itfactori@itfactori.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc'
    },
    // Global component overrides for Neo-Brutalist theme
    button: {
      slots: {
        base: 'rounded-sm'
      },
      defaultVariants: {
        size: 'md'
      }
    },
    card: {
      slots: {
        root: 'rounded-none border border-default shadow-none'
      }
    },
    input: {
      slots: {
        root: 'rounded-sm'
      }
    },
    badge: {
      slots: {
        base: 'rounded-sm font-mono text-xs'
      }
    },
    // Page components
    pageHero: {
      slots: {
        container: 'py-24 sm:py-32 lg:py-40',
        title:
          'font-mono mx-auto max-w-4xl text-pretty text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
        description: 'mt-6 text-lg mx-auto max-w-2xl text-pretty text-muted'
      }
    },
    pageSection: {
      slots: {
        container: 'py-16 sm:py-24',
        title: 'font-mono text-2xl sm:text-3xl font-semibold tracking-tight',
        description: 'mt-2 text-muted'
      }
    },
    pageCard: {
      slots: {
        root: 'rounded-none border border-default shadow-none hover:border-foreground transition-colors'
      }
    },
    // Navigation
    navigationMenu: {
      slots: {
        root: 'rounded-none'
      }
    }
  },
  footer: {
    credits: `© ${new Date().getFullYear()} ITFactori. All rights reserved.`,
    colorMode: false,
    links: [
      {
        icon: 'i-simple-icons-linkedin',
        to: 'https://linkedin.com/company/itfactori',
        target: '_blank',
        'aria-label': 'ITFactori on LinkedIn'
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/itfactori',
        target: '_blank',
        'aria-label': 'ITFactori on GitHub'
      },
      {
        icon: 'i-simple-icons-x',
        to: 'https://x.com/itfactori',
        target: '_blank',
        'aria-label': 'ITFactori on X'
      }
    ]
  }
});
