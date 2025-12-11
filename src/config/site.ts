/**
 * Configuración del sitio
 * Información general y constantes del sitio
 */
export const SITE_CONFIG = {
	title: 'Tri State Awnings',
	tagline: 'Retractable, stylish awnings built to last',
	description: 'Retractable, stylish awnings built to last — installed with zero hassle. Trusted across Tri State Area.',
	url: 'https://tristateawnings.com',
	author: 'Tri State Awnings',
} as const;

/**
 * Genera un título completo para la página
 * Formato: "Page Title - Site Title" o solo "Site Title" si no hay título de página
 */
export function getPageTitle(pageTitle?: string): string {
	if (!pageTitle) {
		return SITE_CONFIG.title;
	}
	return `${pageTitle} - ${SITE_CONFIG.title}`;
}

