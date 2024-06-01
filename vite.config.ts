import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'
import { Capacitor } from '@capacitor/core'
import path from 'node:path'

const __IS_WEB__ = Capacitor.getPlatform() === 'web'
const __IS_ANDROID__ = Capacitor.getPlatform() === 'android'
const __IS_IOS__ = Capacitor.getPlatform() === 'ios'
const __IS_NATIVE__ = JSON.stringify(Capacitor.isNativePlatform())

export default defineConfig({
	plugins: [react(), pages()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'~': path.resolve(__dirname, './electron')
		}
	},
	server: {},
	define: {
		__IS_WEB__,
		__IS_ELECTRON__: false,
		__IS_ANDROID__,
		__IS_IOS__,
		__IS_NATIVE__
	}
})
