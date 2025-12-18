/**
 * Constantes y utilidades compartidas
 */

export interface NavItem {
	href: string;
	label: string;
	isExternal?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
	{ href: '/', label: 'Home' },
	{ href: '/#products-section', label: 'Products' },
	{ href: 'https://apexcanopies.com/', label: 'Commercial', isExternal: true },
	{ href: '/gallery', label: 'Gallery' },
	{ href: '/#company-video-section', label: 'About us' },
];

