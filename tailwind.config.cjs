const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily:{
				Brooklyn: ["Brooklyn"],
				Gilmer: ["Gilmer"]
			},
			spacing: {
				'160': '40rem',
			}
		}
	},

	plugins: []
};

module.exports = config;
