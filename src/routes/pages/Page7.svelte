<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';
	import Points from '../Points.svelte';

	export let player: PlayerStats;
	player.setStats({
		maxPoints: 10,
		workedPoints: 0,
		giftedPoints: 8,
		workAmount: 0.5,
		forgetAmount: 0
	});

	const opponent = new PlayerStats({
		maxPoints: 10,
		workedPoints: 2,
		giftedPoints: 1,
		workFrequency: 3000,
		workAmount: 0.1,
		forgetAmount: 0
	});

	let players = [player, opponent];

	let isMaster = player.master;
	$: {
		isMaster = player.master;
		if (isMaster) {
			opponent.stop = true;
		}
	}
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			{#if isMaster == true}
				<p>
					Congratulations.<br />
					You won.
				</p>
			{:else}
				<p>
					Let's give you some competition.<br />
					This person is applying to the same university or job.<br />
					Or maybe they're competing in the same sport or for the same partner.<br />
					However, they're not particularly talented, hard-working or well positioned for it.<br />
					Show them what you've got.
				</p>
			{/if}
			<h4>Press [Space] to put in some work</h4>
		</div>
		<Points {players} />
	</div>
</PageTransition>

<style>
	p {
		font-size: 2.3vh;
	}
</style>
