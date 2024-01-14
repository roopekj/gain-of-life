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
			<p style="height: 60vh; line-height: 5vh;">
				First, find the fields where you have the opportunity for success.<br />
				This comes down to luck. It's the way life goes sometimes. <br />
				Then, pick one of those fields where you also have the talent to make your effort worth it.<br
				/>
			</p>
		</div>
	</div>
</PageTransition>

<style>
	p {
		font-size: 3vh;
	}
</style>
