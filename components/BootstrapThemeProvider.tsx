import React, { PropsWithChildren, useContext, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

// 👇 define a map of all the themes we'll be using in the app
const ThemeMap = {
  main: "/styles/main.css",
  custom: "/styles/custom.css",
  cerulean: "https://bootswatch.com/5/cerulean/bootstrap.min.css",
  cosmo: "https://bootswatch.com/5/cosmo/bootstrap.min.css",
};

type ThemeKey = keyof typeof ThemeMap;

type ThemeContextState = {
  theme: ThemeKey;
  setTheme(theme: ThemeKey): void;
};

const ThemeContext = React.createContext<ThemeContextState>({
  theme: "main",
  setTheme: () => {},
});

const BootstrapThemeProvider = (props: PropsWithChildren) => {
  const [theme, setTheme] = useLocalStorage<ThemeKey>("theme", "main");

  // 👇 when the theme changes we'll append a new link element pointing to the css url.
  useEffect(() => {
    if (theme) {
      //create a link element
      var themesheet = document.createElement("link");
      themesheet.href = ThemeMap[theme];
      themesheet.id = "theme";
      themesheet.rel = "stylesheet";

      //remove previous element if any;
      const prevTheme = document.getElementById("theme");
      if (prevTheme) {
        document.head.removeChild(prevTheme);
      }
      //if theme is not "main" we append the link
      if (theme !== "main") {
        document.head.append(themesheet);
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default BootstrapThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Use <BootstrapThemeProvider> in Parent.");
  }

  return context;
};
