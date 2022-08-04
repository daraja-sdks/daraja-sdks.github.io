export const SITE = {
	title: 'Daraja Sdks',
	description: 'A set of community-driven wrappers/sdks for working with Safaricom\'s Mpesa API(daraja) with ease.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Getting Started', header: true },
		{ text: '👋 Introduction', link: 'en/introduction' },
		{ text: '👨‍👩‍👦 Join the community', link: 'en/community' },
		{ text: '🤝 Contributing', link: 'en/contributing' },
		{ text: '📃 Terminology', link: 'en/terminolgy' },

		{ text: 'Daraja APIs', header: true },
		{ text: 'Lipa na Mpesa Online', link: 'en/api/stk-push' },
		{ text: 'Account Balance', link: 'en/api/account-balance' },
		{ text: 'Reversals', link: 'en/api/reversal' },
		{ text: 'Transaction Status', link: 'en/api/transaction-status' },
		{ text: 'Business to Customer', link: 'en/api/b2c' },
		{ text: 'Customer to Business', link: 'en/api/c2b' },

		{text: 'Implementations', header: true},
		{text: 'Node.js', link: 'en/impl/node'},
		{text: 'Ruby', link: 'en/impl/ruby'},
		{text: 'Python', link: 'en/impl/python'},
		{text: 'Go(Golang)', link: 'en/impl/golang'},
		{text: 'Java', link: 'en/impl/java'},
		{text: 'Rust', link: 'en/impl/rust'},
		{text: 'C#', link: 'en/impl/c-sharp'},
		{text: 'Php', link: 'en/impl/php'},
		{text: 'Elixir', link: 'en/impl/elixir'},
	],
};
