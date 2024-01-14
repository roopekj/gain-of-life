import { writable } from 'svelte/store';
import { PlayerStats } from './PlayerStats';

// Create a writable store with an initial instance of PlayerStats
const playerStats = writable(new PlayerStats());

// Export the store
export default playerStats;
