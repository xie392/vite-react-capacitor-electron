import { $t, defaultLanguage, langs } from '@/i18n'
import { Link, useNavigate, useParams, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useCommonStore from '@/stores/common'
import clsx from 'clsx'

const Home = () => {
	const params = useParams()
	const navigate = useNavigate()
	const location = useLocation()
	const commonStore = useCommonStore()

	const [lang, setLang] = useState<string>(params.lang || defaultLanguage)

	useEffect(() => {
		if (params.lang && !langs.some((lang) => lang.code === params.lang)) {
			navigate(`/${params.lang}/not-found`, { replace: true })
		}
	}, [navigate, params.lang])

	const changeLanguage = (lang: string) => {
		setLang(lang)
		commonStore.update({ lang })
		const path = location.pathname.replace(params.lang || '', lang)
		navigate(path, { replace: true })
		window.location.reload()
	}

	return (
		<main className="min-h-screen">
			<header className="bg-gray-800 text-white h-16 flex items-center px-5 justify-between">
				<h1 className="text-xl">vite-react-capacitor-electron</h1>
				<div className="flex gap-2 items-center">
					<Link
						to=""
						className={clsx(
							'px-4 py-2 hover:text-primary',
							location.pathname.split('/').length === 1 && 'text-primary'
						)}
					>
						{$t('首页')}
					</Link>
					<Link
						to="about"
						className={clsx(
							'px-4 py-2 hover:text-primary',
							location.pathname.includes('about') && 'text-primary'
						)}
					>
						{$t('关于')}
					</Link>

					<select
						className="text-gray-700 bg-gray-200 py-[2px] px-2 rounded"
						name="lang"
						id=""
						value={lang}
						onChange={(e) => changeLanguage(e.target.value)}
					>
						{langs.map((lang) => (
							<option key={lang.code} value={lang.code}>
								{lang.name}
							</option>
						))}
					</select>
				</div>
			</header>
			<section>
				<Outlet />
			</section>
		</main>
	)
}

export default Home
