import { browser } from '$app/environment';

// Page seed data for use elsewhere
const urlParams = browser ? new URLSearchParams(window.location.search) : undefined;
const urlSeedString = urlParams?.get('seed') ?? null;
export const urlSeed = urlSeedString ? Number(urlSeedString) : null;
