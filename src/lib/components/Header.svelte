<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import { page } from '$app/stores';

	import { fade } from 'svelte/transition';

	// import { clickOutside } from '../utils/clickOutside';

	let open = false;

	let size: number = 0;

	$: {
		if (size > 760) {
			open = false;
		}
	}

	function close() {
		open = false;
	}

	function openMenu() {
		console.log('open menu');
		open = true;
	}

	// function handleClickOutside() {
	// 	console.log('click outside');
	// 	if (size >= 760) {
	// 		open = false;
	// 	}
	// 	if (open) {
	// 		open = false;
	// 	}
	// }

	// If page is not / svelte

	let home = true;

	$: if ($page.url.pathname !== '/') {
		home = true;
	} else {
		home = false;
	}
</script>

<svelte:window bind:innerWidth={size} />

<div class="wrapper">
	<div class="header">
		<div class="wrap">
			<a href="/information">Information</a>
			<a href="/calendar">Calendar</a>
			<a class="bg-red-500 text-white" href="/goslar">Goslar</a>
			<div class="image">
				<a href="/">
					<img src="logo.png" alt="" />
				</a>
			</div>
			<a class="bg-red-500 text-white" href="/shaker">Shaker</a>
			<a href="/picture-book">Picture Book</a>
			<a href="/through-the-years/2023"> Through The Years</a>
			{#if size <= 760}
				<div class="hamburger">
					{#if home}
						<Hamburger bind:open --color="grey" --active-color="black" />
					{:else}
						<Hamburger bind:open --color="white" --active-color="black" />
					{/if}
				</div>
				{#if open}
					<div class="menu" transition:fade>
						<a href="/information" on:click={close}>Information</a>
						<a href="/calendar" on:click={close}>Calendar</a>
						<a href="/goslar" on:click={close}>Goslar</a>
						<a href="/shaker" on:click={close}>Shaker</a>
						<a href="/picture-book" on:click={close}>Picture Book</a>
						<a href="/through-the-years/2023" on:click={close}> Through The Years</a>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</div>

<style>
	.wrap {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr minmax(80px, 120px) 1fr 1fr 1fr;
		width: 100%;
	}

	.wrap > a {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		height: fit-content;
		padding: 5px 0;
	}

	.header {
		margin-top: 20px;
		width: 100%;
		height: 37px;
		display: flex;
	}

	@media (max-width: 910px) {
		.header {
			font-size: small;
		}
	}

	@media (max-width: 760px) {
		.wrap > a {
			display: none;
		}

		.hamburger {
			right: 0;
			top: 0;
			position: absolute;
			justify-content: center;
			align-items: center;
			z-index: 2;
		}

		.image {
			width: 100px;
		}

		.menu > a {
			margin-top: 10px;
			margin-bottom: 10px !important;
		}
	}

	@media (max-width: 500px) {
		.image {
			width: 75px;
		}
	}

	.header > div:first-child {
		margin-right: auto;
	}

	.wrapper {
		top: 0;
		left: 0;
		position: absolute;
		width: 100%;
		height: fit-content;
		z-index: 1;
	}

	.menu {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		background-color: white;
		display: flex;
		flex-direction: column;
		padding: 10px;
	}

	.menu > a {
		margin-bottom: 10px;
		font-size: large;
	}

	.menu a:hover {
		color: rgb(86, 86, 86);
	}

	img {
		width: auto;
		transform: translateY(-25%);
	}
</style>
