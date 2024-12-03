import { useContext } from "react";
import Router from "./Router";
import { GlobalStyles } from "./components/styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/theme";
import { ThemeContext } from "./components/contexts/ThemeContext";
import { ModalContextProvider } from "./components/contexts/ModalContext";

function App() {
  const { theme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={mode}>
      <ModalContextProvider>
        <GlobalStyles />
        <Router />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
