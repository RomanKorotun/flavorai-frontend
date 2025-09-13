import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyled } from "./GlobaStyles.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyled />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
