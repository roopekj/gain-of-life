<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';
	import Points from '../Points.svelte';

	export let player: PlayerStats;
	export let currentPage: number;
	player.setStats({ maxPoints: 25, workedPoints: 0, giftedPoints: 1, workAmount: 3 });

	const opponent1 = new PlayerStats({
		maxPoints: 25,
		workedPoints: 0,
		giftedPoints: 13,
		workFrequency: 1000,
		workAmount: 0.5,
		forgetAmount: 0
	});

	const opponent2 = new PlayerStats({
		maxPoints: 25,
		workedPoints: 0,
		giftedPoints: 5,
		workFrequency: 1,
		workAmount: 0.003,
		forgetAmount: 0
	});

	let players = [player, opponent1, opponent2];

	let isMaster = player.master;
	$: {
		isMaster = player.master;
		if (isMaster) {
			opponent1.stop = true;
			opponent2.stop = true;
		}
	}
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			{#if isMaster == true}
				<p>Much better.</p>
			{:else}
				<p>No need to rush.</p>
			{/if}
		</div>
		<Points {players} />
	</div>
</PageTransition>

<style>
	p {
		font-size: 3vh;
	}
</style>
