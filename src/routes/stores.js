import { writable } from 'svelte/store';
// import { onMount } from "svelte";

export const themeStore = writable("light");
export const langStore = writable("de");
export const webStore = writable("https://de.pattern.monster");

// export let themeStore;
