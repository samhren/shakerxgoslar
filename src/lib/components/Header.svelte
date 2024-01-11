<div class="wrapper">
	<div class="image"><img src="logo.png" alt="" /></div>
	<div class="header">
		<div class="wrap">
			<div class="h-full">Information</div>
			<div class="h-full">Calandar</div>
			<div class="bg-red-500 h-full">Goslar</div>
		</div>
		<div class="wrap">
			<div class="bg-red-500 h-full">Shaker</div>
			<div class="h-full">Picture Book</div>
			<div class="h-full">Through The Years</div>
		</div>
	</div>
</div>

<style>
	.wrap {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.wrap > div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.header > .wrap:first-child > div:last-child {
		color: white;
	}

	.header > .wrap:last-child > div:first-child {
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
		height: 100%;
		z-index: 1;
	}

	.image {
		position: relative;
	}

	img {
		position: absolute;
		height: 80px;
		left: 50%;
		top: 5px;
		transform: translateX(-50%);
	}
</style>
