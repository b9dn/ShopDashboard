import React, { useState, useEffect, useContext } from "react";
import { Menu } from "../shared/menu";
import "../styles/stylesOrder.css";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/Language";

export const Orders = ({ logged }) => {
  const { lang, languageData } = useContext(LanguageContext);
  const navigate = useNavigate();

  if (logged == false) {
    return (
      <>
        <p>
          {languageData["Brak zamówień"]}
          <br />
          {languageData["Skorzystaj z porad"]}:
        </p>
        <div className="buttonContainerOrders">
          <div
            className="menuOption"
            id="buttonPorady"
            onClick={() => navigate("/advice")}
          >
            {languageData["Przejdź do porad"]}
          </div>
          <div
            className="menuOption"
            style={{ width: "80%" }}
            id="buttonKonsultant"
          >
            {languageData["Zadzwoń do konsultanta"]}
          </div>
        </div>
      </>
    );
  }

  const [clicked, setClicked] = useState(false);
  const initialChosen = lang === "pl" ? "Nieopłacone" : "Unpaid";
  const [chosen, setChosen] = useState(initialChosen);

  useEffect(() => {
    if (languageData) {
      setChosen(languageData["Nieopłacone"]);
    }
  }, [languageData]);

  const items = [
    languageData["Nieopłacone"],
    languageData["Niewysłane"],
    languageData["Zwroty"],
  ];

  const onclick = () => navigate("/orders", { state: chosen });
  return (
    <>
      <div id="orders">
        <div>{languageData["Zamówienia"]}</div>
        <Menu
          setClicked={setClicked}
          clicked={clicked}
          chosen={chosen}
          setChosen={setChosen}
          width="140px"
          items={items}
        />
        <div>
          <div className="actionButton" id="button" onClick={onclick}>
            {languageData["Zastosuj"]}
          </div>
        </div>
      </div>
    </>
  );
};
