import type { ImageMetadata } from "astro";
import pergoloftImageA from "../assets/images/pergoloft/pergoloft-image-a.webp";
import pergoloftImageB from "../assets/images/pergoloft/pergoloft-image-b.webp";
import pergoloftImageC from "../assets/images/pergoloft/pergoloft-image-c.webp";
import pergoloftImageD from "../assets/images/pergoloft/pergoloft-image-d.webp";
import pergoloftImageE from "../assets/images/pergoloft/pergoloft-image-e.webp";
import pergoloftImageF from "../assets/images/pergoloft/pergoloft-image-f.webp";
import pergoloftImageG from "../assets/images/pergoloft/pergoloft-image-g.webp";
import sukkahPergoloft from "../assets/images/pergoloft/sukkah-pergoloft.png";

export type PergoloftGalleryItem = {
  src: ImageMetadata;
  alt: string;
  width: number;
  height: number;
};

function alt(label: string): string {
  return `Pergoloft glass pergola installation — ${label}`;
}

function item(src: ImageMetadata, label: string): PergoloftGalleryItem {
  return {
    src,
    alt: alt(label),
    width: src.width,
    height: src.height,
  };
}

/**
 * Orden del visor a pantalla completa (índice 0 = primera diapositiva).
 * Reordena o añade/quita entradas aquí; el visor y los enlaces usan este orden.
 */
export const pergoloftGalleryImages: PergoloftGalleryItem[] = [
  item(pergoloftImageA, "Outdoor living space"),
  item(pergoloftImageB, "Glass roof detail"),
  item(pergoloftImageC, "Patio installation"),
  item(pergoloftImageD, "Residential pergola"),
  item(pergoloftImageE, "Evening ambiance"),
  item(pergoloftImageF, "Full structure view"),
  item(pergoloftImageG, "Custom layout"),
  item(sukkahPergoloft, "Sukkah configuration"),
];

/**
 * Índices dentro de `pergoloftGalleryImages` para las 4 miniaturas de la sección.
 * Ejemplo: [0, 2, 4, 6] muestra la 1ª, 3ª, 5ª y 7ª foto del visor.
 */
export const pergoloftGalleryPreviewIndices: readonly number[] = [0, 1, 2, 3];
