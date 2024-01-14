<script lang="ts">
	import { PlayerStats } from './PlayerStats';

	import {
		Page0,
		Page1,
		Page2,
		Page3,
		Page4,
		Page5,
		Page6,
		Page7,
		Page8,
		Page9,
		Page10,
		Page11,
		Page12,
		Page13,
		Page14,
		Page15,
		Page16,
		Page17,
		Page18,
		Page19,
		Page20,
		Page21,
		Page22,
		Page23,
		Page24,
		Page25
	} from './PageLoader.ts';

	const pages = [
		Page0,
		Page1,
		Page2,
		Page3,
		Page4,
		Page5,
		Page6,
		Page7,
		Page8,
		Page9,
		Page10,
		Page11,
		Page12,
		Page13,
		Page14,
		Page15,
		Page16,
		Page17,
		Page18,
		Page19,
		Page20,
		Page21,
		Page22,
		Page23,
		Page24,
		Page25
	];

	const player = new PlayerStats({
		maxPoints: 25,
		workedPoints: 2,
		giftedPoints: 10,
		workFrequency: 0,
		workAmount: 1,
		forgetAmount: 0
	});

	const maxPage = pages.length - 1;
	let currentPage = 0;

	let button_pages = [8, 11, 15, 18];

	function resetPlayer() {
		player.workedPoints = 0;
		player.master = false;
	}

	function handleKeyDown(event) {
		if (
			event.key === 'ArrowDown' &&
			currentPage < maxPage &&
			!button_pages.includes(currentPage) &&
			(!player.workAmount || player.master)
		) {
			resetPlayer();
			currentPage = currentPage + 1;
		} else if (event.key === 'ArrowUp' && currentPage > 0) {
			resetPlayer();
			currentPage = currentPage - 1;
		} else if (event.key === ' ') {
			// Prevent holding the button down
			if (event.repeat || player.stop) {
				return;
			}

			player.workedPoints = Math.min(
				player.maxPoints - player.giftedPoints,
				player.workedPoints + player.workAmount
			);

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
		<svelte:component this={pages[currentPage]} {player} bind:currentPage />
	{/if}
</section>
