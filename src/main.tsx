import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@/i18n'
import '@/styles/global.scss'
import App from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)

// Use contextBridge
// window.ipcRenderer.on('main-process-message', (_event, message) => {
// 	console.log(message)
// })
