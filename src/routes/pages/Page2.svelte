<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';
	import Points from '../Points.svelte';

	export let player: PlayerStats;
	export let currentPage: number;
	player.setStats({ maxPoints: 10000, workedPoints: 0, giftedPoints: 1, workAmount: 0 });

	let players = [player];
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			<p>
				The green bar stands for luck.<br />
				Inheritance, family connections, natural ability, coicidences, you name it.<br />
				Things that will help you along the way but don't require talent or work.<br />
				You can't affect this.
			</p>
		</div>
		<Points {players} />
	</div>
</PageTransition>

<style>
	p {
		font-size: 2vh;
	}
</style>
