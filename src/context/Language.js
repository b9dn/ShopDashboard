import { createContext, useState, useEffect } from "react";
import translationDataPl from "../translations/pl.json";
import translationDataEn from "../translations/en.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("pl");
  const [languageData, setLanguageData] = useState({});
  useEffect(() => {
    fetchLanguageData();
  }, []);
  useEffect(() => {
    fetchLanguageData();
  }, [lang]);
  const fetchLanguageData = () => {
    if (lang === "pl") {
      setLanguageData(translationDataPl);
    } else {
      setLanguageData(translationDataEn);
    }
  };
  return (
    <LanguageContext.Provider value={{ lang, setLang, languageData }}>
      {children}
    </LanguageContext.Provider>
  );
};
