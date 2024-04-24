import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./src/setupTests.ts'], // テスト用のセットアップファイルのパス
  }
})