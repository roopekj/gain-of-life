<script lang="ts">
	import { PlayerStats } from './PlayerStats';

	import { Page0, Page1, Page2, Page3, Page4, Page5, Page6, Page7 } from './PageLoader.ts';

	const pages = [Page0, Page1, Page2, Page3, Page4, Page5, Page6, Page7];

	const player = new PlayerStats({
		maxPoints: 25,
		workedPoints: 2,
		giftedPoints: 10,
		workFrequency: 0,
		workAmount: 1,
		forgetAmount: 0.01
	});

	const maxPage = pages.length - 1;
	let currentPage = 0;

	function handleKeyDown(event) {
		if (
			event.key === 'ArrowDown' &&
			currentPage < maxPage &&
			(!player.workAmount || player.master)
		) {
			currentPage = currentPage + 1;
			player.reset();
		} else if (event.key === 'ArrowUp') {
			currentPage = Math.max(currentPage - 1, 0);
			player.reset();
		} else if (event.key === ' ') {
			// Prevent holding the button down
			if (event.repeat) {
				return;
			}
			player.work();
			console.log(player.currentPoints());
			if (player.currentPoints() == player.maxPoints) {
				player.master = true;
			}
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<svelte:head>
	<title>Gain Of Life</title>
	<meta name="description" content="Gain Of Life" />
</svelte:head>

<section>
	{#if pages[currentPage]}
		<svelte:component this={pages[currentPage]} {player} />
	{/if}
</section>
