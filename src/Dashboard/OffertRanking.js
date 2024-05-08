import React, { useState, useContext } from "react";
import { Menu } from "../shared/menu";
import { useSelector, useDispatch } from "react-redux";
import { LanguageContext } from "../context/Language";
import "../styles/offert/stylesOffert.css";
import "../styles/offert/stylesSingleOffert.css";

export const Offer = ({ logged }) => {
  const { lang, languageData } = useContext(LanguageContext);

  if (logged == false) {
    return <>{languageData["Brak ofert"]}</>;
  }

  const [clicked, setClicked] = useState(false);
  var initialChosen = localStorage.getItem("chosenOffer");
  if (initialChosen) {
    const table = [
      "Najczęściej kupowane",
      "Najrzadziej kupowane",
      "Most purchased",
      "Least purchased",
    ];
    const position = table.indexOf(initialChosen);
    if (position < 2 && lang === "en") {
      initialChosen = table[position + 2];
    }
    if (position > 1 && lang === "pl") {
      initialChosen = table[position - 2];
    }
  } else {
    initialChosen = lang === "pl" ? "Najczęściej kupowane" : "Most purchased";
  }
  const [chosen, setChosen] = useState(initialChosen);
  let dispatch = useDispatch();

  const apply = () => {
    if (chosen === languageData["Najrzadziej kupowane"]) {
      dispatch({ type: "leastBought" });
      localStorage.setItem("chosenOffer", chosen);
    } else {
      dispatch({ type: "mostBought" });
      localStorage.setItem("chosenOffer", chosen);
    }
  };

  const items = [
    languageData["Najczęściej kupowane"],
    languageData["Najrzadziej kupowane"],
  ];
  var offers = useSelector((state) => {
    return state.offer;
  });

  const Offer = ({ name, number1, number2, value, link }) => {
    return (
      <div className="containerOffert">
        <div className="miniature">
          <div className="circle">
            <div
              className="circleInside"
              style={{
                backgroundImage: `url(${link})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
        <div className="dataContainer nameOfOffert">{languageData[name]}</div>
        <div className="dataContainer dataOffert">
          {languageData["Liczba sprzedanych sztuk"]}: {number1}
        </div>
        <div className="dataContainer dataOffert">
          {value} {number2}
        </div>
      </div>
    );
  };

  const Data = () => {
    var offerMenu = [];
    var value =
      chosen === languageData["Najczęściej kupowane"]
        ? languageData["Obrót"]
        : languageData["Liczba unikalnych wyświetleń"];
    offers.map((item, idx) => {
      offerMenu.push(
        <Offer
          test={idx}
          name={item.name}
          number1={item.valueOne}
          number2={item.valueTwo}
          value={value}
          link={item.link}
          key={idx}
        />
      );
    });
    return <>{offerMenu}</>;
  };

  return (
    <>
      <div id="offerts">
        <div id="textOffert">{languageData["Ranking ofert"]}</div>
        <div id="filtr">{languageData["Filtr"]}:</div>
        <Menu
          setClicked={setClicked}
          clicked={clicked}
          chosen={chosen}
          setChosen={setChosen}
          width="200px"
          marginLeftArrow="35%"
          items={items}
        />
        <div>
          <div className="actionButton" id="button" onClick={apply}>
            {languageData["Zastosuj"]}
          </div>
        </div>
      </div>
      <Data />
    </>
  );
};
