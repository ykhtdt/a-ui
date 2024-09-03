import type { Theme, ThemeColor } from "./theme-provider"

const ThemeScript = ({
  defaultTheme = "system",
  defaultThemeColor = "zinc"
}: {
  defaultTheme?: Theme
  defaultThemeColor?: ThemeColor
}) => {
  const scriptContent = `
    (function() {
      const savedTheme = localStorage.getItem("theme");
      const savedThemeColor = localStorage.getItem("themeColor");
      let theme = "${defaultTheme}";
      let themeColor = "${defaultThemeColor}";
      
      if (savedTheme) {
        theme = savedTheme;
      } else {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }

      if (savedThemeColor) {
        themeColor = savedThemeColor;
      }

      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-color-theme", themeColor);
      document.documentElement.className = \`color-theme-\${themeColor} \${theme}\`;
    })();
  `

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: scriptContent,
      }}
    />
  )
}

export default ThemeScript