<script lang="ts">
	import { base } from '$app/paths';
	import Counter from '$lib/components/counter.svelte';
</script>

<h1>Welcome to the blog</h1>
<a href="{base}/">Go home</a>

<h3>Here is a conter for you</h3>

<Counter />

<a href="{base}/blog/my-first-blog">Go to my first blog</a>
<a href="{base}/blog/my-second-blog">Go to my second blog</a>
<a href="{base}/blog/my-third-blog">Go to my second blog</a>
