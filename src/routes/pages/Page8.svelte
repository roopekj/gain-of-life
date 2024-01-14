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

	player.master = true;
	player.workedPoints = player.maxPoints - player.giftedPoints;

	function handleButtonClick() {
		player.master = false;
		currentPage += 1;
	}
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			<p>
				Let's give you some competition. <br />
				They're not particularly lucky, talented or hard-working.<br />
				This person is:
			</p>
			<div class="buttons">
				<button on:click={handleButtonClick}> Applying for the same job. </button>
				<button on:click={handleButtonClick}> Competing in the same sport. </button>
				<button on:click={handleButtonClick}> Interested in the same partner. </button>
			</div>
		</div>
	</div>
</PageTransition>

<style>
	p {
		font-size: 3vh;
	}
</style>
