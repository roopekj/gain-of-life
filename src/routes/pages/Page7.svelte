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
					A little help goes a long way.
				</p>
			{:else}
				<p>
					For all of us, some fields don't require much talent or work.<br />
					Although your talent remains unchanged, you're lucky to have<br />
					more opportunities that carry you the rest of the way.<br />
				</p>
				<h4>Press [Space] to put in some work</h4>
			{/if}
		</div>
		<Points {players} />
	</div>
</PageTransition>

<style>
	p {
		font-size: 2.6vh;
	}
</style>
