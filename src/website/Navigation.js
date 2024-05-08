import "../styles/stylesNavigation.css";
import "../styles/stylesShared.css";
import icon from "../assets/images/Icon.svg";

import { Content } from "./DashboardContent";
import { Login } from "./Login";
import { Accounts } from "./Accounts";
import { Options } from "./Options";
import { Advice } from "./Advice";
import { Opinions } from "./NewestOpinions";
import { Orders } from "./Orders";

import { Color } from "./Color";
import { fakeAuthProvider } from "../auth";
import { useState, useRef, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LanguageContext } from "../context/Language";

export const Navig = () => {
  Color();
  const { languageData } = useContext(LanguageContext);
  var user = useSelector((state) => {
    return state.user;
  });
  var logged = true;
  var name;
  if (user.username != "") {
    console.log(user.username);
    logged = false;
    name = user.username;
  }
  console.log(logged);
  const [clicked, setCliclked] = useState(true);
  const onClickMenuMobile = () => {
    setCliclked(!clicked);
  };
  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setCliclked(true);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <BrowserRouter>
      <div id="body">
        <div id="topMenu">
          <Link className="Links " to="/">
            <div id="logo">DASHBOARD</div>
          </Link>
          {logged ? (
            <Link className="Links " to="login">
              <div className="actionButton" id="login">
                {languageData["Zaloguj"]}
              </div>
            </Link>
          ) : (
            <Link className="Links " to="accounts">
              <div id="loggedInfo">
                <div id="nameOfUser">{name}</div>
                <img id="imageOfAccount" src={icon} alt="icon" />
              </div>
            </Link>
          )}
        </div>
        <div id="leftMenu">
          <Link className="Links " to="/">
            <div className="menuOption menuOptionLeftMenu">
              {languageData["Panel sprzedawcy"]}
            </div>
          </Link>
          <Link
            className="Links "
            to="/orders"
            state={languageData["Nieopłacone"]}
          >
            <div className="menuOption menuOptionLeftMenu">
              {languageData["Zamówienia"]}
            </div>
          </Link>
          <Link className="Links " to="opinions">
            <div className="menuOption menuOptionLeftMenu">
              {languageData["Najnowsze opinie"]}
            </div>
          </Link>
          <Link className="Links " to="advice">
            <div className="menuOption menuOptionLeftMenu">
              {languageData["Porady sprzedażowe"]}
            </div>
          </Link>
          <Link className="Links " to="option">
            <div className="menuOption menuOptionLeftMenu">
              {languageData["Opcje"]}
            </div>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/option" element={<Options />} />
          <Route path="/opinions" element={<Opinions />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/advice" element={<Advice />} />
        </Routes>
      </div>
      {clicked ? (
        <h1 id="menuMobile" onClick={onClickMenuMobile}>
          ≡
        </h1>
      ) : (
        <div
          id="leftMenuMobileExpanded"
          onClick={onClickMenuMobile}
          ref={menuRef}
        >
          <Link className="Links " to="/">
            <div className="menuOption menuOptionLeftMenu">
              {languageData["Panel sprzedawcy"]}
            </div>
          </Link>
          <Link
            className="Links "
            to="/orders"
            state={languageData["Nieopłacone"]}
          >
            <div className="menuOption menuOptionLeftMenu">
              {languageData["Zamówienia"]}
            </div>
          </Link>
          <Link className="Links " to="opinions">
            <div className="menuOption menuOptionLeftMenu">
              {languageData["Najnowsze opinie"]}
            </div>
          </Link>
          <Link className="Links " to="advice">
            <div className="menuOption menuOptionLeftMenu">
              {languageData["Porady sprzedażowe"]}
            </div>
          </Link>
          <Link className="Links " to="option">
            <div className="menuOption menuOptionLeftMenu">
              {languageData["Opcje"]}
            </div>
          </Link>
        </div>
      )}
    </BrowserRouter>
  );
};
