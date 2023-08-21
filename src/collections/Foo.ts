import { CollectionConfig } from 'payload/types';

// Change the following to your own ids
const recordId = '64e339fc55d28e68cc4617a9';
const blockId = '64e33baf07f3cadc5ffea3d6';

const v1 = {
	id: recordId,
	normal: 'v1',
	localized: { en: 'v1-en', zh: 'v1-zh' },
	arr: [
		{
			normal: 'v1',
			localized: { en: 'v1-en', zh: 'v1-zh' },
			id: blockId,
			blockType: 'block_a',
		},
	],
};
const v2 = {
	id: recordId,
	normal: 'v2',
	localized: { en: 'v2-en', zh: 'v2-zh' },
	arr: [
		{
			normal: 'v2',
			localized: { en: 'v2-en', zh: 'v2-zh' },
			id: blockId,
			blockType: 'block_a',
		},
	],
};

const endpoints: CollectionConfig['endpoints'] = [
	{
		path: '/to-v1',
		method: 'post',
		handler: async (req, res, next) => {
			const result = await req.payload.update({
				collection: 'foo',
				data: v1,
				locale: 'all',
				id: v1.id,
			});
			console.log({ result });
			return res.status(200).send('success');
		},
	},
	{
		path: '/to-v2',
		method: 'post',
		handler: async (req, res, next) => {
			const result = await req.payload.update({
				collection: 'foo',
				data: v2,
				locale: 'all',
				id: v2.id,
			});
			console.log({ result });
			return res.status(200).send('success');
		},
	},
];

const Foo: CollectionConfig = {
	slug: 'foo',
	auth: false,
	fields: [
		{ name: 'normal', type: 'text' },
		{ name: 'localized', type: 'text', localized: true },
		{
			name: 'arr',
			type: 'blocks',
			blocks: [
				{
					slug: 'block_a',
					fields: [
						{ name: 'normal', type: 'text' },
						{ name: 'localized', type: 'text', localized: true },
					],
				},
			],
		},
	],
	endpoints,
};

export default Foo;
