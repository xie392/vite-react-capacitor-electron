import ReactDOM from 'react-dom/client'
import { StrictMode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import Loading from '@/components/ui/loading'
import '@/i18n'
import '@/styles/global.scss'

// eslint-disable-next-line react-refresh/only-export-components
const App = () => <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>

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
