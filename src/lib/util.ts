import { browser } from '$app/environment';

// URL data stuff
const urlParams = browser ? new URLSearchParams(window.location.search) : undefined;
const urlSeedString = urlParams?.get('seed') ?? null;
export const urlSeed = urlSeedString ? Number(urlSeedString) : null;
export const urlTab = urlParams?.get('tab') ?? null;

// Loading things
const loadingCharacterList = ['wizard', 'heavyblade', 'dancer', 'assassin', 'sniper'] as const;
type LoadingCharacter = (typeof loadingCharacterList)[number];
type LoadingCharacterData = {
	name: string; // sprite file
	color: string; // flight ring color
	width: number;
	height: number;
};
const loadingCharacterData: Record<LoadingCharacter, LoadingCharacterData> = {
	wizard: {
		name: 'wizard',
		color: '#b58cca',
		width: 500,
		height: 500
	},
	heavyblade: {
		name: 'heavyblade',
		color: '#b780a5',
		width: 625,
		height: 500
	},
	dancer: {
		name: 'dancer',
		color: '#c7baad',
		width: 500,
		height: 500
	},
	assassin: {
		name: 'assassin',
		color: '#708cdb',
		width: 500,
		height: 500
	},
	sniper: {
		name: 'sniper',
		color: '#768adb',
		width: 500,
		height: 500
	}
};

const randomCharacter =
	loadingCharacterList[Math.floor(loadingCharacterList.length * Math.random())];
export const currentLoadingCharacter = loadingCharacterData[randomCharacter];
