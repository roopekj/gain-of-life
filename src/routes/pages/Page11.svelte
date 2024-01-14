<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';
	import Points from '../Points.svelte';

	export let player: PlayerStats;
	export let currentPage: number;
	player.setStats({ maxPoints: 10, workedPoints: 0, giftedPoints: 1, workAmount: 0.005 });

	let players = [player];

	$: {
		let worked = player.workedPoints;
		console.log(worked);
		if (worked >= player.workAmount * 39) {
			currentPage += 1;
		}
	}
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			<p>
				Let's say you want to be a musician, but aren't all that talented. <br />
				You aren't luckly enough to have a musician in your family either. <br />
				Give it a shot. Let's see how much you want it.
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
