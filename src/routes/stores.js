import { writable } from 'svelte/store';
// import { onMount } from "svelte";

export const themeStore = writable("light");
export const langStore = writable("nl");
export const webStore = writable("https://nl.pattern.monster");

// export let themeStore;
