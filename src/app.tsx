import { Suspense } from 'react'
import Loading from './components/ui/loading'
import { useRoutes } from 'react-router'
import routes from '~react-pages'

const App = () => {
	return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
}

export default App
