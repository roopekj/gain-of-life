<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { PlayerStats } from './PlayerStats';

	// Constants
	const forgetFrequency = 1;

	// Store to manage the state of players
	const playerStore = writable<PlayerStats[]>([]);

	// Props
	export let players: PlayerStats[] = [];
	export let barWidth: number = 10;
	export let maxBarHeight: number = 30;
	export let spacing: number = 2;

	// Variables
	let dimensions: { width: number; height: number } = { width: 0, height: 0 };

	// Set starting points on component mount
	onMount(() => {
		playerStore.set(players);

		const forgetInterval = setInterval(() => {
			players.forEach((player) => player.forget());
			playerStore.set(players);
		}, forgetFrequency);

		const workIntervals: number[] = [];
		players.forEach((player, _) => {
			if (!player.workFrequency) return;
			const workInterval = setInterval(() => {
				player.work();
				playerStore.set(players);
			}, player.workFrequency);

			workIntervals.push(workInterval);
		});

		// Cleanup intervals on component destruction
		return () => {
			clearInterval(forgetInterval);
			workIntervals.forEach((interval) => clearInterval(interval));
		};
	});

	// Subscribe to store changes
	$: {
		const numPlayers = players.length;
		dimensions = {
			width: 40,
			height: maxBarHeight
		};
		barWidth = numPlayers > 0 ? (dimensions.width - (numPlayers - 1) * spacing) / numPlayers : 0;
	}
</script>

<!-- SVG rendering -->
<!--viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}-->
<svg
	viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
	role="img"
	aria-label="Interactive SVG"
>
	{#each $playerStore as player, index}
		<!-- Render the rectangle for giftedPoints (green) -->
		<rect
			x={index * (barWidth + spacing)}
			y={dimensions.height - player.giftedPoints}
			width={barWidth}
			height={player.giftedPoints}
			fill="#cefad0"
		/>

		<!-- Render the rectangle for workedPoints (light blue) -->
		<rect
			x={index * (barWidth + spacing)}
			y={dimensions.height - player.workedPoints - player.giftedPoints}
			width={barWidth}
			height={player.workedPoints}
			fill="#a6dcef"
		/>

		<!-- Draw a dotted line at player.maxPoints -->
		<line
			x1={index * (barWidth + spacing)}
			y1={dimensions.height - player.maxPoints}
			x2={index * (barWidth + spacing) + barWidth}
			y2={dimensions.height - player.maxPoints}
			stroke="red"
			stroke-width="0.1"
			stroke-dasharray="0.2, 0.2"
		/>
	{/each}
</svg>
