<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';

	export let player: PlayerStats;
	export let currentPage: number;
	player.setStats({
		maxPoints: 10,
		workedPoints: 0,
		giftedPoints: 1,
		workAmount: 2,
		forgetAmount: 0
	});

	let players = [player];
	player.master = true;
	player.workedPoints = player.maxPoints - player.giftedPoints;
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			<p>
				Truth be told, that level of success is still quite low.<br />
				This means you achieved something fairly minor.<br />
				Hard things require much more success.<br />
				Still, good for you.
			</p>
		</div>
	</div>
</PageTransition>

<style>
	p {
		font-size: 3vh;
	}
</style>
