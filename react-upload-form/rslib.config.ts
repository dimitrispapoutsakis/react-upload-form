import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rslib/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
	lib: [
		{
			bundle: false,
			dts: true,
			format: 'esm',
		},
		{
			format: 'mf',
			output: {
				distPath: {
					root: './dist/mf',
				},
				// for production, add online assetPrefix here
				assetPrefix: 'http://localhost:3001/mf',
			},
			// for Storybook to dev
			dev: {
				assetPrefix: 'http://localhost:3001/mf',
			},
			plugins: [
				pluginModuleFederation({
					name: 'reactuploadform',
					exposes: {
						'.': './src/index.ts'
					},
					// can not add 'remote' here, because you may build 'esm' or 'cjs' assets in one build.
					// if you want the Rslib package use remote module, please see below.
					shared: {
						react: {
							singleton: true,
						},
						'react-dom': {
							singleton: true,
						},
					},
				}),
			],
		},
	],
	server: {
		port: 3001,
	},
	output: {
		target: 'web',
	},
	plugins: [pluginReact(), pluginSass()],
});
