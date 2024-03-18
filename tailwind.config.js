/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fill-colordarktertiary": "var(--fill-colordarktertiary)",
        "fill-colorlighttertiary": "var(--fill-colorlighttertiary)",
        "label-colordarkprimary": "var(--label-colordarkprimary)",
        "label-colorlightprimary": "var(--label-colorlightprimary)",
        "neutrals-5": "var(--neutrals-5)",
        "neutrals-7": "var(--neutrals-7)",
        "neutrals-8": "var(--neutrals-8)",
        "primary-3": "var(--primary-3)",
        "primary-4": "var(--primary-4)",
        "primaryangel-white": "var(--primaryangel-white)",
        "secondaryblack-tint-3": "var(--secondaryblack-tint-3)",
        "separator-colordarkwith-transparency":
          "var(--separator-colordarkwith-transparency)",
        "separator-colorlightwith-transparency":
          "var(--separator-colorlightwith-transparency)",
        supportsuccess: "var(--supportsuccess)",
        "system-backgroundlightprimary": "var(--system-backgroundlightprimary)",
      },
    },
  },
  plugins: [],
};
