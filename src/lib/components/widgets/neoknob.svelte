<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import { linear } from 'svelte/easing';

	let position = { x: 0, y: 0 };

	let knobAngle: number = 0; // Accumulated angle, no longer limited to -360 to 360
	let lastAngle: number = 0; // Stores the last angle during movement
	let knobAngleDiff: number = 0; // Current change in angle during mouse movement

	function handleRotation() {
		// Calculate the angle in radians relative to the knob center
		const angleInRadians = Math.atan2(position.y, position.x);

		// Convert the angle from radians to degrees
		let angleInDegree = angleInRadians * (180 / Math.PI) + 90;

		// Calculate the difference between the last angle and the new angle
		const angleOffset = calculateAngleDifference(lastAngle, angleInDegree);

		// Accumulate the difference to keep the knob rotation continuous
		knobAngleDiff = angleOffset;
		knobAngle += knobAngleDiff; // Continuously accumulate, no limit on rotation

		// Update lastAngle for the next calculation
		lastAngle = angleInDegree;
	}

	function calculateAngleDifference(angle1: number, angle2: number): number {
		// Calculate the raw difference between two angles
		let diff = angle2 - angle1;

		diff = diff % 360;

		// Normalize the difference to be between -180 and 180 degrees
		if (diff > 180) diff -= 360;
		if (diff < -180) diff += 360;

		return diff;
	}
</script>

<div class="knob-container">
	<div class="knob" style="--angle: {knobAngle}deg;">
		<div class="tick" />
	</div>
	<div
		use:draggable={{
			position,
			onDrag: ({ offsetX, offsetY }) => {
				position = { x: offsetX, y: offsetY };
				handleRotation();
			}
		}}
		on:neodrag:end={(e) => (position = { x: 0, y: 0 })}
		class="drag-zone"
	/>
</div>

<style>
	.knob-container {
		position: relative;
	}

	.knob {
		--angle: 0deg;
		width: 80px;
		height: 80px;
		border: 5px solid rgb(119, 119, 119);
		border-radius: 500px;

		display: flex;
		justify-content: center;
		user-select: none;
		cursor: pointer;

		transform: rotate(var(--angle));

		transition: transform 0.075s ease-out;
	}

	@media (pointer: none), (pointer: coarse) {
		.knob {
			transition: transform 0s linear;
		}
	}

	.tick {
		width: 8px;
		height: 38px;
		border-radius: 500px;
		background-color: red;
		transform: translate(0, -16px);
	}

	.drag-zone {
		background-color: transparent;
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
</style>
