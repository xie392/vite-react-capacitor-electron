export interface CommonOptions {
	/** @description 当前主题  'light' | 'dark' */
	theme: 'light' | 'dark'
	/** @description 语言 */
	lang: string
}

export interface CommonStoreMethods {
	/** @description 初始化操作，数据初始化，主题初始化等 */
	init(): Promise<void>
	/** @description 更新某个值 */
	update: (options: Partial<CommonOptions>) => Promise<void>
}

// 通用仓库
export type CommonStore = CommonOptions & CommonStoreMethods
