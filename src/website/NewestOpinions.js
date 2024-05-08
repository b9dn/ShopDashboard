import { useContext } from "react";
import { LanguageContext } from "../context/Language";

export const Opinions = () => {
  const { languageData } = useContext(LanguageContext);
  return (
    <div style={{ fontSize: "70px" }}>{languageData["Najnowsze opinie"]}</div>
  );
};
