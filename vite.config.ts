import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { defineConfig } from 'vite';

const NAME = 'xeokit-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      formats: ['es'],
      name: NAME,
      entry: path.resolve(__dirname, 'lib/index.ts'),
      fileName: (format) => `${NAME}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/styled', '@xeokit/xeokit-sdk'],
      input: './src/index.ts',
      output: {
        dir: 'dist',
        exports: 'named',
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          '@emotion/styled': '@emotion/styled',
          '@xeokit/xeokit-sdk': '@xeokit/xeokit-sdk',
        },
      },
    },
  },
  plugins: [typescript()],
});
