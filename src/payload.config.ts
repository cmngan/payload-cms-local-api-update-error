import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Foo from './collections/Foo';
import { payloadCloud } from '@payloadcms/plugin-cloud';

export default buildConfig({
	admin: {
		user: Users.slug,
	},
	collections: [Users, Foo],
	localization: {
		locales: ['en', 'zh'],
		defaultLocale: 'en',
		fallback: true,
	},
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	plugins: [payloadCloud()],
});
