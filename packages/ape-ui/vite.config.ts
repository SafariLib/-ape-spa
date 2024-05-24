import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        dts({
            rollupTypes: true,
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'ape-ui',
            formats: ['es', 'umd'],
            fileName: format => `index.${format}.js`,
        },
    },
});
