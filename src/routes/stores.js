import { writable } from 'svelte/store';
// import { onMount } from "svelte";

export const themeStore = writable("light");
export const langStore = writable("sv");
export const webStore = writable("https://sv.pattern.monster");

// export let themeStore;
