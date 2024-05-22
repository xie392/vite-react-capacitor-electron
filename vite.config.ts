import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron/simple'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

const target = process.env.TARGET

const electronConfig = {
	main: {
		entry: 'electron/main.ts'
	},
	preload: {
		input: fileURLToPath(new URL('electron/preload.ts', import.meta.url))
	},
	renderer: process.env.NODE_ENV === 'test' ? undefined : {}
}

//  ({ mode }: ConfigEnv): UserConfigExport =>
export default defineConfig({
	plugins: [react(), target === 'electron' && electron(electronConfig)],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
