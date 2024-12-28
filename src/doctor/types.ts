import type { buildSrc } from './build-src.js';

export type AppData = Awaited<ReturnType<typeof buildSrc>>;
