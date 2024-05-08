import "../styles/stylesExpandableMenu.css";
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../context/Theme";
import arrow from "../assets/images/arrows.svg";
import arrowDarkMode from "../assets/images/arrowsDarkMode.svg";
import { LanguageContext } from "../context/Language";
export const Menu = ({
  setClicked,
  clicked,
  chosen,
  setChosen,
  width,
  marginLeftArrow,
  items,
}) => {
  const { theme } = useContext(ThemeContext);
  const changeClicked = () => {
    setClicked(!clicked);
  };
  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setClicked(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeChosen = (option) => {
    setClicked(!clicked);
    setChosen(option);
  };

  const OptionsView = () => {
    var optionMenu = [];
    items.map((item, idx) => {
      optionMenu.push(
        <li
          key={item + idx}
          onClick={() => changeChosen(item)}
          className="menuOption expandedOptions"
          style={{ width: width }}
        >
          {item}
        </li>
      );
    });

    return <>{optionMenu}</>;
  };

  return (
    <div id="menu">
      <img
        className="symbol"
        src={theme ? arrowDarkMode : arrow}
        alt="icon"
        style={{ width: "22px", height: "22px", marginLeft: marginLeftArrow }}
      />
      <ul id="containerOfOpitons" ref={menuRef}>
        <li
          onClick={changeClicked}
          className="menuOption"
          style={{ width: width, float: "none" }}
        >
          {chosen}
        </li>
        <div
          style={{
            position: "absolute",
          }}
        >
          {clicked && <OptionsView />}
        </div>
      </ul>
    </div>
  );
};
