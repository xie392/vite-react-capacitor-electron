import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { i18nInit } from '@/i18n'
import '@/styles/global.scss'
import App from './app'
import useCommonStore from '@/stores/common'

i18nInit()

const commonStore = useCommonStore.getState()
commonStore.init()

// Determine the router type based on the environment
// eslint-disable-next-line react-refresh/only-export-components
const Router = __IS_ELECTRON__ ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>
)

// Use contextBridge
if (__IS_ELECTRON__) {
	window.ipcRenderer.on('main-process-message', (_event, message) => {
		console.log(message)
	})
}
