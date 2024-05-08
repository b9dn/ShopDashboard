import "../styles/stylesShared.css";
import "../styles/stylesNavigation.css";
import "../styles/stylesAdvice.css";
import { LanguageContext } from "../context/Language";
import { useContext } from "react";

export const Advice = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="content">
      <div className="dataContainer Advice">{languageData["Porada1"]}</div>
      <div className="dataContainer Advice">{languageData["Porada2"]}</div>
      <div className="dataContainer Advice">{languageData["Porada3"]}</div>
    </div>
  );
};
