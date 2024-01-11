<script lang="ts">
	import { goto } from '$app/navigation';

	const goHome = () => {
		goto('/');
	};
</script>

<div class="wrapper">
	<div class="image">
		<a href="/">
			<img src="logo.png" alt="" />
		</a>
	</div>
	<div class="header">
		<div class="wrap">
			<a class="h-full" href="/information">Information</a>
			<a class="h-full" href="/calendar">Calendar</a>
			<a class="bg-red-500 h-full" href="/goslar">Goslar</a>
		</div>
		<div class="wrap">
			<a class="bg-red-500 h-full" href="/shaker">Shaker</a>
			<a class="h-full" href="/picture-book">Picture Book</a>
			<a class="h-full" href="/through-the-years/2023"> Through The Years</a>
		</div>
	</div>
</div>

<style>
	.wrap {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.wrap > a {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header > .wrap:first-child > a:last-child {
		color: white;
	}

	.header > .wrap:last-child > a:first-child {
		color: white;
	}

	.header {
		margin-top: 20px;
		width: 100%;
		height: 37px;
		display: flex;
	}

	.header > div {
		width: 43%;
		background-color: white;
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

	button {
		position: relative;
	}

	/* .image {
		position: relative;
	} */

	img {
		position: absolute;
		height: 80px;
		left: 50%;
		top: 5px;
		transform: translateX(-50%);
	}
</style>
