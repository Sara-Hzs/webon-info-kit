import adapter from '@sveltejs/adapter-static';
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