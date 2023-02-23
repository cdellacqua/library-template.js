import {defineConfig} from 'vite';
import {readFileSync} from 'fs';
import {join} from 'path';

const {devDependencies, peerDependencies, camelCaseName} = JSON.parse(readFileSync('package.json').toString());

export default defineConfig({
	build: {
		sourcemap: true,
		lib: {
			formats: ['cjs', 'umd', 'es'],
			entry: join('src', 'lib', 'index.ts'),
			name: camelCaseName,
			fileName: 'index',
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: [...Object.keys(devDependencies || {}), ...Object.keys(peerDependencies || {})],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					// for example react: 'React'
				},
			},
		},
	},
});
