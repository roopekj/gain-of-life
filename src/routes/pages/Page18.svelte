<script lang="ts">
	import { PlayerStats } from '../PlayerStats';
	import PageTransition from '../PageTransition.svelte';

	export let player: PlayerStats;
	export let currentPage: number;

	function handleButtonClick() {
		console.log('Pressed: ' + currentPage);
		currentPage += 1;
	}
</script>

<PageTransition>
	<div class="parent">
		<div class="info">
			<p style="text-align: center">How about a different scenario.</p>
			<div class="buttons">
				<button on:click={handleButtonClick}>
					I want to be a businessman.<br />
					My father is a CEO.
				</button>
				<button on:click={handleButtonClick}>
					I want to be a politician.<br />
					I come from a long line of politicians.
				</button>
				<button on:click={handleButtonClick}>
					I want to be an actor, actress or a model.<br />
					I'm very attractive.
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
