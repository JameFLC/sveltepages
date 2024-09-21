<script lang="ts">
	import Centerer from '$lib/components/centerer.svelte';
	import Counter from '$lib/components/counter.svelte';
	import Joystick from '$lib/components/widgets/joystick.svelte';
	import Knob from '$lib/components/widgets/knob.svelte';
	import Slider from '$lib/components/widgets/slider.svelte';
	import { Pos } from '$lib/types';

	let sliderValue: number;

	let angle: number;
	let offset: Pos;
</script>

<Counter />

<p>Value of the slider is <kbd>baba</kbd> <code>{sliderValue}</code></p>

<Slider bind:value={sliderValue} step={1} />

<Centerer>
	<Knob
		on:angleChanged={(e) => {
			angle = e.detail.knobAngle;
		}}
	/>
	<p>angle is {angle ? angle.toFixed(2) : '0.00'} degrees</p>
	<br />
	<Joystick
		containerSize={new Pos(1024, 512)}
		joystickSize={new Pos(64 + 32, 64 + 32)}
		on:angleChanged={(e) => {
			angle = e.detail.clampedOffset;
		}}
	/>
	{#if offset}
		<p>offset is {offset.x.toFixed(0)} : {offset.y.toFixed(0)}</p>
	{/if}
</Centerer>
