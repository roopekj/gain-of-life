<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';
	import Points from '../Points.svelte';

	export let player: PlayerStats;
	export let currentPage: number;
	player.setStats({
		maxPoints: 10,
		workedPoints: 0,
		giftedPoints: 8,
		workAmount: 0.5,
		forgetAmount: 0
	});

	const opponent = new PlayerStats({
		maxPoints: 10,
		workedPoints: 0,
		giftedPoints: 1,
		workFrequency: 400,
		workAmount: 0.1,
		forgetAmount: 0
	});

	let isMaster = false;
	$: {
		isMaster = player.master;
		opponent.stop = isMaster;
	}

	let players = [player, opponent];
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			{#if isMaster == true}
				<p>
					Nice.<br />
					They didn't stand a chance.
				</p>
			{:else}
				<p>Show them what you've got.</p>
				<h4>Press [Space] to put in some work</h4>
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
