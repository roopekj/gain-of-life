<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';

	export let player: PlayerStats;
	export let currentPage: number;
	player.setStats({ maxPoints: 10, workedPoints: 0, giftedPoints: 1, workAmount: 0 });

	let players = [player];
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			<p>
				Choosing what to work towards in life is a skill.<br />
				You can only work so much.<br />
				Effort is a limited resource.
			</p>
		</div>
	</div>
</PageTransition>

<style>
	p {
		font-size: 4vh;
	}
</style>
