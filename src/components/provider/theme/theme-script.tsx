import type { Theme, ColorTheme } from "./theme-provider"

const ThemeScript = ({
  defaultTheme,
  defaultColorTheme,
}: {
  defaultTheme?: Theme
  defaultColorTheme?: ColorTheme
}) => {
  const scriptContent = `
    (function() {
      const savedTheme = localStorage.getItem("theme");
      const savedColorTheme = localStorage.getItem("colorTheme");
      let theme = "${defaultTheme}";
      let colorTheme = "${defaultColorTheme}";
      
      if (savedTheme) {
        theme = savedTheme;
      } else if (theme) {
      } else {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }

      if (savedColorTheme) {
        colorTheme = savedColorTheme;
      }

      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-color-theme", colorTheme);
      document.documentElement.className = \`color-theme-\${colorTheme} \${theme}\`;
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