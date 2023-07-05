import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	jsxInject: `import React from 'react'`,
	plugins: [react()],
	build: {
		rollupOptions: {
			external: ["react", "react-dom"],
		},
	},
	resolve: {
		alias: {
			"react-dom": "@hot-loader/react-dom",
		},
	},
});
