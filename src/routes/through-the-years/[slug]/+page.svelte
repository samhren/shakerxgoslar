<script lang="ts">
	export let data;
	import Youtube from '$lib/components/Youtube.svelte';
	import type { YoutubePlayer } from '$lib/types/youtube';

	let player: YoutubePlayer;
</script>

<div class="wrapper">
	<h1>{data.year}</h1>
	<div class="video">
		<Youtube videoId={data.video.id} />
	</div>
	<div class="images">
		{#each data.photos as photo}
			<img src={photo.url} alt="" />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		padding-top: 50px;
		background-color: #f2f2f2;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	}

	h1 {
		font-size: 40px;
		margin-top: 80px;
		text-align: center;
		font-weight: 700;
	}

	.video {
		margin-bottom: 20px;
		height: 500px;
	}

	.images {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 20px;
	}

	img {
		width: 100%;
		max-width: 500px;
		margin-bottom: 10px;
		border-radius: 5px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
