<script>
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 100, duration: 200, delay: 200 }} out:fly={{ y: -100, duration: 200 }}>
	<slot />
</div>
