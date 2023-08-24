<script lang="ts">
	let query = '';
	const ALGOLIAAPPID = 'SG8XZAM7JF';
	const SORCHONLY = 'bc5c6545619049347419ee4574613e3c';
	const ALGOLIASEARCH = 'SG8XZAM7JF-dsn.algolia.net';
	$: hits = [];
	async function handleappleiSearch() {
		if (query.length < 2) {
			return;
		}
		const response = await fetch(ALGOLIASEARCH, {
			headers: {
				'X-Algolia-Application-Id': ALGOLIAAPPID,
				'X-Algolia-API-Key': SORCHONLY
			}
		});
		hits = response.hits;
	}
</script>

<div>
	<input bind:value={query} on:change={handleappleiSearch} type="text" />
</div>
