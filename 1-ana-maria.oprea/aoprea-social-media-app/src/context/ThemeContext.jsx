import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { themes } from "../data/themes";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("explore");

  useEffect(() => {
    const currentTheme = themes[theme];

    document.documentElement.style.setProperty(
      "--theme-accent",
      currentTheme.accent,
    );
    document.documentElement.style.setProperty(
      "--theme-page-bg",
      currentTheme.pageBackground,
    );
    document.documentElement.style.setProperty(
      "--theme-panel-tint",
      currentTheme.panelTint,
    );
    document.documentElement.style.setProperty(
      "--theme-text-color",
      currentTheme.textColor || "#1f2937",
    );
    document.body.style.backgroundColor = currentTheme.pageBackground;
    document.body.style.backgroundImage = currentTheme.backgroundImage;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.transition = "background 0.3s ease";
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme, themes }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};
