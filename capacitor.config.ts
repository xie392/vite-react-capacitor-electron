import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
	appId: 'com.hitosea.coss',
	appName: 'coss',
	webDir: 'dist',
	server: {
		url: 'http://...:5173',
		cleartext: true
	}
}

export default config
