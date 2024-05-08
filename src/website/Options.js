import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { Menu } from "../shared/menu";
import { useState, useEffect } from "react";
import "../styles/stylesShared.css";
import "../styles/stylesOptions.css";
import polskiImage from "../assets/images/polski.svg";
import polskiImageDark from "../assets/images/polski_ciemny.svg";
import angielskiImage from "../assets/images/angielski.svg";
import angielskiImageDark from "../assets/images/angielski_ciemny.svg";
import darkThemeImage from "../assets/images/Color_Mode_light.svg";
import lightThemeImage from "../assets/images/Color_Mode.svg";
import { LanguageContext } from "../context/Language";

export const Options = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang, languageData } = useContext(LanguageContext);
  const itemsLang = [languageData["Polski"], languageData["Angielski"]];
  const itemsTheme = [languageData["Ciemny"], languageData["Jasny"]];
  const [clicked, setClicked] = useState(false);
  const initialChosen = localStorage.getItem("chosenLanguage") || "Polski";
  const [chosen, setChosen] = useState(initialChosen);
  const initialChosenTheme =
    localStorage.getItem("chosenTheme") || (lang === "pl" ? "Ciemny" : "Dark");
  const [chosenOptionTheme, setChosenTheme] = useState(initialChosenTheme);
  const changeLang = () => {
    if (chosen === itemsLang[0]) {
      setLang("pl");
      setChosen("Polski");
      localStorage.setItem(
        "chosenTheme",
        chosenOptionTheme === "Dark" ? "Ciemny" : "Jasny"
      );
      setChosenTheme(chosenOptionTheme === "Dark" ? "Ciemny" : "Jasny");
      localStorage.setItem("chosenLanguage", "Polski");
    } else {
      setLang("en");
      setChosen("English");
      localStorage.setItem(
        "chosenTheme",
        chosenOptionTheme === "Ciemny" ? "Dark" : "Light"
      );
      setChosenTheme(chosenOptionTheme === "Ciemny" ? "Dark" : "Light");
      localStorage.setItem("chosenLanguage", "English");
    }
  };
  const changeLangImage = () => {
    if (lang == "pl") {
      setLang("en");
      setChosen("English");
      localStorage.setItem(
        "chosenTheme",
        chosenOptionTheme === "Ciemny" ? "Dark" : "Light"
      );
      setChosenTheme(chosenOptionTheme === "Ciemny" ? "Dark" : "Light");
      localStorage.setItem("chosenLanguage", "English");
    } else {
      setLang("pl");
      setChosen("Polski");
      localStorage.setItem(
        "chosenTheme",
        chosenOptionTheme === "Dark" ? "Ciemny" : "Jasny"
      );
      setChosenTheme(chosenOptionTheme === "Dark" ? "Ciemny" : "Jasny");
      localStorage.setItem("chosenLanguage", "Polski");
    }
  };
  const [clickedTheme, setClickedTheme] = useState(false);
  const changeTheme = () => {
    if (chosenOptionTheme == itemsTheme[0]) {
      setTheme(true);
      localStorage.setItem("chosenTheme", chosenOptionTheme);
    } else {
      setTheme(false);
      localStorage.setItem("chosenTheme", chosenOptionTheme);
    }
  };
  const changeThemeWithImage = () => {
    if (theme) {
      setChosenTheme(languageData["Jasny"]);
      localStorage.setItem("chosenTheme", languageData["Jasny"]);
    } else {
      setChosenTheme(languageData["Ciemny"]);
      localStorage.setItem("chosenTheme", languageData["Ciemny"]);
    }
    setTheme(!theme);
  };

  return (
    <div className="optionContent">
      <div className="containerOption">
        <div className="miniatureOptions" onClick={changeLangImage}>
          <div
            className="circleInsideOptions"
            style={{
              backgroundImage:
                lang === "pl"
                  ? `url(${polskiImageDark})`
                  : `url(${angielskiImageDark})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="buttonsContainer">
          <div className="menuExpandableOptions">
            <Menu
              setClicked={setClicked}
              clicked={clicked}
              chosen={chosen}
              setChosen={setChosen}
              width="140px"
              items={itemsLang}
            />
          </div>
          <div className="actionButton" onClick={changeLang}>
            {languageData["Zastosuj"]}
          </div>
        </div>
      </div>
      <div className="containerOption">
        <div className="miniatureOptions" onClick={changeThemeWithImage}>
          <div
            className="circleInsideOptions"
            style={{
              backgroundImage: theme
                ? `url(${darkThemeImage})`
                : `url(${lightThemeImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="buttonsContainer">
          <div className="menuExpandableOptions">
            <Menu
              setClicked={setClickedTheme}
              clicked={clickedTheme}
              chosen={chosenOptionTheme}
              setChosen={setChosenTheme}
              width="140px"
              items={itemsTheme}
            />
          </div>
          <div onClick={changeTheme} className="actionButton">
            {languageData["Zastosuj"]}
          </div>
        </div>
      </div>
    </div>
  );
};
