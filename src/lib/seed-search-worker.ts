import type { SeedData } from './item-map';
import { createSeed, type Seed } from './seed';

onmessage = (event) => {
	const matched_seeds: SeedData[] = event.data;

	const res: Seed[] = [...matched_seeds.map((s) => createSeed(s))];

	postMessage(res);
};
