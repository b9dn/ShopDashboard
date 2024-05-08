import React, { useState, useEffect } from "react";
import { Menu } from "../shared/menu";
import "../styles/opinions/stylesOpinion.css";
import "../styles/opinions/stylesComments.css";
import "../styles/stylesNavigation.css";

import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import iconUser from "../assets/images/Icon.svg";
import iconUserDarkMode from "../assets/images/iconDarkMode.svg";
import star from "../assets/images/star.svg";
import starHalf from "../assets/images/starHalf.svg";
import starEmpty from "../assets/images/starEmpty.svg";
import { LanguageContext } from "../context/Language";

export const Opinions = ({ logged }) => {
  const { lang, languageData } = useContext(LanguageContext);

  if (logged == false) {
    return <>{languageData["Brak opinii"]}</>;
  }

  const [clicked, setClicked] = useState(false);
  var initialChosen = localStorage.getItem("chosenOpinion");
  if (initialChosen) {
    const table = [
      "Wszystkie",
      "Pozytywne",
      "Negatywne",
      "All",
      "Positive",
      "Negative",
    ];
    const position = table.indexOf(initialChosen);
    if (position < 3 && lang === "en") {
      initialChosen = table[position + 3];
    }
    if (position > 2 && lang === "pl") {
      initialChosen = table[position - 3];
    }
  } else {
    initialChosen = lang === "pl" ? "Wszystkie" : "All";
  }
  const [chosen, setChosen] = useState(initialChosen);
  const items = [
    languageData["Wszystkie"],
    languageData["Pozytywne"],
    languageData["Negatywne"],
  ];

  let dispatch = useDispatch();

  const apply = () => {
    if (chosen === items[0]) {
      dispatch({ type: "allOpinion" });
      localStorage.setItem("chosenOpinion", chosen);
    } else if (chosen === items[1]) {
      dispatch({ type: "PositiveOpinion" });
      localStorage.setItem("chosenOpinion", chosen);
    } else {
      dispatch({ type: "NegativeOpinion" });
      localStorage.setItem("chosenOpinion", chosen);
    }
  };

  const { theme } = useContext(ThemeContext);

  const Comment = ({ username, comment, rating }) => {
    var stars = [];
    var value = comment === "" ? false : true;
    for (let i = 1; i < 6; i++) {
      let chosenStar;
      if (rating - i >= 0) {
        chosenStar = star;
      } else if (rating - i > -1) {
        chosenStar = starHalf;
      } else {
        chosenStar = starEmpty;
      }
      stars.push(
        <img key={username + i} className="star" src={chosenStar} alt="star" />
      );
    }
    return (
      <div className="containerOfOpinion">
        <img
          className="iconUser"
          src={theme ? iconUserDarkMode : iconUser}
          alt="iconUser"
        />
        <div className="container">
          <div className="dataContainer username">{username}</div>
          {stars}
        </div>
        {value && <div className="dataContainer comment">{comment}</div>}
      </div>
    );
  };

  var opinions = useSelector((state) => {
    return state.opinion;
  });

  const Data = () => {
    var optionMenu = [];
    opinions.map((item, idx) => {
      optionMenu.push(
        <Comment
          username={item.name}
          comment={item.comment}
          rating={item.rating}
          key={idx}
        />
      );
    });
    return <>{optionMenu}</>;
  };

  return (
    <>
      <div id="opinions">
        <Link className="Links" to="opinions">
          <div className="actionButton" id="linkToWebsite">
            {languageData["Zobacz więcej"]}
          </div>
        </Link>
        <div id="text">{languageData["Najnowsze opinie"]}</div>
        <div id="filtr">{languageData["Filtr"]}:</div>
        <Menu
          setClicked={setClicked}
          clicked={clicked}
          chosen={chosen}
          setChosen={setChosen}
          width="140px"
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
