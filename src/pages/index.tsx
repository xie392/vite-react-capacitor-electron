import { Navigate } from 'react-router-dom'
import { defaultLanguage } from '@/i18n'

const App = () => {
	return <Navigate to={`/${defaultLanguage}`} />
}

export default App
