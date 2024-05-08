import { useContext, useState } from "react";
import { fakeAuthProvider } from "../auth";
import "../styles/stylesShared.css";
import "../styles/stylesLogin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LanguageContext } from "../context/Language";

export const Login = () => {
  const { languageData, lang } = useContext(LanguageContext);
  const [userLogin, setUserLogin] = useState();
  const [loginMessage, setLoginMessage] = useState();
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const login = () => {
    fakeAuthProvider.signin(userLogin, lang, (status) => {
      if (status === "success") {
        navigate("/accounts");
        dispatch({ type: "login", payload: userLogin });
      } else {
        setLoginMessage(status);
      }
    });
  };
  return (
    <div id="loginContainer">
      <div id="textInsideLogin">{languageData["Zaloguj się"]}</div>
      <div id="inputContainer">
        <input
          placeholder={languageData["Nazwa użytkownika"]}
          id="inputLogin"
          name="myInput"
          onChange={(e) => setUserLogin(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setUserLogin(e.target.value);
              login();
            }
          }}
        />
      </div>
      <div id="loginMessage">
        {loginMessage ? <div>{loginMessage}</div> : ""}
      </div>
      <div className="actionButton" id="buttonLogin" onClick={login}>
        {languageData["Zaloguj"]}
      </div>
    </div>
  );
};
