<script lang="ts">
	import algoilasearch from 'algoliasearch';
	import instantsearch from 'instantsearch.js';
	import { searchBox, hits } from 'instantsearch.js/es/widgets';
	import { onMount } from 'svelte';

	const ALGOLIAAPPID = 'SG8XZAM7JF';
	const SORCHONLY = 'bc5c6545619049347419ee4574613e3c';
	const ALGOLIASEARCH = 'SG8XZAM7JF-dsn.algolia.net';

	const searchClient = algoilasearch(ALGOLIAAPPID, SORCHONLY);

	onMount(() => {
		let search = instantsearch({
			indexName: 'dev_CAMPS',
			searchClient: searchClient
		});

		search.addWidgets([
			searchBox({
				container: '#algolia-search'
			}),

			hits({
				container: '#algolia-hits'
			})
		]);

		search.start();
	});
</script>

<div>
	<div id="algolia-search" />
	<div id="algolia-hits" />
</div>
