/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
	api: {
		projectId: 'e143l761',
		dataset: 'production',
	},
	typegen: {
		enabled: true,
		path: [
			'./src/{app,ui}/**/*.{ts,tsx,js,jsx}',
			'./src/sanity/schemaTypes/**/*.{ts,tsx,js,jsx}',
			'./src/sanity/lib/queries.ts',
		],
		schema: './src/sanity/schema.json',
		generates: './src/sanity/types.ts',
	},
})
