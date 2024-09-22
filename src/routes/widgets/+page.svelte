<script lang="ts">
	import Centerer from '$lib/components/centerer.svelte';
	import Counter from '$lib/components/counter.svelte';
	import Joystick from '$lib/components/widgets/joystick.svelte';
	import Knob from '$lib/components/widgets/knob.svelte';
	import Neojoystick from '$lib/components/widgets/neojoystick.svelte';
	import Neoknob from '$lib/components/widgets/neoknob.svelte';
	import Physicswheel from '$lib/components/widgets/physicswheel.svelte';
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
	<Neoknob />
	<br />
	<br />
	<Neojoystick containerSize={new Pos(512, 512)} joystickSize={new Pos(64 + 32, 64 + 32)} />

	<br />
	<br />
	<Physicswheel damping={3} speed={-2} />
</Centerer>
