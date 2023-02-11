import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': '/src',
			'@components': '/src/components',
			'@hooks': '/src/hooks',
			'@hoc': '/src/hoc',
			'@routes': '/src/routes',
			'@pages': '/src/pages',
			'@styles': '/src/styles',
			'@services': '/src/services',
			'@utils': '/src/utils',
		},
	},
});
