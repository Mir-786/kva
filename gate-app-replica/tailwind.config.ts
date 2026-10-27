import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { gate: '#218d4b', paper: '#f7faf1' } } }, plugins: [] };
export default config;
