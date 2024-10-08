/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: "#1D1F26",
        primary: "#22AC59",
        "primary-dark": "#34A96259",
        "navbar-scroll": "#00000059",
        "navbar-border": "#00000066",
        slogan: "#C7CAD6",
        "embed-link": "#00B0F4C4",
        "embed-description": "#FFFFFF80",
        "embed-stroke": "#FFFFFF33",
        "embed-border": "#00FF488C",
        "success-date": "#898989A3",
        "partners-fill": "#FFFFFF05",
        "card-border": "#FFFFFF0D",
        "profits-background": "#1A1C22",
        "mobile-background": "#22252ECC",
        "mobile-border": "#FFFFFF26",
        "message-description": "#FFFFFF40",
        "footer-border": "#303239",
      },
      fontFamily: {
        sans: ["Inter"],
      },
      fontSize: {
        "1.75vw": "1.75vw",
        "1.7vw": "1.6vw",
        "1.3vw": "1.3vw",
        "1.35vw": "1.35vw",
        "1.45vw": "1.45vw",
        xxs: "0.6rem",
      },
      spacing: {
        "2.5vw": "2.5vw",
        "3.5vw": "3.5vw",
        "3.25vw": "3.25vw",
        "5vw": "5vw",
        "6vw": "6vw",
        "foam-shoe-height": "8vw",
        "embed-logo": "2vw",
        "25vw": "25vw",
        "30vw": "30vw",
        "15vw": "15vw",
        108: "108",
      },
      inset: {
        "-18": "-4.5rem",
        "1/5": "20%",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
      },
      letterSpacing: {
        extrawidest: "0.3em",
      },
      maxWidth: {
        "1/3": "33.33%",
        "1/2": "50%",
      },
      borderRadius: {
        half: "50%",
      },
      blur: {
        xs: "1px",
      },
    },
  },
  plugins: [],
}

