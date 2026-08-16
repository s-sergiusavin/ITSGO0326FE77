import natureBackground from "../assets/background3.jpg";

export const themes = {
  explore: {
    accent: "#2563eb",
    pageBackground: "#dfeeff",
    panelTint: "rgba(86, 142, 255, 0.14)",
    textColor: "#1f2937",
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.12), rgba(255,255,255,0.12))",
  },
  nature: {
    accent: "#1e8e3e",
    pageBackground: "#edf7ee",
    panelTint: "rgba(120, 190, 130, 0.18)",
    backgroundImage: `linear-gradient(rgba(255,255,255,0.22), rgba(255,255,255,0.22)), url(${natureBackground})`,
  },
  food: {
    accent: "#d62828",
    pageBackground: "#fff4e6",
    panelTint: "rgba(224, 160, 86, 0.18)",
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.22), rgba(255,255,255,0.22)), url('https://img.magnific.com/free-photo/confectionery-food-healthy-vegetable-salad-rough-surface_23-2148193073.jpg?t=st=1786904538~exp=1786908138~hmac=2eeb49042b74318773ac219827dc4e0cb6a1e8cbf940caf84f19a30ecfa110bf&w=1480')",
  },
  gaming: {
    accent: "#7c3aed",
    pageBackground: "#1a102d",
    panelTint: "rgba(160, 122, 220, 0.22)",
    textColor: "#ffffff",
    backgroundImage:
      "linear-gradient(rgba(18,10,30,0.55), rgba(18,10,30,0.55)), url('https://img.magnific.com/free-vector/gradient-geometric-shapes-dark-background_23-2148420730.jpg?t=st=1786904679~exp=1786908279~hmac=f62a0e2c8950dd3f2a4f5be3b61dfab11283f5c6ae24372e5209a6957d7cf211&w=1480')",
  },
};

export default themes;
