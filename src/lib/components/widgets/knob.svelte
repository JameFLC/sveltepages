<script lang="ts">
  import { Pos } from '$lib/types';
  import { createEventDispatcher } from 'svelte';

  const mousedownPos: Pos = new Pos();

  let knob: Element;

  let isMouseDown = false;

  let mouseCenterOffset: Pos = new Pos();
  let knobAngle = 0; // Accumulated angle, no longer limited to -360 to 360
  let lastAngle: number = 0; // Stores the last angle during movement

  let knobDiff: number = 0; // Current change in angle during mouse movement

  const dispatch = createEventDispatcher();

  function onMouseDown(event: MouseEvent) {
    // Start tracking the mouse
    isMouseDown = true;
    mousedownPos.x = event.clientX;
    mousedownPos.y = event.clientY;

    handleRotation(event);
    // Attach listeners to the window to track even outside of the component
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  function onMouseMove(event: MouseEvent) {
    if (isMouseDown) {
      handleRotation(event);
    }
  }

  function handleRotation(event: MouseEvent) {
    const mousePos: Pos = new Pos(event.clientX, event.clientY);

    const knobRect = knob.getBoundingClientRect();
    const knobCenter = new Pos(
      (knobRect.left + knobRect.right) / 2,
      (knobRect.top + knobRect.bottom) / 2
    );

    mouseCenterOffset = mousePos.sub(knobCenter);

    // Calculate the angle in radians relative to the knob center
    const angleInRadians = Math.atan2(mouseCenterOffset.y, mouseCenterOffset.x);

    // Convert the angle from radians to degrees
    let angleInDegree = angleInRadians * (180 / Math.PI) + 90;

    // Calculate the difference between the last angle and the new angle
    const angleOffset = calculateAngleDifference(lastAngle, angleInDegree);

    // Accumulate the difference to keep the knob rotation continuous
    knobDiff = angleOffset;
    knobAngle += knobDiff; // Continuously accumulate, no limit on rotation

    dispatch('angleChanged', { knobAngle }); // Notify the parent of the change

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

  function onMouseUp() {
    // Stop tracking the mouse
    isMouseDown = false;

    // Remove listeners since we no longer need to track
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }
</script>

<!-- The knob element that rotates -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div bind:this={knob} class="knob" on:mousedown={onMouseDown} style="--angle: {knobAngle}deg;">
  <div class="tick"></div>
</div>

<style>
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

  .tick {
    width: 8px;
    height: 38px;
    border-radius: 500px;
    background-color: red;
    transform: translate(0, -16px);
  }
</style>
