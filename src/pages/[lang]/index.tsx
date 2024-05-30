import useI18n from '@/hooks/useI18n'
import { $t, langs } from '@/i18n'
import { useParams } from 'react-router'

const Home = () => {
	useI18n()
	const params = useParams()
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-2">
			<h1>{$t('欢迎!')}👏</h1>

			<div className="flex gap-2 flex-col bg-gray-200 p-4 px-5 rounded-md">
				{langs.map((lang) => (
					<a
						className={`bg-white py-2 px-4 rounded-md text-gray-700 hover:bg-gray-300 ${params.lang === lang.code ? 'bg-green-300 text-gray-700' : '`'} `}
						key={lang.code}
						href={`/${lang.code}`}
					>
						{lang.name}
					</a>
				))}
			</div>
		</div>
	)
}

export default Home
