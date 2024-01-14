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
			<p>This is you.</p>
		</div>
		<Points {players} />
	</div>
</PageTransition>

<style>
	p {
		font-size: 3.3vh;
	}
</style>
