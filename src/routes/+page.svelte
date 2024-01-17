<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let currentIndex = 0;

	const slides = [
		{ id: 1, image: 'slide1.jpg' },
		{ id: 2, image: 'slide2.jpg' },
		{ id: 3, image: 'slide3.jpg' },
		{ id: 4, image: 'slide4.jpg' }
	];

	let interval: NodeJS.Timeout;

	function startAutoScroll() {
		console.log('start');
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % slides.length;
		}, 3000);
	}

	onMount(() => {
		startAutoScroll();
	});

	let redRectangleVisible = false;

	let showInstagramLinks = false;

	function handleMouseOverInstagram() {
		showInstagramLinks = true;
	}

	function handleMouseOutFooter() {
		showInstagramLinks = false;
	}

	let width: number = 0;
</script>

<svelte:window bind:innerWidth={width} />

<div class="carousel">
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
{#if width >= 1000}
	<div class="links text-zinc-800">
		<a
			class="hover:text-zinc-400"
			href="https://www.facebook.com/ShakerGoslarExchange"
			target="_blank">Facebook</a
		>
		<div
			class="instagram-container"
			role="button"
			tabindex="0"
			on:mouseenter={handleMouseOverInstagram}
			on:mouseleave={handleMouseOutFooter}
		>
			{#if showInstagramLinks}
				<div
					class="instagram-links"
					in:fade={{ duration: 200, delay: 200 }}
					out:fade={{ duration: 200, delay: 0 }}
				>
					<a class="hover:text-zinc-400" href="https://instagram.com/link1">2022</a>
					<a class="hover:text-zinc-400" href="https://instagram.com/link2">2023</a>
					<a class="hover:text-zinc-400" href="https://instagram.com/link3">2024</a>
					<!-- Add more links as needed -->
				</div>
			{:else}
				<a
					href="https://instagram.com"
					in:fade={{ duration: 200, delay: 200 }}
					out:fade={{ duration: 200, delay: 0 }}>Instagram</a
				>
			{/if}
		</div>
		<a class="hover:text-zinc-400" href="https://twitter.com/shakerxgoslar23" target="_blank"
			>Twitter</a
		>
		<a class="hover:text-zinc-400" href="https://www.shaker.org/" target="_blank"
			>Shaker Heights City Schools</a
		>
		<a class="hover:text-zinc-400" href="https://ratsgymnasium-goslar.de/" target="_blank"
			>Ratsgymnasium Goslar</a
		>
	</div>
{:else}
	<div class="links text-zinc-800">
		<div>
			<a
				class="hover:text-zinc-400"
				href="https://www.facebook.com/ShakerGoslarExchange"
				target="_blank">Facebook</a
			>
			<div
				class="instagram-container"
				role="button"
				tabindex="0"
				on:mouseenter={handleMouseOverInstagram}
				on:mouseleave={handleMouseOutFooter}
			>
				{#if showInstagramLinks}
					<div
						class="instagram-links"
						in:fade={{ duration: 200, delay: 200 }}
						out:fade={{ duration: 200, delay: 0 }}
					>
						<a class="hover:text-zinc-400" href="https://instagram.com/link1">2022</a>
						<a class="hover:text-zinc-400" href="https://instagram.com/link2">2023</a>
						<a class="hover:text-zinc-400" href="https://instagram.com/link3">2024</a>
						<!-- Add more links as needed -->
					</div>
				{:else}
					<a
						href="https://instagram.com"
						in:fade={{ duration: 200, delay: 200 }}
						out:fade={{ duration: 200, delay: 0 }}>Instagram</a
					>
				{/if}
			</div>
			<a class="hover:text-zinc-400" href="https://twitter.com/shakerxgoslar23" target="_blank"
				>Twitter</a
			>
		</div>
		<div>
			<a class="hover:text-zinc-400" href="https://www.shaker.org/" target="_blank"
				>Shaker Heights City Schools</a
			>
			<a class="hover:text-zinc-400" href="https://ratsgymnasium-goslar.de/" target="_blank"
				>Ratsgymnasium Goslar</a
			>
		</div>
	</div>
{/if}

<style>
	.instagram-container {
		height: 10vh;
		/* width: 10vw; */
	}
	.instagram-links {
		display: flex;
		flex-direction: column;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
		text-align: center;
	}

	.instagram-container:hover .instagram-links {
		opacity: 1;
	}

	.rectangle-text {
		color: white;
		font-size: 2em;
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

	.locations > div > img {
		object-fit: cover;
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
		text-align: center;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 2fr 2fr;
		justify-content: space-around;
		padding: 0 20px;
		padding-top: 20px;
		min-height: 20vh;
		max-height: fit-content;
		background-color: #f5f5f5;
	}
	.links a {
		text-decoration: none;
		font-size: 20px;
		transition: color 0.3s ease;
	}

	@media (max-width: 650px) {
		.locations > div > img {
			height: 150px;
			width: 150px;
		}
	}

	@media (max-width: 500px) {
		.locations > div > img {
			height: 120px;
			width: 120px;
		}

		.locations {
			height: 35vh;
		}
	}

	@media (max-width: 900px) {
		.links a {
			font-size: 15px;
		}
	}

	@media (max-width: 1000px) {
		.links {
			text-align: center;
			width: 100%;
			display: grid;
			grid-template-rows: 1fr 1fr;
			grid-template-columns: 1fr;
		}

		.links > div:first-child {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
		}

		.links > div:last-child {
			width: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
