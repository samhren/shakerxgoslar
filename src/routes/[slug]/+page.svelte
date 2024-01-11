<script lang="ts">
	export let data;
	import Youtube from '$lib/Youtube.svelte';
	import type { YoutubePlayer } from '$lib/types/youtube';

	let player: YoutubePlayer;
</script>

<h1>{data.year}</h1>
<div class="video">
	<Youtube bind:player initialVideoId={data.video.id} />
</div>

<style>
	.video {
		position: relative;
		padding-bottom: 56.25%;
		padding-top: 25px;
		height: 500px;
		width: 80%;
	}
</style>
