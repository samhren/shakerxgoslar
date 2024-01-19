<script lang="ts">
	import Youtube from '$lib/components/Youtube.svelte';
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';

	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';

	export let data;

	type Photo = {
		url: string;
		date: string;
		year?: number; // Add the 'year' property to the type definition
		expanded: boolean;
	};

	let photos = data.photos;
	let currentIndex = 0;
	let expanded = false;

	function toggleExpand(photo: Photo, index: number) {
		console.log('toggleExpand');

		if (photo.expanded) {
			expanded = false;
		} else {
			expanded = true;
		}

		console.log(photo);
		photo.expanded = !photo.expanded;
		currentIndex = index;
		// set all other photos to not expanded
		photos.forEach((photo1, i) => {
			if (index !== i) {
				photo1.expanded = false;
			}
		});

		photos = photos;
	}

	function nextImage() {
		console.log('nextImage');

		currentIndex = currentIndex + 1;

		if (currentIndex >= photos.length) {
			currentIndex = 0;
		}

		toggleExpand(photos[currentIndex], currentIndex);
	}

	function previousImage() {
		console.log('previousImage');

		currentIndex = currentIndex - 1;

		if (currentIndex < 0) {
			currentIndex = photos.length - 1;
		}

		toggleExpand(photos[currentIndex], currentIndex);
	}
</script>

<!-- <div class="wrapper">
    <h1>{data.year}</h1>
	<div class="video">
		<Youtube videoId={data.video.id} />
	</div>
	<div class="images">
		{#each data.photos as photo}
			<img src={photo.url} alt="" />
		{/each}
	</div>
</div> -->

<div class="wrapper">
	<h1>{data.year}</h1>
	<div class="video">
		<Youtube videoId={data.video.id} />
	</div>
	<div class="images">
		{#if expanded}
			<button class="arrow left" on:click={previousImage}>
				<FaArrowLeft />
			</button>
		{/if}
		<!-- <div class:show={photo.expanded} class="year">{photo.year}</div> -->
		{#each photos as photo, index}
			<button on:click={() => toggleExpand(photo, index)} class:expanded={photo.expanded}>
				<img src={photo.url} alt="" use:lazyImage placeholder="https://via.placeholder.com/150" />
			</button>
		{/each}
		{#if expanded}
			<button class="arrow right" on:click={nextImage}>
				<FaArrowRight />
			</button>
		{/if}
	</div>
</div>

<style>
	/* 

	

	

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
	} */

	h1 {
		font-size: 40px;
		text-align: center;
		font-weight: 700;
		margin-top: 80px;
	}

	.video {
		margin-bottom: 0px;
		height: 500px;
	}

	@media (max-width: 600px) {
		.video {
			height: 300px;
		}
	}

	.wrapper {
		background-color: #e9e9e9;
		padding-top: 80px;
		padding: 10px;
	}

	.images {
		margin-top: 10px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 10px;
		padding: 10px;
	}

	.images img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 20px;
	}

	.expanded > img {
		width: auto;
		height: auto;
		max-width: 95vw;
		max-height: 95vh;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.expanded {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		background-color: rgba(0, 0, 0, 0.95);
	}

	.arrow {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		font-size: 24px;
		color: white;
		background-color: rgba(0, 0, 0, 0.9);
		padding: 10px;
		border-radius: 50%;
		border: none;
		outline: none;
		cursor: pointer;
		z-index: 99999;
		width: 40px;
	}

	.arrow.left {
		left: 20px;
	}

	.arrow.right {
		right: 20px;
	}
</style>
