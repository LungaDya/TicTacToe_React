import { useContext } from "react";
import Router from "./Router";
import { GlobalStyles } from "./components/styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/theme";
import { ThemeContext } from "./components/contexts/ThemeContext";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const { theme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Router />
      <MusicPlayer />
    </ThemeProvider>
  );
}

export default App;
