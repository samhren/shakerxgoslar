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
	let showBox = false;

	function expandBox() {
		showBox = true;
	}

	function collapseBox() {
		showBox = false;
	}

	let redRectangleVisible = false;

	function handleMouseMove(event: MouseEvent) {
		const carouselHeight = (event.target as HTMLElement).offsetHeight;
		const mouseY = event.clientY - (event.target as HTMLElement).offsetTop;

		if (mouseY > carouselHeight / 2) {
			redRectangleVisible = true;
		} else {
			redRectangleVisible = false;
		}
	}

	let showInstagramLinks = false;

	function handleMouseOverInstagram() {
		showInstagramLinks = true;
	}

	function handleMouseOutFooter() {
		showInstagramLinks = false;
	}
</script>

<div class="carousel" role="button" on:mousemove={handleMouseMove}>
	{#each slides as slide, i (slide.id)}
		<div class="slide" style="transform: translateX(-{currentIndex * 100}%)">
			<img src={slide.image} alt={`Slide ${slide.id}`} />
		</div>
	{/each}
	{#if redRectangleVisible}
		<div class="red-rectangle grow">
			<p class="rectangle-text">Locations &#x2193;</p>
		</div>
	{/if}
</div>
<div class={redRectangleVisible ? 'red-rectangle visible' : 'red-rectangle'}></div>
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
	<a href="https://www.facebook.com/ShakerGoslarExchange" target="_blank">Facebook</a>
	<div class="instagram-container" on:mouseover={handleMouseOverInstagram}>
		{#if showInstagramLinks}
			<div class="instagram-links">
				<a href="https://instagram.com/link1">Link 1</a>
				<a href="https://instagram.com/link2">Link 2</a>
				<a href="https://instagram.com/link3">Link 3</a>
				<!-- Add more links as needed -->
			</div>
		{/if}
		<a href="https://instagram.com" class:hidden={showInstagramLinks}>Instagram</a>
	</div>
	<a href="https://twitter.com/shakerxgoslar23" target="_blank">Twitter</a>
	<a href="https://www.shaker.org/" target="_blank">Shaker Heights City Schools</a>
	<a href="https://ratsgymnasium-goslar.de/" target="_blank">Ratsgymnasium Goslar</a>
</div>

<style>
	.instagram-container {
		height: 10vh;
		width: 10vw;
	}
	.instagram-links {
		display: flex;
		flex-direction: column;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}

	.instagram-container:hover .instagram-links {
		opacity: 1;
	}

	.hidden {
		display: none;
	}
	.red-rectangle.grow {
		height: 8%;
	}
	.red-rectangle {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0;
		transition: height 0.5s ease-in-out;
		background-color: rgb(239 68 68);
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 1 !important;
	}

	.rectangle-text {
		color: white;
		font-size: 2em;
	}

	.red-rectangle.visible {
		transform: translateY(0);
	}
	.locations > div h3 {
		transition: transform 0.6s ease-in-out;
	}

	.locations > div:hover h3 {
		transform: scale(1.15) translateY(10px);
	}
	.locations > div img {
		transform: scale(1);
		transition:
			transform 0.6s ease-in-out,
			box-shadow 0.6s ease-in-out;
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
	}

	.locations > div:hover img {
		transform: scale(1.15);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	}
	.expanded-box {
		display: flex;
		flex-direction: column;
		background-color: lightgray;
		padding: 10px;
	}

	.expanded-box a {
		margin-bottom: 5px;
	}
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

	.slide > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	img {
		object-fit: cover;
		width: initial;
		height: 100%;
	}

	.locations {
		height: 45vh;
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
		position: relative;
	}

	locations > div:hover::after {
		content: '→';
		position: absolute;
		top: 50%;
		left: 100%;
		font-size: 2em;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		transition-delay: 0.6s; /* Delay the animation by the same duration as the locations hover grow-in animation */
	}

	.locations > div:nth-child(1):hover::after {
		/* Arrow from the first to the second location */
	}

	.locations > div:nth-child(2):hover::after {
		/* Arrow from the second to the third location */
		transform: scaleX(-1);
	}

	.locations > div:nth-child(3):hover::after {
		/* No arrow for the third location */
		display: none;
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
		display: flex;
		justify-content: space-around;
		padding: 20px;
		height: 20vh;
		background-color: #f5f5f5;
	}
	.links a {
		color: #1a0dab;
		text-decoration: none;
		font-size: 20px;
		transition: color 0.3s ease;
	}
	.links a:hover {
		color: #e86100;
	}
</style>
