import { Suspense, useEffect, useState } from 'react'
import Loading from './components/ui/loading'
import { useRoutes } from 'react-router'
import routes from '~react-pages'
import i18next from 'i18next'
import useCommonStore from '@/stores/common'

const App = () => {
	const commonStore = useCommonStore()
	const [loaded, setLoaded] = useState<boolean>(false)

	useEffect(() => {
		if (loaded) {
			i18next.changeLanguage(commonStore.lang)
		}
		i18next.on('initialized', () => setLoaded(true))
	}, [commonStore.lang, loaded])

	return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
}

export default App
