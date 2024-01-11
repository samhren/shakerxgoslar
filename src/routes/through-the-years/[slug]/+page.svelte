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
</div>

<style>
	.video {
		height: 500px;
		width: 80%;
	}

	.wrapper {
		margin-top: 50px;
	}
</style>
