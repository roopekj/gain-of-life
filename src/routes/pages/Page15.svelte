<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';

	export let player: PlayerStats;
	export let currentPage: number;
	player.setStats({ maxPoints: 10, workedPoints: 0, giftedPoints: 1, workAmount: 0 });
	function handleButtonClick() {
		console.log('Pressed: ' + currentPage);
		currentPage += 1;
	}
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			<p style="text-align: center">Let's try something else.</p>

			<div class="buttons">
				<button on:click={handleButtonClick}>
					I want to be a comedian.<br />
					I've always been told I'm funny.
				</button>
				<button on:click={handleButtonClick}>
					I want to be a lawyer.<br />
					I have an obsession with law and justice.
				</button>
				<button on:click={handleButtonClick}>
					I want to be a writer.<br />
					I can read and write extremely fast.
				</button>
			</div>
		</div>
	</div>
</PageTransition>

<style>
	p {
		font-size: 3vh;
	}
</style>
