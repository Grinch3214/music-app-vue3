/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		maxHeight: {
			'300px': '300px',
		},
		maxWidth: {
			'300px': '300px',
		},
    extend: {},
  },
  plugins: [],
}

