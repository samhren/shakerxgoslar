<script lang="ts">
	export let data;

	type Photo = {
		url: string;
		date: string;
		year?: number; // Add the 'year' property to the type definition
		expanded: boolean;
	};

	let photos = data.photos;

	function toggleExpand(photo: Photo) {
		console.log(photo);
		photo.expanded = !photo.expanded;
		// set all other photos to not expanded
		photos.forEach((photo1) => {
			if (photo.url !== photo1.url) {
				photo1.expanded = false;
			}
		});

		photos = photos;
	}
</script>

<div class="images">
	{#each photos as photo}
		<button on:click={() => toggleExpand(photo)} class:expanded={photo.expanded}>
			<img src={photo.url} alt="" />
		</button>
	{/each}
</div>

<style>
	div {
		margin-top: 100px;
	}
	.images {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 10px;
	}

	.images img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}

	.expanded > img {
		width: auto;
		height: 95vh;
		position: fixed;
		top: 2.5vh;
		left: 50%;
		transform: translateX(-50%);
	}

	.expanded {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
