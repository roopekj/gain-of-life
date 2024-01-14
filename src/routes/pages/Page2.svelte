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
				The green part is something you inherently have.<br />
				Money?<br />
				Connections?<br />
				How about health?<br />
				Anything that will help you along the way but doesn't require talent or work.
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
