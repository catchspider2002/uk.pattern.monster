import { writable } from 'svelte/store';
// import { onMount } from "svelte";

export const themeStore = writable("light");
export const langStore = writable("uk");
export const webStore = writable("https://uk.pattern.monster");

// export let themeStore;
