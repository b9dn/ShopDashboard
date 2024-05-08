import { ThemeContext } from "../context/Theme";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fakeAuthProvider } from "../auth";
import iconUser from "../assets/images/Icon.svg";
import iconUserDarkMode from "../assets/images/iconDarkMode.svg";
import { LanguageContext } from "../context/Language";
import "../styles/stylesAccounts.css";

export const Accounts = () => {
  const { languageData } = useContext(LanguageContext);
  const disptach = useDispatch();
  const logout = () => {
    fakeAuthProvider.signout();
    disptach({ type: "logOut" });
  };
  const changeUser = (name) => {
    disptach({ type: "changeUsername", payload: name });
  };
  const { theme } = useContext(ThemeContext);
  var user = useSelector((state) => {
    return state.user;
  });
  const Category = ({ name }) => {
    return (
      <div className="categoryboxaccount" onClick={() => changeUser(name)}>
        <div className="categoryNameAccount">
          <p>{name}</p>
        </div>
        <div className="iconAccount">
          <img
            className="iconUserAccount"
            src={theme ? iconUserDarkMode : iconUser}
            alt="iconUser"
          />
        </div>
      </div>
    );
  };
  const Categories = () => {
    var holder = [];
    user.connected.map((item, idx) => {
      if (item != user.username) {
        holder.push(<Category key={item + idx} name={item} />);
      }
    });
    return holder;
  };
  var checker = fakeAuthProvider.isAuthenticated;
  return (
    <>
      {checker && (
        <div id="containerAccounts">
          <div className="actionButton" id="buttonLogout" onClick={logout}>
            {languageData["Wyloguj"]}
          </div>
          <p id="textAccounts">{languageData["Wybierz"]}:</p>
          <div id="categoriesAccount">
            <Categories />
          </div>
        </div>
      )}
    </>
  );
};
