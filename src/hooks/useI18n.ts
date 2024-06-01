import { defaultLanguage, langs } from '@/i18n'
import { LANGUAGE } from '@/utils/constants'
import i18next from 'i18next'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'

const useI18n = () => {
	const params = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		const lang = localStorage.getItem(LANGUAGE) ?? defaultLanguage
		i18next.changeLanguage(lang)
	}, [])

	useEffect(() => {
		if (!params.lang) return
		const language = location.pathname.split('/')[1]
		if (langs.some((l) => l.code === language)) {
			i18next.changeLanguage(language)
			return
		}
		navigate('/not-found')
	}, [params.lang, navigate])
}

export default useI18n
