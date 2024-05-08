import "./styles.css";
import { Navig } from "./website/Navigation";
import { ThemeProvider } from "./context/Theme";
import { LanguageProvider } from "./context/Language";
import Store from "./store";
import { Provider } from "react-redux";
import React, { StrictMode } from "react";

export default function App() {
  localStorage.clear();
  return (
    <div className="App">
      <LanguageProvider>
        <ThemeProvider>
          <Provider store={Store}>
            <Navig />
          </Provider>
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}
