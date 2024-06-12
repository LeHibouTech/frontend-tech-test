// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},
	modules: ['@nuxt/eslint', '@nuxt/ui'],
	runtimeConfig: {
		apiAppKeySecret: '',
		apiAppIdSecret: '',
	},
	pages: false,
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
				quotes: 'single',
			},
		},
	},
});
