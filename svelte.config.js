import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
	kit: {
		adapter: adapter(),
		// other kit options...
	},

	preprocess: preprocess({
		scss: {

			prependData: `@import './src/routes/global.scss';`
		},

	})
};

export default config;