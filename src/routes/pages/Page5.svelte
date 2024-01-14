<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';
	import Points from '../Points.svelte';

	export let player: PlayerStats;
	player.setStats({
		maxPoints: 10,
		workedPoints: 0,
		giftedPoints: 1,
		workAmount: 0.5,
		forgetAmount: 0
	});

	let players = [player];

	let isMaster = false;
	$: isMaster = player.master;
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			{#if isMaster == true}
				<p>
					Good job.<br />
					That took a bit of effort.<br />
					Maybe you studied for a test in your weakest subject.<br />
					Or you're just not that good at solving sudokus.<br />
					Again, whatever it is that applies to you.
				</p>
			{:else}
				<p>
					Your talent defines how much progress you make every time you put in work.<br />
					The less talent, the more work is required.
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
