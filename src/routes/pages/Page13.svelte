<script lang="ts">
	import { onMount } from 'svelte';
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';
	import Points from '../Points.svelte';

	export let player: PlayerStats;
	export let currentPage: number;
	player.setStats({ maxPoints: 10, workedPoints: 0, giftedPoints: 1, workAmount: 0.005 });

	const opponent = new PlayerStats({
		maxPoints: 25,
		workedPoints: 0,
		giftedPoints: 13,
		workFrequency: 4000,
		workAmount: 1,
		forgetAmount: 0
	});

	onMount(() => {
		// Move on after 20 seconds
		const concedeInterval = setInterval(() => {
			currentPage += 1;
		}, 20000);

		// Cleanup interval on component destruction
		return () => {
			clearInterval(concedeInterval);
		};
	});

	let players = [player, opponent];
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			<p>
				Go on, give it your all.<br />
				Honestly thought, it seems they're not even putting in much effort.<br />
				But does it matter?<br />
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
