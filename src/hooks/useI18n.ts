import { langs } from '@/i18n'
import i18next from 'i18next'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

const useI18n = () => {
	const params = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		console.log('params.lang', params.lang)
		if (!params.lang) return
		const language = location.pathname.split('/')[1]
		if (langs.some((l) => l.code === language)) {
			i18next.changeLanguage(language)
			return
		}

		navigate('/')
	}, [params.lang, navigate])
}

export default useI18n
