import { createDefu } from 'defu';
import type { DefaultConfig } from "~/types";

const customDefu = createDefu((obj, key, value) => {
  if (Array.isArray(value) && value.every((x: any) => typeof x === 'string')) {
    obj[key] = value;
    return true;
  }
});

const defaultConfig: DefaultConfig = {
  site: {
    name: 'shadcn-docs',
    description: 'Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.',
    ogImage: '/hero.png',
    ogImageComponent: 'ShadcnDocs',
    ogImageColor: 'light',
    umami: {
      enable: false,
      src: 'https://cloud.umami.is/script.js',
      dataWebsiteId: '',
    },
  },
  theme: {
    customizable: true,
    color: 'zinc',
    radius: 0.5,
  },
  banner: {
    enable: false,
    showClose: true,
    content: 'Welcome to **shadcn-docs-nuxt**',
    to: '',
    target: '_blank',
    border: true,
  },
  header: {
    showLoadingIndicator: true,
    title: 'shadcn-docs',
    showTitle: true,
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    },
    showTitleInMobile: false,
    border: false,
    darkModeToggle: true,
    nav: [],
    links: [],
  },
  aside: {
    useLevel: true,
    collapse: false,
    collapseLevel: 1,
    folderStyle: 'default',
  },
  main: {
    breadCrumb: true,
    showTitle: true,
    codeCopyToast: true,
    codeCopyToastText: 'Copied to clipboard!',
    fieldRequiredText: 'required',
    padded: true,
    editLink: {
      enable: false,
      pattern: '',
      text: 'Edit this page',
      icon: 'lucide:square-pen',
      placement: ['docsFooter'],
    },
    backToTop: true,
    pm: ['npm', 'pnpm', 'bun', 'yarn'],
    codeIcon: {
      'package.json': 'vscode-icons:file-type-node',
      'tsconfig.json': 'vscode-icons:file-type-tsconfig',
      '.npmrc': 'vscode-icons:file-type-npm',
      '.editorconfig': 'vscode-icons:file-type-editorconfig',
      '.eslintrc': 'vscode-icons:file-type-eslint',
      '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
      '.eslintignore': 'vscode-icons:file-type-eslint',
      'eslint.config.js': 'vscode-icons:file-type-eslint',
      'eslint.config.mjs': 'vscode-icons:file-type-eslint',
      'eslint.config.cjs': 'vscode-icons:file-type-eslint',
      '.gitignore': 'vscode-icons:file-type-git',
      'yarn.lock': 'vscode-icons:file-type-yarn',
      '.env': 'vscode-icons:file-type-dotenv',
      '.env.example': 'vscode-icons:file-type-dotenv',
      '.vscode/settings.json': 'vscode-icons:file-type-vscode',
      'nuxt': 'vscode-icons:file-type-nuxt',
      '.nuxtrc': 'vscode-icons:file-type-nuxt',
      '.nuxtignore': 'vscode-icons:file-type-nuxt',
      'nuxt.config.js': 'vscode-icons:file-type-nuxt',
      'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
      'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
      'tailwind.config.js': 'vscode-icons:file-type-tailwind',
      'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
      'vue': 'vscode-icons:file-type-vue',
      'ts': 'vscode-icons:file-type-typescript',
      'tsx': 'vscode-icons:file-type-typescript',
      'mjs': 'vscode-icons:file-type-js',
      'cjs': 'vscode-icons:file-type-js',
      'js': 'vscode-icons:file-type-js',
      'jsx': 'vscode-icons:file-type-js',
      'md': 'vscode-icons:file-type-markdown',
      'mdc': 'vscode-icons:file-type-markdown',
      'py': 'vscode-icons:file-type-python',
      'npm': 'vscode-icons:file-type-npm',
      'pnpm': 'vscode-icons:file-type-pnpm',
      'npx': 'vscode-icons:file-type-npm',
      'yarn': 'vscode-icons:file-type-yarn',
      'bun': 'vscode-icons:file-type-bun',
      'deno': 'vscode-icons:file-type-deno',
      'yml': 'vscode-icons:file-type-yaml',
      'json': 'vscode-icons:file-type-json',
      'terminal': 'lucide:terminal',
    },
  },
  footer: {
    credits: '',
    links: [],
  },
  toc: {
    enable: true,
    enableInMobile: false,
    title: 'On This Page',
    links: [],
    carbonAds: {
      enable: false,
      disableInDev: false,
      code: '',
      placement: '',
      format: 'cover',
    },
  },
  search: {
    enable: true,
    inAside: false,
    style: 'input',
    placeholder: 'Search...',
    placeholderDetailed: 'Search documentation...',
  },
};

export function useConfig() {
  const appConfig = computed(() => useAppConfig()?.shadcnDocs || {});

  return computed(
    () => {
      const processedConfig = customDefu(appConfig.value, defaultConfig);
      return {
        ...appConfig.value,
        ...processedConfig,
      };
    },
  );
}
