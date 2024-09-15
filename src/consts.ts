export const SITE = {
	title: 'Johannes van der Merwe',
	description: 'Johannes van der Merwe',
} as const;

export type Sidebar = Record<string, { text: string; link?: string }[]>;
export const SIDEBAR: Sidebar = {
	'Home': [ 
		{ text: 'Home', link: '' },
	],
	'Projects': [ 
		{ text: 'Projects', link: '' },
	],
	'Careman': [
		{ text: 'Introduction', link: 'careman' },
		{ text: 'Interface', link: 'careman/careman-fontend' },
		{ text: 'Tree', link: 'careman/tree' },
		{ text: 'DB', link: 'careman/database' },
		{ text: 'API', link: 'careman/api' },
		{ text: 'SMS', link: 'careman/sms' },
		{ text: 'Commands', link: 'careman/commands' },
	],
	'GPT Screenshot': [
		{ text: 'Introduction', link: 'gpt-screenshot' },
		{ text: 'Tree', link: 'gpt-screenshot/tree-watchtower' },
		{ text: 'Watchtower', link: 'gpt-screenshot/watchtower' },
		{ text: 'Express Beacon', link: 'gpt-screenshot/express-beacon' },
	]
};