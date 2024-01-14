<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';
	import Points from '../Points.svelte';

	export let player: PlayerStats;
	player.setStats({
		maxPoints: 10,
		workedPoints: 0,
		giftedPoints: 8,
		workAmount: 0.5,
		forgetAmount: 0
	});

	let players = [player];

	let isMaster = player.master;
	$: isMaster = player.master;
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			{#if isMaster == true}
				<p>
					There you go.<br />
					A little push goes a long way.
				</p>
			{:else}
				<p>
					Some things require neither talent nor work.<br />
					This comes in many flavors: nepotism, corruption, luck...<br />
					Opportunities rain from the sky for you.
				</p>
			{/if}
			<h4>Press [Space] to put in some work</h4>
		</div>
		<Points {players} />
	</div>
</PageTransition>

<style>
	p {
		font-size: 2.3vh;
	}
</style>
