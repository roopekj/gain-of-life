<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';

	export let player: PlayerStats;
	export let currentPage: number;
	player.setStats({ maxPoints: 10, workedPoints: 0, giftedPoints: 1, workAmount: 0 });
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			<p style="height: 60vh; line-height: 4vh;">
				Success is a factor of all three attributes: luck, talent and work.<br />
				The further you go the better your competition gets.<br />
				There isn't a single person who is truly great at <i>anything</i> without all three factors.<br
				/>
				Even being good at something requires at least two.<br />
				Only mediocrity can be reached with one.<br />
			</p>
		</div>
	</div>
</PageTransition>

<style>
	p {
		font-size: 2.5vh;
	}
</style>
