/// <reference types="vitest" />

import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    silent: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['./src/**/*.{test,spec}.{tsx,ts}'],
    exclude: [
      ...configDefaults.exclude,
      'src/test/**/*',
      'src/**/*.stories.{tsx,ts}',
      'src/main.tsx',
      '.storybook/**/*',
      '.eslintrc.cjs',
      'src/stories/**/*',
      '*.config.{js,cjs,mjs,ts}'
    ],
    coverage: {
      provider: 'v8',
      reportsDirectory: 'src/test/unit/coverage',
      exclude: [
        ...configDefaults.exclude,
        'src/test/**/*',
        'src/**/*.stories.{tsx,ts}',
        'src/main.tsx',
        '.storybook/**/*',
        '.eslintrc.cjs',
        'src/stories/**/*',
        '*.config.{js,cjs,mjs,ts}'
      ]
    }
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  }
})
