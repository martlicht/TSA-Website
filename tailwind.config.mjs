/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			/* Track record stats, inline icons: one token → size-stat-icon / w-stat-icon / etc. */
			spacing: {
				'stat-icon': '2.5rem',
			},
			fontFamily: {
				sans: ['Urbanist', 'system-ui', 'sans-serif'],
			},
			colors: {
				primary: {
					50: '#f0fdf4',
					100: '#dcfce7',
					200: '#bbf7d0',
					300: '#86efac',
					400: '#68C28C', // Color principal
					500: '#68C28C',
					600: '#5aad7a',
					700: '#4a8f66',
					800: '#3d7254',
					900: '#2f5642',
					DEFAULT: '#68C28C',
					dark: '#5aad7a',
					light: '#86efac',
				},
			},
		},
	},
	plugins: [],
};

