<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';
	import Points from '../Points.svelte';

	export let player: PlayerStats;
	player.setStats({
		maxPoints: 10,
		workedPoints: 0,
		giftedPoints: 1,
		workAmount: 2,
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
					Great. You have achieved what you wanted.<br />
					However, that seemed easy. You probably wanted something fairly minor.<br />
					Like remembering the first few decimals of pi.<br />
					Hard things don't come that easy for anyone.
				</p>
			{:else}
				<p>But you aren't there yet. Let's work towards it.</p>
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
