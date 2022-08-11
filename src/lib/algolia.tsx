import algoliasearch from 'algoliasearch';

export const algolia = algoliasearch(
	process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
	process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!
);

export default algolia;