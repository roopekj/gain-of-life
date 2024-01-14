<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';
	import Points from '../Points.svelte';

	export let player: PlayerStats;
	player.setStats({ maxPoints: 10000, workedPoints: 0, giftedPoints: 1, workAmount: 0 });

	let players = [player];
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			<p>
				Think of the height of the bar at the bottom as representing something desirable.<br />
				Maybe your abilities at math? Your skill in cooking? Perhaps your knowledge about history.<br
				/>
				Whatever it is that matters to you.<br />
				You'd like to get better.
			</p>
		</div>
		<Points {players} />
	</div>
</PageTransition>

<style>
	p {
		font-size: 2.3vh;
	}
</style>
