<script>
	import Searchy from './searchy.svelte';
</script>

<div class="border-#betterblack border-4 rounded-lg mx-5 my-3 bg-white">
	<nav class="pl-4 py-2 gap-5 flex">
		<a
			href="/"
			class="border-4 rounded-lg px-2 pb-1 border-#securepassword transition-colors duration-150 hover:bg-#betterblack hover:text-white"
			>Home</a
		>
		<a
			href="discover"
			class="border-4 border-#securepassword rounded-lg px-2 pb-1 transition-colors duration-150 hover:bg-#betterblack hover:text-white"
			>Discover</a
		>
		<Searchy />
	</nav>
</div>
