<script lang="ts">
	import { Pos } from '$lib/types';
	import { draggable } from '@neodrag/svelte';

	export let containerSize: Pos = new Pos(128, 128);
	export let joystickSize: Pos = new Pos(64, 64);

	export let position = { x: 0, y: 0 };
</script>

<div class="dragzone" style=" --size-x: {containerSize.x}px;  --size-y: {containerSize.y}px;">
	<div
		use:draggable={{
			position,
			bounds: 'parent',
			onDrag: ({ offsetX, offsetY }) => {
				position = { x: offsetX, y: offsetY };
			}
		}}
		on:neodrag:end={(e) => (position = { x: 0, y: 0 })}
		class="joystick"
		style=" --size-x: {joystickSize.x}px;  --size-y: {joystickSize.y}px;"
	></div>
</div>

<style>
	.dragzone {
		--size-x: 128px;
		--size-y: 128px;
		width: min(var(--size-x), 90vw);
		height: var(--size-y);
		outline: 2px solid rgb(119, 119, 119);
		border-radius: 16px;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		user-select: none;
		cursor: pointer;
	}

	.joystick {
		--size-x: 64px;
		--size-y: 64px;
		width: var(--size-x);
		height: var(--size-y);
		border-radius: 16px;
		background-color: rgba(128, 128, 128, 0.541);
		transform: translate(var(--offset-x), var(--offset-y));
		transition: transform 0.075s ease-out;
	}

	@media (pointer: none), (pointer: coarse) {
		.joystick {
			transition: transform 0s linear;
		}
	}
</style>
