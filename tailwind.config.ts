import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			colors: {
				white: "#FFFFFF",
				black: "#050505",
				"neutral-light": "#FFFFFF",
				"neutral-mid": "#DBDFD0",
				"neutral-dark": "#474747",
				primary: "#AD343E",
				secondary: "#2C2F24",
				surface: "#F9F9F7",
			},
			borderRadius: {
				'c-xs': "0.25rem",  // 4px
				'c-sm': "0.5rem",   // 8px
				'c-md': "0.75rem",  // 12px
				'c-lg': "1rem",     // 16px
				'c-xl': "1.75rem",  // 28px
			  },
			fontFamily: {
				'playfair': ["Playfair Display", "arial", "serif"],
				'default': ["DM Sans", "Roboto", "sans-serif"],
			},
			fontSize: {
				'dis-l': ["6.25rem", { lineHeight: '6rem', fontWeight: 'normal' }],

				'head-l': ['3.43rem', { lineHeight: '3.78rem', fontWeight: '500' }],
				'head-m': ['1.5rem', { lineHeight: '1.87rem', fontWeight: 'bold' }],

				'body-l': ['1.5rem', { lineHeight: '2rem', fontWeight: 'normal' }],
				'body-l-bold': ['1.5rem', { lineHeight: '1.75rem', fontWeight: '500' }],
				'body-m': ['1.125rem', { lineHeight: '1.75rem', fontWeight: 'normal' }],
				'body-m-bold': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }],
				'body-s': ['1rem', { lineHeight: '1.5rem', fontWeight: 'normal' }],
				'body-s-bold': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],

				'label-l': ['1.5rem', { lineHeight: '1.625rem', fontWeight: '500' }],
				'label-m': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }],
				'label-s': ['1rem', { lineHeight: '1.5rem', fontWeight: 'bold' }],
			},
		},
	},
	plugins: [
	],
} satisfies Config;
