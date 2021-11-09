export default /** @type {import('astro').AstroUserConfig} */ ({
	devOptions: {
		hostname: "0.0.0.0",
		port: 3000,
		tailwindConfig: "./tailwind.config.js",
	},
	renderers: ["@astrojs/renderer-preact"],
});
