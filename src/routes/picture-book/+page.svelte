<script lang="ts">
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

	let photos = data.getPhotos();
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

	function getNewPhotos() {
		photos = data.getPhotos();
	}
</script>

<div class="wrapper">
	<div>
		<button on:click={getNewPhotos} class="new-photos bg-red-500 hover:bg-red-400"
			>Generate New Photos</button
		>
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
</div>

<style>
	/* .year {
		display: none;
		position: absolute;
		top: 0;
		z-index: 99999;
		left: 50%;
		transform: translateX(-50%);
		color: white;
		font-size: 40px;
		font-weight: 700;
		padding: 3px 15px;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 20px;
	} */

	.new-photos {
		border: none;
		color: white;
		padding: 10px 20px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 12px;
	}

	.wrapper {
		background-color: #e9e9e9;
		padding: 1px;
	}

	.wrapper > div {
		margin-top: 120px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.images {
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
