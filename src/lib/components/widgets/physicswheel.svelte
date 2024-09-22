<script lang="ts">
	import { draggable } from '@neodrag/svelte';

	export let damping: number = 1;
	export let speed: number = 1;

	let elementPosition = { x: 0, y: 0 };
	let isDragged: boolean = false;

	let currentPos: number = 0;
	let previousPos: number = 0;
	let previousTime: number = performance.now();
	let previousOffset: number = 0;

	let velocity: number = 0;

	function handleGrab(dragOffset: number) {
		elementPosition = { x: dragOffset, y: 0 };
		currentPos = dragOffset + previousOffset;
		const currentTime: number = performance.now();
		const deltaTime = (currentTime - previousTime) / 1000;

		velocity = (currentPos - previousPos) / deltaTime;

		previousPos = currentPos;
		previousTime = currentTime;
	}

	function simulatePhysics() {
		const currentTime: number = performance.now();

		const deltaTime = (currentTime - previousTime) / 1000;

		currentPos = previousPos + velocity * deltaTime;

		velocity = velocity * (1 - damping * deltaTime);

		previousTime = currentTime;

		if (Math.abs(velocity) < 1 || isDragged) {
			return;
		}
		previousPos = currentPos;

		requestAnimationFrame(simulatePhysics);
	}
</script>

<div class="wheel" style="--angle: {(speed * currentPos) / 10}deg">
	<div class="topleft"></div>
	<div class="topright"></div>
	<div class="bottomleft"></div>
	<div class="bottomright"></div>
</div>
<br />
<div class="grab-zone">
	<div
		use:draggable={{
			position: elementPosition,
			axis: 'x',
			grid: [10, 10]
		}}
		on:neodrag:start={(e) => {
			previousOffset = currentPos;
		}}
		on:neodrag={(e) => {
			console.log(e);
			handleGrab(e.detail.offsetX);
		}}
		on:neodrag:end={(e) => {
			elementPosition = { x: 0, y: 0 };
			requestAnimationFrame(simulatePhysics);
		}}
		class="grabbable"
	></div>
</div>

<style>
	.wheel {
		--angle: 0deg;
		height: 256px;
		width: 256px;
		outline: 2px solid #ff7e29;
		border-radius: 500px;

		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 50% 50%;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'. .'
			'. .';
		overflow: hidden;

		transform: rotate(var(--angle));
	}

	.topleft {
		background-color: #b4e1ff;
	}
	.topright {
		background-color: #c1ff9b;
	}
	.bottomleft {
		background-color: #ab87ff;
	}
	.bottomright {
		background-color: #fface4;
	}

	.grab-zone {
		height: 64px;
		width: 50%;
		outline: 2px solid rgb(119, 119, 119);
		border-radius: 8px;
		overflow: hidden;
	}

	.grabbable {
		height: 100%;
		width: 100%;

		cursor: grab;
		/* background-color: rgba(255, 0, 0, 0.342); */
	}
</style>
