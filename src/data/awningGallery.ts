import type { ImageMetadata } from 'astro';

export interface AwningGalleryImage {
	src: ImageMetadata;
	alt: string;
	aspectRatio: number;
	width: number;
	height: number;
}

function toItem(path: string, image: ImageMetadata): AwningGalleryImage {
	const aspectRatio =
		image.width && image.height ? image.width / image.height : 1.5;
	return {
		src: image,
		alt: `Roll-up awning installation - ${path.split('/').pop()?.replace(/\.(webp|png|jpg|jpeg)$/i, '') || 'Gallery image'}`,
		aspectRatio,
		width: image.width,
		height: image.height,
	};
}

const lookModules = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/images/awnings/look/*.{webp,png,jpg,jpeg}',
	{ eager: true }
);

/** Evita entradas duplicadas (p. ej. rutas con distinta capitalización en Windows). */
function dedupeGlobEntries<T>(
	entries: [string, T][]
): [string, T][] {
	const seen = new Set<string>();
	return entries.filter(([path]) => {
		const key = path.replace(/\\/g, '/').toLowerCase();
		if (seen.has(key)) return false;
		seen.add(key);
		return true;
	});
}

const rootModules = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/images/awnings/*.{webp,png,jpg,jpeg}',
	{ eager: true }
);

/** Orden A, B, C… según el sufijo `awning-X` en el nombre del archivo (no por orden alfabético del path). */
function lookLetterRank(path: string): number {
	const m = path.match(/awning-([A-Za-z])/i);
	if (!m) return 9999;
	return m[1].toUpperCase().charCodeAt(0);
}

const lookImages = dedupeGlobEntries(Object.entries(lookModules))
	.sort(([pathA], [pathB]) => {
		const diff = lookLetterRank(pathA) - lookLetterRank(pathB);
		return diff !== 0 ? diff : pathA.localeCompare(pathB);
	})
	.map(([path, mod]) => toItem(path, mod.default));

const rootImages = Object.entries(rootModules)
	.sort(([a], [b]) => a.localeCompare(b))
	.map(([path, mod]) => toItem(path, mod.default));

/** Full gallery: “Look” images first, then every image in `awnings/` root (viewer + deep links). */
export const allGalleryImages: AwningGalleryImage[] = [...lookImages, ...rootImages];

/** Images shown only on the awnings page preview (folder `awnings/look/`). */
export const previewLookImages = lookImages;
