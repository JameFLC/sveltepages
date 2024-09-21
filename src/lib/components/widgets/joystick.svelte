<script lang="ts">
  import { Pos } from '$lib/types';
  import { createEventDispatcher } from 'svelte';

  export let containerSize: Pos = new Pos(128, 128);
  export let joystickSize: Pos = new Pos(64, 64);

  const mousedownPos: Pos = new Pos();

  let container: Element;
  let joystick: Element;

  let isMouseDown = false;

  const clampedOffset: Pos = new Pos();

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

    const containerRect = container.getBoundingClientRect();
    const containerSize = new Pos(containerRect.width, containerRect.height);
    const containerCenter = new Pos(
      (containerRect.left + containerRect.right) / 2,
      (containerRect.top + containerRect.bottom) / 2
    );

    const joystickRect = joystick.getBoundingClientRect();
    const joystickSize = new Pos(joystickRect.width, joystickRect.height);

    const maxOffset = new Pos(
      (containerSize.x - joystickSize.x) / 2,
      (containerSize.y - joystickSize.y) / 2
    );

    const unclampedOffset = mousePos.sub(containerCenter);

    clampedOffset.x = clamp(unclampedOffset.x, -maxOffset.x, maxOffset.x);
    clampedOffset.y = clamp(unclampedOffset.y, -maxOffset.y, maxOffset.y);

    dispatch('dragged', { clampedOffset });
  }

  function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
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
<div
  bind:this={container}
  class="dragzone"
  on:mousedown={onMouseDown}
  style=" --size-x: {containerSize.x}px;  --size-y: {containerSize.y}px;"
>
  <div
    bind:this={joystick}
    class="joystick"
    style="--offset-x: {clampedOffset.x}px; --offset-y: {clampedOffset.y}px; --size-x: {joystickSize.x}px;  --size-y: {joystickSize.y}px;"
  ></div>
</div>

<p>Offset is {clampedOffset.x} : {clampedOffset.y}</p>

<style>
  .dragzone {
    --size-x: 128px;
    --size-y: 128px;
    width: var(--size-x);
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
    --offset-x: 0px;
    --offset-y: 0px;
    --size-x: 64px;
    --size-y: 64px;
    width: var(--size-x);
    height: var(--size-y);
    border-radius: 16px;
    background-color: rgba(128, 128, 128, 0.541);
    transform: translate(var(--offset-x), var(--offset-y));
    transition: transform 0.075s ease-out;
  }
</style>
