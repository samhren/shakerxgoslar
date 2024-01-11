<script lang="ts">
	import { onMount } from 'svelte';

	let currentIndex = 0;
	let interval: NodeJS.Timeout;

	const slides = [
		{ id: 1, image: 'slide1.jpg' },
		{ id: 2, image: 'slide2.jpg' },
		{ id: 3, image: 'slide3.jpg' },
		{ id: 4, image: 'slide4.jpg' }
	];

	function startAutoScroll() {
		console.log('start');
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % slides.length;
		}, 3000);
	}

	function stopAutoScroll() {
		console.log('stop');
		clearInterval(interval);
	}

	onMount(() => {
		startAutoScroll();
	});
</script>

<div class="carousel" role="button">
	{#each slides as slide, i (slide.id)}
		<div class="slide" style="transform: translateX(-{currentIndex * 100}%)">
			<img src={slide.image} alt={`Slide ${slide.id}`} />
		</div>
	{/each}
</div>
<div class="locations">
	<div>
		<img src="locations/Goslar.png" alt="" />
		<h3>Goslar</h3>
	</div>
	<div>
		<img src="locations/Berlin.png" alt="" />
		<h3>Berlin</h3>
	</div>
	<div>
		<img src="locations/Munich.png" alt="" />
		<h3>Munich</h3>
	</div>
</div>
<div class="links">
	<a
		href="https://www.facebook.com/ShakerGoslarExchange/photos"
		class="underline text-blue-500 text-xl">Facebook</a
	>
	<p>Todo: More links</p>
</div>

<style>
	.carousel {
		width: 100%;
		height: 100vh;
		display: flex;
		overflow: hidden;
		position: relative;
	}

	.slide {
		flex: 0 0 100%;
		height: 100%;
		transition: transform 0.5s ease-in-out;
		overflow: hidden;
	}

	img {
		object-fit: cover;
		width: initial;
		height: 100%;
	}

	.locations {
		height: 33vh;
		background-color: white;
		display: flex;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.locations > div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.locations > div > img {
		height: 200px;
		width: 200px;
		border-radius: 50%;
		overflow: hidden;
	}

	.locations > div > h3 {
		margin-top: 10px;
		font-size: larger;
		font-weight: bold;
	}

	.links {
		height: 33vh;
		background-color: white;
	}
</style>
