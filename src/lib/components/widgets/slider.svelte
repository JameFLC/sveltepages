<script lang="ts">
  export let min: number = 0;
  export let max: number = 100;
  export let step: number = 1;
  export let value: number = 0;
</script>

<input bind:value type="range" {min} {max} {step} />
