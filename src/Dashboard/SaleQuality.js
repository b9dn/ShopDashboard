import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import "../styles/stylesSaleQuality.css";
import { LanguageContext } from "../context/Language";
import { useContext } from "react";

const Category = ({ name, percentage }) => {
  const backgroundColor =
    document.documentElement.style.getPropertyValue("--fontColor");
  const circularProgressbarBackground =
    document.documentElement.style.getPropertyValue(
      "--circularProgressbarBackground"
    );

  return (
    <div className="categoryBox">
      <div className="categoryName">
        <p>{name}</p>
      </div>
      <div className="circularCategoryDiv">
        <CircularProgressbar
          value={percentage}
          text={percentage + "/100"}
          strokeWidth={12}
          background
          backgroundPadding={3}
          styles={buildStyles({
            strokeLinecap: "butt",
            textColor: backgroundColor,
            pathColor: "#0B5C6C",
            trailColor: "transparent",
            textSize: "0.8em",
            rotation: 1 - percentage / 100,
            backgroundColor: circularProgressbarBackground,
          })}
        />
      </div>
      <div></div>
    </div>
  );
};

export const Quality = ({ logged }) => {
  const { languageData } = useContext(LanguageContext);

  if (logged == false) {
    return <>{languageData["Brak danych"]}</>;
  }

  let quality = useSelector((state) => state.quality);
  const backgroundColor =
    document.documentElement.style.getPropertyValue("--fontColor");

  return (
    <>
      <div id="mainMark">
        <CircularProgressbar
          value={quality.averageQuality}
          text={quality.averageQuality + "/100"}
          strokeWidth={12}
          styles={buildStyles({
            strokeLinecap: "butt",
            textColor: backgroundColor,
            pathColor: "#0B5C6C",
            trailColor: "transparent",
            textSize: "0.8em",
            rotation: 1 - quality.averageQuality / 100,
          })}
        />
        <div className="markText">
          <h3>{languageData["Ocena"]}:</h3>
          <h3>{languageData[quality.averageMark]}</h3>
        </div>
      </div>
      <div id="textDiv">
        <p style={{ margin: 0 }}>{languageData["Twoje najsłabsze strony"]}:</p>
      </div>
      <div id="categories">
        {quality.worstCategories.map((categ, idx) => (
          <Category
            key={idx}
            name={languageData[categ.name]}
            percentage={categ.value}
          />
        ))}
      </div>
    </>
  );
};
