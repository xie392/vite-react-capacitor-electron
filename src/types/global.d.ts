export declare global {
	/** Electron 环境 */
	declare const __IS_ELECTRON__: boolean
	/** Web 环境 */
	declare const __IS_WEB__: boolean
	/** Android 环境 */
	declare const __IS_ANDROID__: boolean
	/** IOS 环境 */
	declare const __IS_IOS__: boolean
	/** 原生平台环境 */
	declare const __IS_NATIVE__: boolean
}
