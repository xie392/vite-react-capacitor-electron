import { create } from 'zustand'
import type { CommonOptions, CommonStoreMethods, CommonStore } from '@/types/stores'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { THEME } from '@/utils/enum'
import { defaultLanguage } from '@/i18n'

const states: CommonOptions = {
	theme: THEME.LIGHT,
	lang: defaultLanguage
}

const actions = (set: any, get: any): CommonStoreMethods => ({
	init: async () => {
		const options = get()
		console.log('🚀 ~ 当前语言', options.lang)
		console.log('🚀 ~ 当前主题', options.theme)
	},
	update: async (options) => set(options)
})

const commonStore = (set: any, get: any): CommonStore => ({
	...states,
	...actions(set, get)
})

const useCommonStore = create(
	devtools(
		persist(commonStore, {
			name: 'COMMON_STORE',
			storage: createJSONStorage(() => localStorage)
		})
	)
)

export default useCommonStore
