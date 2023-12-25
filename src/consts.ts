export const SITE = {
	title: 'Johannes van der Merwe',
	description: 'Johannes van der Merwe',
	defaultLanguage: 'en-us',
} as const;

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);


// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		// 'Home': [
		// 	{ text: 'Home', link: 'en/home' },
		// ],
		'Careman': [
			{ text: 'Front-End', link: 'en/careman-fontend' },
			{ text: 'Introduction', link: 'en/intro' },
			{ text: 'Tree', link: 'en/tree' },
			{ text: 'DB', link: 'en/database' },
			{ text: 'API', link: 'en/api' },
			{ text: 'SMS', link: 'en/sms' },
			{ text: 'Commands', link: 'en/commands' },
		],
		'GPT Watchtower': [
			{ text: 'Introduction', link: 'en/gpt-intro' },
			{ text: 'Tree', link: 'en/tree-watchtower' },
			{ text: 'Watchtower', link: 'en/watchtower' },
			{ text: 'Express Beacon', link: 'en/express-beacon' },
		]
	},
};
