<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';
	import Points from '../Points.svelte';

	export let player: PlayerStats;
	export let currentPage: number;
	player.setStats({ maxPoints: 25, workedPoints: 0, giftedPoints: 20, workAmount: 0.2 });

	const opponent1 = new PlayerStats({
		maxPoints: 15,
		workedPoints: 0,
		giftedPoints: 3,
		workFrequency: 1000,
		workAmount: 0.5,
		forgetAmount: 0
	});

	const opponent2 = new PlayerStats({
		maxPoints: 22,
		workedPoints: 0,
		giftedPoints: 5,
		workFrequency: 4,
		workAmount: 0.01,
		forgetAmount: 0
	});

	const opponent3 = new PlayerStats({
		maxPoints: 20,
		workedPoints: 0,
		giftedPoints: 4,
		workFrequency: 80,
		workAmount: 0.1,
		forgetAmount: 0
	});

	let players = [player, opponent1, opponent2, opponent3];

	let isMaster = player.master;
	$: {
		isMaster = player.master;
		if (isMaster) {
			opponent1.stop = true;
			opponent2.stop = true;
			opponent3.stop = true;
		}
	}
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			{#if isMaster == true}
				<p>
					You could've still lost,<br />
					but winning required very little work.
				</p>
			{:else}
				<p>Don't feel bad.</p>
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
